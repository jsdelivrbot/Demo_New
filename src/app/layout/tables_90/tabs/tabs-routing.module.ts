import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsDemo } from './tab.demo';
import { Product1Component } from './products/product-1/product-1.component';
import { Product2Component } from './products/product-2/product-2.component';
import { Product3Component } from './products/product-3/product-3.component';
import { Product4Component } from './products/product-4/product-4.component';
import { Product5Component } from './products/product-5/product-5.component';


const routes: Routes = [
    {
        path: '', component: TabsDemo,pathMatch: 'full',
        //children: [
            
          //  { path: 'product1', component: Product1Component , pathMatch: 'full'},
          //  { path: 'product2', component: Product2Component , pathMatch: 'full'},
          //  { path: 'product3', component: Product3Component , pathMatch: 'full'},
          //  { path: 'product4', component: Product4Component , pathMatch: 'full'},
         //   { path: 'product5', component: Product5Component , pathMatch: 'full'},
         //   { path: '**', redirectTo: 'product4', pathMatch: 'full' }
        //  ]
    },
    
    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsRoutingModule {
}
