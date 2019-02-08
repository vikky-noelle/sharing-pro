import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'sports-social-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GalleryComponent implements OnInit {

  constructor() { }
  @Input() images = [];
  image;
  loading = false;
  firstImageLoaded = false;
  likeCount;
  commentCount;
  text;
  i = 0;

  addimage(path) {
    return new Promise( (resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve(path);
      };
      img.onerror = () => {
        resolve('/assets/images/default-image.png');
      };

      img.src = path;
    });
  }

  left() {
    this.loading = true;
    this.i = this.i - 1;
    this.addimage(this.images[ this.i ].image).then(
      (path) => {
        this.loading = false;
        this.image = path;
        this.likeCount = this.images[this.i].likeCount;
        this.commentCount = this.images[this.i].commentCount;
        this.text = this.images[this.i].text;
      }
    );
  }

  right() {
    this.loading = true;
    this.i = this.i + 1;
    if ( this.i < this.images.length) {
      this.addimage(this.images[ this.i ].image).then(
        (path) => {
          this.loading = false;
          this.image = path;
          this.likeCount = this.images[this.i].likeCount;
          this.commentCount = this.images[this.i].commentCount;
          this.text = this.images[this.i].text;
        }
      );
    } else {
      this.loading = false;
    }
  }

  hasnext() {

    if ( this.images.length > 1 && this.i < this.images.length ) {
      return true;
    }
    return false;
  }

  hasprevious() {
    if ( this.i > 0  ) {
      return true;
    }
    return false;
  }
  ngOnInit() {
    this.images = this.images.reverse();
    this.loading = true;
    console.log(this.images);
    this.addimage(this.images[0].image).then(
      (path) => {
        this.loading = false;
        this.firstImageLoaded = true;
        this.image = path;
        this.likeCount = this.images[this.i].likeCount;
        this.commentCount = this.images[this.i].commentCount;
        this.text = this.images[this.i].text;
      }
    );
  }

}
