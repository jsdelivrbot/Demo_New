import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { BusinessCaseComponent } from './BusinessCase/businessCase.component';
import { ProspectsComponent } from './prospects/prospects.component';
import { InquiriesComponent } from './inquiries/inquiries.component';
import { CustomersService } from "./customers.service";
import { MaterialModule } from '../../../material-module/material.module';

// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';




const customersRoutes = [
  {
    path: 'customers',
    component: CustomersComponent,
    // children: [      
    //   {
    //     path: 'list',
    //     component: CustomersListComponent
    //   },
    //   {
    //     path: 'prospects',
    //     component: ProspectsComponent
    //   },
    //   {
    //     path: 'inquiries',
    //     component: InquiriesComponent
    //   }
    // ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(customersRoutes),
  ],
  declarations: [CustomersComponent, BusinessCaseComponent, ProspectsComponent, InquiriesComponent],
  providers: [CustomersService]
})
export class CustomersModule { }
