import { Component, OnInit } from '@angular/core';
import { CustomersService } from './../customers.service';
import { Customer } from './../customers.model';


import {BusinessService} from '../../../ServiceModule/Business.service';

import {IRiskResponse} from '../../../ServiceModule/BusinessModel';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'business-case',
  templateUrl: './businessCase.component.html'
})
export class BusinessCaseComponent implements OnInit {
  // private customers: Customer[]; 
  // private errorMessage: any;
  // constructor(private customerService: CustomersService) { }

  // ngOnInit() {
  //   this.getCustomers();
  //   console.log("Getting projects");
  // }

  // getCustomers() {
  //   this.customerService.getCustomers()
  //     .subscribe(
  //     customers => this.customers = customers,
  //     error => this.errorMessage = <any>error
  //     );
  // }
  isRisk:boolean;
  isBusiness:boolean;

  //Flags
  //medium
  isRiskToggleMedium:boolean;
  isDisabledMedium:boolean;

 //High
 isRiskToggleHigh:boolean;
 isDisabledHigh:boolean;

//Very High
isRiskToggleVeryHigh:boolean;
isDisabledVeryHigh:boolean;

//Low
isRiskToggleLow:boolean;
isDisabledLow:boolean;

  previousRiskGrade:string;
  computedRiskGrade:string;
  suggestedRiskGrade:string;
  submitedRiskGrade:string;
  
  constructor(private businessRiskGrade: BusinessService) { }


  getRiskGradeBusiness()
  {
     this.businessRiskGrade.getRiskData().subscribe(riskgrade => {       

          this.previousRiskGrade=riskgrade.previousRisk;
          this.computedRiskGrade= riskgrade.computedRisk;
          this.suggestedRiskGrade=riskgrade.suggestedRisk;
          if(this.computedRiskGrade== 'medium')
          {
            this.getRiskMedium();
          }
          else if(this.computedRiskGrade== 'high')
          {
            this.getRiskHigh();
          }
          else if(this.computedRiskGrade== 'veryhigh')
          {
            this.getRiskVeryHigh();
          }
          else{
            this.isDisabledLow=true;
            this.isDisabledMedium=false;            
            this.isDisabledHigh = false;  
            this.isDisabledVeryHigh = false;  
          }
          //this.getRiskToggle(this.computedRiskGrade);
     },
     (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    } 
    
    );
  }
  getRiskMedium()
  {
    if(this.computedRiskGrade== 'medium')
    {
      this.isRiskToggleMedium=true;
      this.isDisabledLow=true;
     console.log("isRiskToggle" + this.isRiskToggleMedium);
     this.isDisabledMedium =true;
     
    }
    else
    {
      this.isRiskToggleMedium=false;
      this.isDisabledMedium =false;
    }
  }
  getRiskHigh()
  {
    if(this.computedRiskGrade== 'high')
    {
      this.isDisabledMedium=true;
      this.isDisabledLow=true;
      this.isDisabledHigh = true;
     console.log("isRiskToggle" + this.isRiskToggleMedium);
     this.isDisabledMedium =true;
    }
    else
    {
      this.isRiskToggleHigh=false;
      this.isDisabledMedium =false;
    }
  }
  getRiskVeryHigh()
  {
    if(this.computedRiskGrade== 'veryhigh')
    {
      this.isDisabledMedium=true;
      this.isDisabledLow=true;
      this.isDisabledHigh = true;      
     console.log("isRiskToggle" + this.isRiskToggleMedium);
     this.isDisabledVeryHigh =true;
    }
    else
    {
      this.isRiskToggleHigh=false;
      this.isDisabledMedium =false;
    }
  }
  // getRiskToggle(computedRiskGrade) { 
  //   switch (computedRiskGrade) {
  //     case 'medium':
  //       return 'green';
  //     case 'high':
  //       return 'blue';
  //     case 'HK':
  //       return 'red';
  //   }
  // }

  ngOnInit()
  {
    //debugger;
    this.getRiskGradeBusiness();

  this.isRisk=true;
  this.isBusiness=true
  
  }
    myRiskOpen()
    {
      this.isRisk=true;
      console.log("Risk open" +    this.isRisk)
    }
    myRiskClosed()
    {
      this.isRisk=false ;
      console.log("Risk close" +    this.isRisk)
    }
  
    myBusinessOpen()
    {
      this.isBusiness=true;
      console.log("Business open" +    this.isBusiness)
    }
    myBusinessClosed()
    {
      this.isBusiness=false;
      console.log("Business close" +    this.isBusiness)
    }
  
  }
  
  export enum WeekDays{
    Mon=1,
    Tue,
    Wed,
    Thu,
    Fri
  }