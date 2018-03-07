import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
  Renderer2,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sports-social-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PopUpComponent implements OnInit {



  constructor(
    private router: Router
  ) { }

  close() {
    this.router.navigate([ { outlets: { 'AppDownload': null }} ], { skipLocationChange: true });
  }


  ngOnInit() {
  }

}
