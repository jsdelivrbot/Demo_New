import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablesComponent } from './tables.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
const routes: Routes = [
    {
        path: '', component: TablesComponent,
        children: [
            {
                path: 'customers',
                component: CustomersComponent,
                loadChildren: './customers/customers.module#CustomersModule',
                data: { preload: true }
              },
              {
                path: 'orders',
                component: OrdersComponent,
                loadChildren: './orders/orders.module#OrdersModule',
                data: { preload: true }
            
              },
          ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}
