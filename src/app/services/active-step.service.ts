import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiveStepService {

  // Valor inicial
  value:number = 1;

  // Observable
  private valueId$ = new BehaviorSubject<number>(this.value);

  // Suscriptor al observable
  valueId = this.valueId$.asObservable();

  /**
   * Incrementa el valor en uno
   */
  setNextValue(){
    this.value++;
    this.valueId$.next(this.value);
  }

  /**
   * Decrementa el valor en uno
   */
  setBeforeValue(){
    this.value--;
    this.valueId$.next(this.value);
  }
}







