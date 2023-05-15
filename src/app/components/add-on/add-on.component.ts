import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './../shared/frame/frame.component';
import { FormTitleComponent } from './../shared/form-title/form-title.component';
import { FormDescriptionComponent } from './../shared/form-description/form-description.component';
import { ButtonActionComponent } from './../shared/button-action/button-action.component';
import { ReactiveFormsModule, FormBuilder, FormArray, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { SummaryService } from './../../services/summary.service';

interface Value {
  name: string;
  description: string;
  cost: number;
}

export interface Extra {
  id: number;
  title: string;
  value: Value
}

@Component({
  selector: 'app-add-on',
  standalone: true,
  imports: [CommonModule, FrameComponent, FormTitleComponent, FormDescriptionComponent, ButtonActionComponent,ReactiveFormsModule],
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.scss']
})
export class AddOnComponent {

  servicesExtra:Array<Extra> = [
    {
      id: 1,
      title: 'Online service',
      value: {
        name: 'Online service',
        description: 'Access to multiplayer games',
        cost: 1
      }
    },
    {
      id: 2,
      title: 'Larger storage',
      value: {
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        cost: 2
      }
    },
    {
      id: 3,
      title: 'Customizable profile',
      value: {
        name: 'Customizable profile',
        description: 'Custom theme on your profile',
        cost: 2
      }
    },
  ];

  private summaryService:SummaryService = inject(SummaryService);

  private router:Router = inject(Router);

  private fb:FormBuilder = inject(FormBuilder);

  form = this.fb.group({
    onlineService: [false],
    largerStorage: [false],
    customizableProfile: [false]
  });

  constructor(){
    this.summaryService.planChoosed
      .subscribe(data => this.planType = data);
  }

  planType:string = '';

  servicesSelect(){
    const value = this.form.value;
    if(this.form.valid){
      this.summaryService.saveServiceAdditional(value);
      this.redirectNextStep();
    }
  }

  //Métodos Redireccionamiento
  goBack(){
    this.router.navigate(['/select-plan']);
  }

  private redirectNextStep() {
    this.router.navigate(['/finishing-up']);
  }


}













