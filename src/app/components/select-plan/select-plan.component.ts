import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FrameComponent } from './../shared/frame/frame.component';
import { ButtonActionComponent } from './../shared/button-action/button-action.component';
import { FormDescriptionComponent } from './../shared/form-description/form-description.component';
import { FormTitleComponent } from './../shared/form-title/form-title.component';
import { CardPlanComponent } from './../shared/card-plan/card-plan.component';

import { plans, Plan} from './../../data/plans';

@Component({
  selector: 'app-select-plan',
  standalone: true,
  imports: [CommonModule, FrameComponent, ButtonActionComponent, FormDescriptionComponent, FormTitleComponent, CardPlanComponent],
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.scss']
})
export class SelectPlanComponent {

  router:Router = inject(Router);

  // Lista de planes
  plans: Plan[] = plans.slice();

  planSelected!:Plan;

  selectedId = 0;

  chooseMonthYearly = false;

  toggleChooseMonthYearly() {
    this.chooseMonthYearly = !this.chooseMonthYearly;
  }

  onPlantSelected(id:number){
    this.selectedId = id;
  }

  //Métodos Redireccionamiento
  goBack(){
    this.router.navigate(['/']);
  }

  redirectNextStep() {
    this.router.navigate(['']);
  }

}



















