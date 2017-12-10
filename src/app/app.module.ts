import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MaterialModule } from './material-module/material.module';




//Base Routing and base component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { CustomersModule } from './customers/customers.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,        
        AppRoutingModule,
        //Mat Module For Whole Application
        MaterialModule,
        //CustomersModule
    ],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
