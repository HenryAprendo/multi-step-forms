import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-title',
  standalone: true,
  imports: [CommonModule],
  template: `
      <h1 class="text-marine-blue text-xl font-semibold mb-2 xl:text-3xl xl:mb-3" >
        <ng-content></ng-content>
      </h1>
  `,
  styles: [
  ]
})
export class FormTitleComponent {

}
