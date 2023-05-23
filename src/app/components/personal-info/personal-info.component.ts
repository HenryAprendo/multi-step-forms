import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FrameComponent } from './../shared/frame/frame.component';
import { ButtonActionComponent } from '../shared/button-action/button-action.component';
import { FormTitleComponent } from './../shared/form-title/form-title.component';
import { FormDescriptionComponent } from './../shared/form-description/form-description.component';

import { SummaryService } from './../../services/summary.service';
import { ActiveStepService } from './../../services/active-step.service';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FrameComponent, ButtonActionComponent, FormDescriptionComponent, FormTitleComponent],
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {

  private router:Router = inject(Router);

  private fb:FormBuilder = inject(FormBuilder);

  private summaryService:SummaryService = inject(SummaryService);

  private activeStepService:ActiveStepService = inject(ActiveStepService);

  infoPersonal = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')] ],
    email: ['', [Validators.required, Validators.email] ],
    phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(14), Validators.pattern('^[0-9]{7,14}$')] ]
  });

  // /^\d{7,14}$/

  saveInformation(e:SubmitEvent){
    e.preventDefault();
    if(this.infoPersonal.valid){
      this.summaryService.saveInfoPersonal(this.infoPersonal.value);
      this.activeStepService.setNextValue();
      this.redirectNextStep();
    }
    else {
      this.infoPersonal.markAllAsTouched();
    }
  }

  private redirectNextStep(){
    this.router.navigate(['/select-plan'])
  }

  // Field name
  get fieldName() {
    return this.infoPersonal.get('name');
  }

  get fieldNameInvalid() {
    return this.fieldName?.invalid && this.fieldName.touched;
  }

  // Field email
  get fieldEmail() {
    return this.infoPersonal.get('email');
  }

  get fieldEmailInvalid() {
    return this.fieldEmail?.invalid && this.fieldEmail.touched;
  }

  // Field phone
  get fieldPhone() {
    return this.infoPersonal.get('phone');
  }

  get fieldPhoneInvalid(){
    return this.fieldPhone?.invalid && this.fieldPhone.touched;
  }

}












