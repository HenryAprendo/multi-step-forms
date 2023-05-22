import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './../shared/frame/frame.component';
import { FormTitleComponent } from './../shared/form-title/form-title.component';
import { FormDescriptionComponent } from './../shared/form-description/form-description.component';
import { ButtonActionComponent } from './../shared/button-action/button-action.component';
import { SummaryService } from './../../services/summary.service';
import { Summary } from './../../interfaces/summary';
import { Router } from '@angular/router';
import { ActiveStepService } from './../../services/active-step.service';

@Component({
  selector: 'app-finishing-up',
  standalone: true,
  imports: [CommonModule, FrameComponent, FormTitleComponent, FormDescriptionComponent, ButtonActionComponent],
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.scss']
})
export class FinishingUpComponent {

  private summaryService:SummaryService = inject(SummaryService);
  private router:Router = inject(Router);
  private activeStepService:ActiveStepService = inject(ActiveStepService);

  /**
   * Almacena el resumén total del plan y servicios escogidos.
   */
  summary!:Summary;

  /**
   * Tipo del plan seleccionado
   */
  typePlan:string = '';

  /**
   * Costo total de los servicios y plan escogido.
   */
  total!:number;

  // Se coloca en true cuando el se confirma el envio del formulario.
  isSending:boolean = false;

  constructor(){
    this.summary = this.summaryService.showSummaryFinal();
    this.typePlan = this.summary.typePlan;
    this.calculate();
  }

  /**
   * Getter que devuelve true si el tipo de plan escogido es "monthly", util para plantilla.
   */
  get activePlan(){
    return this.summary.typePlan === 'monthly';
  }

  onConfirmShopping() {
    // todo
    this.isSending = !this.isSending;
  }

  goBack() {
    this.activeStepService.setBeforeValue();
    this.router.navigate(['/add-on']);
  }

  /**
   * Método para el calcular el costo total del plan y servicios extra.
  */
 private calculate(){
   let costPlan = this.activePlan ? this.summary.plan?.cost : this.summary.plan?.cost! * 10;
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














