import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './../shared/frame/frame.component';
import { FormTitleComponent } from './../shared/form-title/form-title.component';
import { FormDescriptionComponent } from './../shared/form-description/form-description.component';
import { ButtonActionComponent } from './../shared/button-action/button-action.component';
import { SummaryService } from './../../services/summary.service';
import { Summary } from './../../interfaces/summary';



@Component({
  selector: 'app-finishing-up',
  standalone: true,
  imports: [CommonModule, FrameComponent, FormTitleComponent, FormDescriptionComponent, ButtonActionComponent],
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.scss']
})
export class FinishingUpComponent {

  summaryService:SummaryService = inject(SummaryService);

  summary!:Summary;

  typePlan:string = '';

  total!:number;

  constructor(){
    this.summary = this.summaryService.showSummaryFinal();
    this.typePlan = this.summary.typePlan;
    this.calculate();
  }

  private calculate(){
    let costPlan = this.typePlan === 'monthly' ? this.summary.plan?.cost : this.summary.plan?.cost! * 10;
    let costServices:number = 0;

    if(this.typePlan === 'monthly'){
      costServices = this.summary.services.reduce((acc,actual) => acc + actual.value.cost, 0);
    }
    else {
      costServices = this.summary.services.reduce((acc,actual) => acc + actual.value.costYearly, 0);
    }
    this.total = costPlan! + costServices;
  }

}







