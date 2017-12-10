import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
   constructor(private router: Router)
   {

   }
   goToLink(path: string) {   
    this.router.navigate([`${path}`]);
  }
}
