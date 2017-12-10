import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';

import { Product1Component } from './tabs/products/product-1/product-1.component';
import { Product2Component } from './tabs/products/product-2/product-2.component';
import { Product3Component } from './tabs/products/product-3/product-3.component';
import { Product4Component } from './tabs/products/product-4/product-4.component';
import { Product5Component } from './tabs/products/product-5/product-5.component';


const routes: Routes = [
    {
        path: '', component: TablesComponent,pathMatch: 'full',
        children: [
            
         //  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsModule' },
           { path: 'product1', component: Product1Component , pathMatch: 'full'},
           { path: 'product2', component: Product2Component , pathMatch: 'full'},
           { path: 'product3', component: Product3Component , pathMatch: 'full'},
           { path: 'product4', component: Product4Component , pathMatch: 'full'},
           { path: 'product5', component: Product5Component , pathMatch: 'full'},
           { path: '**', redirectTo: 'product4', pathMatch: 'full' }
        ]
    },
    
    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}
