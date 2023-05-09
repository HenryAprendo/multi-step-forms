import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-description',
  standalone: true,
  imports: [CommonModule],
  template: `
      <p class="text-sm text-cool-gray font-medium mb-2">
        <ng-content></ng-content>
      </p>
  `,
  styles: [
  ]
})
export class FormDescriptionComponent {

}
