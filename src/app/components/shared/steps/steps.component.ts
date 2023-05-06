import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  id: number;
  name: string;
  value: number;
  title: string;
}

const dataSteps:Step[] = [
  {
    id: 1,
    name: 'step1',
    value: 1,
    title: 'your info'
  },
  {
    id: 2,
    name: 'step2',
    value: 2,
    title: 'select plan'
  },
  {
    id: 3,
    name: 'step3',
    value: 3,
    title: 'add-ons'
  },
  {
    id: 4,
    name: 'step4',
    value: 4,
    title: 'summary'
  },
];

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent {

  steps:Step[] = dataSteps.slice();

  @Input() viewMobileHidden:boolean = false;

}












