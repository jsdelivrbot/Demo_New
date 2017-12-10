import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
//import { PageHeaderModule } from './../../shared';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';

import {HttpModule} from '@angular/http';
import { MaterialModule } from '../../material-module/material.module';
@NgModule({
    imports: [CommonModule,
         TablesRoutingModule,
        CustomersModule,
        HttpModule,
        OrdersModule,
        MaterialModule
    ],


    declarations: [TablesComponent]

})
export class TablesModule {}
