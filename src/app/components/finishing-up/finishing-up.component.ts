import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './../shared/frame/frame.component';
import { FormTitleComponent } from './../shared/form-title/form-title.component';
import { FormDescriptionComponent } from './../shared/form-description/form-description.component';
import { ButtonActionComponent } from './../shared/button-action/button-action.component';

@Component({
  selector: 'app-finishing-up',
  standalone: true,
  imports: [CommonModule, FrameComponent, FormTitleComponent, FormDescriptionComponent, ButtonActionComponent],
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.scss']
})
export class FinishingUpComponent {

}
