import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';




const routes: Routes = [
    
    { path: '', loadChildren: './layout/layout.module#LayoutModule'}, 
      
  { path: '**', redirectTo: 'dashboard' ,pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
