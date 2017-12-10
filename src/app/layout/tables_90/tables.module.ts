import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module/material.module';
import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables.component';
//import { PageHeaderModule } from './../../shared';
import{TabsDemo,FoggyTabContent,RainyTabContent,SunnyTabContent} from './tabs/tab.demo'
import { Product1Component } from './tabs/products/product-1/product-1.component';
import { Product2Component } from './tabs/products/product-2/product-2.component';
import { Product3Component } from './tabs/products/product-3/product-3.component';
import { Product4Component } from './tabs/products/product-4/product-4.component';
import { Product5Component } from './tabs/products/product-5/product-5.component';
import {TabsModule} from './tabs/tabs.module';
@NgModule({
    imports: [CommonModule, TablesRoutingModule,MaterialModule],
    declarations: [
        TablesComponent,
        TabsDemo,
        
       // FoggyTabContent,
       // RainyTabContent,
        //SunnyTabContent,
        Product1Component,
        Product2Component,
        Product3Component,
        Product4Component,
        Product5Component,
    ]
})
export class TablesModule {}
