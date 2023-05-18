import { Injectable, inject } from '@angular/core';
import { StorePlansService } from './store-plans.service';
import { Plan } from './../interfaces/plan';
import { Extra } from './../interfaces/extra';
import { BehaviorSubject } from 'rxjs';
import { servicesExtra } from '../data/services';
import { Summary } from '../interfaces/summary';
import { Additional } from '../interfaces/additional';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private storePlansService:StorePlansService = inject(StorePlansService);

  // almacena información personal.
  private infoPersonal = {};

  // almacena el plan seleccionado.
  private plan:Plan|undefined = undefined;

  // almacena los servicios adicionales
  private serviceAditional:Additional = {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
  };

  // almacena el tipo de plan seleccionado
  private typePlanSelected:string = '';

  // Observable para el manejo del estado global del tipo de plan escogido.
  private typePlanChoosed$ = new BehaviorSubject<string>('');
  private _planChoosed = this.typePlanChoosed$.asObservable();

  constructor() { }

  get planChoosed(){
    return this._planChoosed;
  }

  // Almacena la información personal de la persona con la información proveniente desde el formulario del paso 1.
  saveInfoPersonal(data:object){
    this.infoPersonal = data;
    console.log(data);
  }

  /**
   * almacena el plan seleccionado con su forma de servicio mensual o anual,
   * y emite una notificación para indicar el tipo de plan selecionado por el usuario.
   *
   * @param id identificador del tipo de plan a seleccionar
   * @param typePlan plan escogido por el cliente, que contiene monthly o yearly
   */

  saveSelectedPlan(id:number, typePlan:string){
    this.storePlansService.getOne(id)
      .subscribe(data => {
        this.plan = data;

        this.typePlanSelected = typePlan;
        this.typePlanChoosed$.next(this.typePlanSelected);
      });
  }

  saveServiceAdditional(data:Additional){
    this.serviceAditional = data;
    console.log(data)
  }

  showSummaryFinal(): Summary {
    const summary: Extra[] = [];
    const servicesExtraNext = servicesExtra.slice();

    if(this.serviceAditional.onlineService){
      summary.push(servicesExtraNext[0]);
    }

    if(this.serviceAditional.largerStorage){
      summary.push(servicesExtraNext[1]);
    }

    if(this.serviceAditional.customizableProfile){
      summary.push(servicesExtraNext[2])
    }

    return {
      plan: this.plan,
      services: summary,
      typePlan: this.typePlanSelected
    }

  }


}















