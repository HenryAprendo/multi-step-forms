import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FrameComponent } from './../shared/frame/frame.component';
import { ButtonActionComponent } from './../shared/button-action/button-action.component';
import { FormDescriptionComponent } from './../shared/form-description/form-description.component';
import { FormTitleComponent } from './../shared/form-title/form-title.component';
import { CardPlanComponent } from './../shared/card-plan/card-plan.component';

import { plans} from './../../data/plans';
import { SummaryService } from './../../services/summary.service';
import { Plan } from './../../interfaces/plan';
import { ActiveStepService } from './../../services/active-step.service';

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [CommonModule, FrameComponent, ButtonActionComponent, FormDescriptionComponent, FormTitleComponent, CardPlanComponent],
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent {

  private summaryService:SummaryService = inject(SummaryService);

  private router:Router = inject(Router);

  private activeStepService:ActiveStepService = inject(ActiveStepService);

  // Lista de planes
  plans: Plan[] = plans.slice();

  planSelected!:Plan;

  selectedId = -1;

  // determinan el tipo de plan
  chooseMonthYearly:boolean = false;
  typePlan:string = 'monthly';

  toggleChooseMonthYearly() {
    this.chooseMonthYearly = !this.chooseMonthYearly;
    this.typePlan = this.chooseMonthYearly ? 'yearly' : 'monthly'
  }

  onPlantSelected(id:number){
    this.selectedId = id;
  }

  onSaveSelectedPlan(){
    const id = this.selectedId;
    const typePlan = this.typePlan;

    if(this.selectedId >= 0){
      this.summaryService.saveSelectedPlan(id,typePlan);
      this.activeStepService.setNextValue();
      this.redirectNextStep();
    }
    else {
      console.log('Select a plan now for continue');
    }
  }

  //Métodos Redireccionamiento
  goBack(){
    this.activeStepService.setBeforeValue();
    this.router.navigate(['../']);
  }

  private redirectNextStep() {
    this.router.navigate(['/add-on']);
  }

}



















