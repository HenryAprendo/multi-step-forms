import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-action',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="fixed right-[6%] bottom-5 h-10 py-2 px-3 text-sm rounded-md font-medium bg-marine-blue text-white md:static xl:h-12 xl:px-4 xl:text-base"
      (click)="onClick.emit()"
      type="submit"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent {

  @Output() onClick = new EventEmitter();

}
