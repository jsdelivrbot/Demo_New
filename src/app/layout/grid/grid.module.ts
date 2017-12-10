import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { GridComponent } from './grid.component';
//import { PageHeaderModule } from './../../shared';
import { MaterialModule } from '../../material-module/material.module';

import {ApprovalComponent} from './approval/approval.component'
import {BasicInfoComponent} from './basic-info/basic-info.component'
import {BusinessSummaryComponent} from './business-summary/business-summary.component'
import {EngagementDataComponent} from './engagement-data/engagement-data.component'
import {EntityDataComponent} from './entity-data/entity-data.component'
import{QuestionAnswerComponent} from './question-answer/question-answer.component'

import{BusinessSummaryModule}from './business-summary/business-summary.module'


@NgModule({
    imports: [CommonModule, GridRoutingModule,MaterialModule,BusinessSummaryModule],
    declarations: [
        GridComponent,        
        ApprovalComponent,
        BasicInfoComponent,
       // BusinessSummaryComponent,
        EngagementDataComponent,
        EntityDataComponent,
        QuestionAnswerComponent,
    ]
})
export class GridModule {}
