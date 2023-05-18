import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './../shared/frame/frame.component';
import { FormTitleComponent } from './../shared/form-title/form-title.component';
import { FormDescriptionComponent } from './../shared/form-description/form-description.component';
import { ButtonActionComponent } from './../shared/button-action/button-action.component';
import { ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { SummaryService } from './../../services/summary.service';
import { servicesExtra } from './../../data/services';
import { Extra } from './../../interfaces/extra';


@Component({
  selector: 'app-add-on',
  standalone: true,
  imports: [CommonModule, FrameComponent, FormTitleComponent, FormDescriptionComponent, ButtonActionComponent,ReactiveFormsModule],
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.scss']
})
export class AddOnComponent {

  servicesExtra:Array<Extra> = servicesExtra.slice();

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













