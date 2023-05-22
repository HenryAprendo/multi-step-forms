import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveStepService } from './../../../services/active-step.service';

interface Step {
  id: number;
  name: string;
  value: number;
  title: string;
}

const dataSteps:Step[] = [
  {
    id: 1,
    name: 'step 1',
    value: 1,
    title: 'your info'
  },
  {
    id: 2,
    name: 'step 2',
    value: 2,
    title: 'select plan'
  },
  {
    id: 3,
    name: 'step 3',
    value: 3,
    title: 'add-ons'
  },
  {
    id: 4,
    name: 'step 4',
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
export class StepsComponent implements OnInit {

  private activeStepService:ActiveStepService = inject(ActiveStepService);

  steps:Step[] = dataSteps.slice();

  @Input() viewMobileHidden:boolean = false;

  selectedId:number = 0;

  ngOnInit(): void {
    this.activeStepService.valueId
      .subscribe(value => {
        this.selectedId = value;
      });
  }

}












