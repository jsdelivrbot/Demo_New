import { Component, OnInit } from '@angular/core';
//import { routerTransition } from '../../router.animations';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';
@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
   // animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    routeLinks: any[];
    activeLinkIndex = -1;
    constructor(private router: Router) {
      this.routeLinks = [
          {
              label: 'Product 1',
              link: './tabs/product1',
              index: 0
          }, {
              label: 'Product 2',
              link: './product2',
              index: 1
          }
      ];
  }
  
    
    ngOnInit(): void {
      this.router.events.subscribe((res) => {
          this.activeLinkIndex = this.routeLinks.indexOf(this.routeLinks.find(tab => tab.link === '.' + this.router.url));
      });
  }
}
