import { Component, OnInit } from '@angular/core';
//import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    //animations: [routerTransition()]
})
export class GridComponent implements OnInit {

    isActive = {
        basicInfo: false,
        engData: false,
        entityData: false,
        questionAnswer: false,
        businessSummary: false,
        approval: false
      };
    
      isActiveCopy = JSON.stringify(this.isActive);
      constructor() {}
    
      ngOnInit() {
        this.clickMenu('businessSummary');
      }
    
      clickMenu(menu) {
        this.isActive = JSON.parse(this.isActiveCopy);
        this.isActive[menu] = true;
      }
}
