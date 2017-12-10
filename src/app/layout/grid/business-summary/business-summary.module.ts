import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../../material-module/material.module';

import { BusinessSummaryComponent } from './business-summary.component';
import { RiskGradeComponent } from './risk-grade/risk-grade.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { EngagementDataComponent } from './engagement-data/engagement-data.component';
import { BusinessCaseComponent } from './business-case/business-case.component';
import { QuestionnaireSummaryComponent } from './questionnaire-summary/questionnaire-summary.component';

@NgModule({
  imports: [MaterialModule, CommonModule],
  exports: [BusinessSummaryComponent],
  declarations: [
    BusinessSummaryComponent,
    RiskGradeComponent,
    AttachmentsComponent,
    EngagementDataComponent,
    BusinessCaseComponent,
    QuestionnaireSummaryComponent
  ],
  providers: []
})
export class BusinessSummaryModule {}
