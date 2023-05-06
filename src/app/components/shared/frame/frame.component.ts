import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './../steps/steps.component';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [CommonModule, StepsComponent],
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {

}
