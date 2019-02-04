import { 
  Component, 
  OnInit,
  HostListener,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.css']
})
export class HelpCenterComponent implements OnInit {
  
  @ViewChild(HelpCenterComponent) helpCenter;
  togglableNav:boolean=false;
  constructor() { 
}

  ngOnInit() {
    console.log(this.helpCenter);
  }
  @HostListener('window:resize',[]) onScreenResize(){
    
  }
}
