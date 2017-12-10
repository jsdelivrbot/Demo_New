import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass: string = 'push-right';

    @Output() navToggle = new EventEmitter<boolean>();
    
    navOpen() {
      this.navToggle.emit(true);
    }
    constructor() {}
  
    ngOnInit() {}
  
    
}
