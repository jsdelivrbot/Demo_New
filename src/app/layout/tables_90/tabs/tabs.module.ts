import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material-module/material.module';
import { TabsRoutingModule } from './tabs-routing.module';
//import { TablesComponent } from './tables.component';
//import { PageHeaderModule } from './../../shared';
import{TabsDemo} from './tab.demo'
import { Product1Component } from './products/product-1/product-1.component';
import { Product2Component } from './products/product-2/product-2.component';
import { Product3Component } from './products/product-3/product-3.component';
import { Product4Component } from './products/product-4/product-4.component';
import { Product5Component } from './products/product-5/product-5.component';
@NgModule({
    imports: [CommonModule, TabsRoutingModule,MaterialModule],
    declarations: [
        //TablesComponent,
       // TabsDemo,
       // FoggyTabContent,
       // RainyTabContent,
        //SunnyTabContent,
       // Product1Component,
      //  Product2Component,
      //  Product3Component,
      //  Product4Component,
      //  Product5Component,
    ]
})
export class TabsModule {}