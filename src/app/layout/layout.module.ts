import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TranslateModule } from '@ngx-translate/core';
//import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from '../material-module/material.module';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

import {BusinessService} from './ServiceModule/Business.service';

////import { CustomersModule } from './customers/customers.module';
//import { CustomersComponent } from './customers/customers.component';
//import { CustomersModule } from './customers/customers.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterialModule,
        
        //CustomersModule
      //  TranslateModule,
       // NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent, HeaderComponent,SidebarComponent],
    providers:[BusinessService]
})
export class LayoutModule {}
