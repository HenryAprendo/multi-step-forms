import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { SelectPlanComponent } from './components/select-plan/select-plan.component';
import { AddOnComponent } from './components/add-on/add-on.component';
import { FinishingUpComponent } from './components/finishing-up/finishing-up.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: SelectPlanComponent
  // },
  {
    path: '',
    component: PersonalInfoComponent
  },
  {
    path: 'select-plan',
    component: SelectPlanComponent
  },
  {
    path: 'add-on',
    component: AddOnComponent
  },
  {
    path: 'finishing-up',
    component: FinishingUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
