import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FrameComponent } from './../shared/frame/frame.component';
import { ButtonActionComponent } from '../shared/button-action/button-action.component';
import { FormTitleComponent } from './../shared/form-title/form-title.component';
import { FormDescriptionComponent } from './../shared/form-description/form-description.component';


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

  infoPersonal = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(14)]]
  });

  saveInformation(){
    if(this.infoPersonal.valid){
      // TO DO
      //Save information and redirect to screen of step
    }
    else {
      this.infoPersonal.markAllAsTouched();
    }
  }

  private redirectNextStep(){
    this.router.navigate([''])
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












