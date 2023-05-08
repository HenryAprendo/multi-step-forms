import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './../shared/frame/frame.component';
import { ButtonActionComponent } from '../shared/button-action/button-action.component';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, FrameComponent, ButtonActionComponent],
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {

  test(){
    alert('siiiiii')
  }

}
