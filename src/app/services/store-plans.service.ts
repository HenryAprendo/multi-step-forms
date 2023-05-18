import { Injectable } from '@angular/core';
import { plans} from '../data/plans';
import { Observable, of } from 'rxjs';
import { Plan } from '../interfaces/plan';

@Injectable({
  providedIn: 'root'
})
export class StorePlansService {

  /**
   * Un array con una lista de planes del tipo Plan
   */
  private plans:Plan[] = plans.slice();

  constructor() { }

  /**
   * Devuelve un observable de todos los planes.
   * @returns
   */
  getAll(): Observable<Plan[]> {
    return of(this.plans);
  }

  /**
   * Método para obtener un plan especifico por el id.
   * @param id identificador del tipo de plan
   * @returns un observable con el tipo Plan o undefined
   */

  getOne(id:number): Observable<Plan|undefined> {
    const plan = this.plans.find(plan => plan.id === id);
    if(!plan){
      return of(undefined);
    }
    return of(plan);
  }

}
