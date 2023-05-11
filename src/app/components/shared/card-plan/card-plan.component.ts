import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plan } from 'src/app/data/plans';

@Component({
  selector: 'app-card-plan',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article
      *ngIf="plan"
      (click)="selectedPlan()"
      class="flex gap-x-2.5 border p-3 rounded-md md:flex-col md:gap-y-8 xl:gap-y-10 xl:p-4"
      [ngClass]="planId === plan.id ? 'bg-magnolia border-purplish-blue' : '' "
    >
      <figure>
        <img [src]="plan.image" [alt]="plan.title">
      </figure>
      <div class="-mt-1">
        <h2 class="text-marine-blue text-base font-semibold mb-0" >{{plan.title}}</h2>
        <!-- <p class="text-cool-gray text-sm" > $ {{choosePlan ? plan.cost * 10 : plan.cost }}{{choosePlan ? '/yr' : '/mo'}}</p> -->
        <p class="text-cool-gray text-sm" *ngIf="!choosePlan" >{{ plan.cost | currency }}/mo</p>
        <p class="text-cool-gray text-sm" *ngIf="choosePlan" >{{ plan.cost * 10 | currency }}/yr</p>
        <p class="text-xs text-marine-blue font-medium" *ngIf="choosePlan">{{plan.promotions}}</p>
      </div>
    </article>
  `,
  styles: [
  ]
})
export class CardPlanComponent {

  // data del plan a renderizar
  @Input() plan!:Plan;

  //Selecciona entre plan mensual y anual
  @Input() choosePlan:boolean = true;

  // Identifica el plan seleccionado y agrega clases de estilos
  @Input() planId:number = 0;

  // Emite un evento cuando se hace click en la card, el cual es escuchado por el padre.
  @Output() onSelect = new EventEmitter<number>();

  // Se ejecuta mediante el click a la card y emite el evento onSelect, con el id del plan.
  selectedPlan() {
    this.onSelect.emit(this.plan.id);
  }

}















