import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { IRiskResponse} from './BusinessModel'
@Injectable()
export class BusinessService 
{

    riskGradeUrl: string;


constructor(private http: HttpClient) {

    this.riskGradeUrl = "/assets/data/RiskGrade/riskgrade.json";
}

getRiskData() {
    return this.http.get<IRiskResponse>(this.riskGradeUrl);
    
  }
}