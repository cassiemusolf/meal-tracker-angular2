import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal" class="edit-meal">
      <h3 class="sub-title">Edit Meal</h3>
      <label>Name:</label>
      <input [(ngModel)]="childSelectedMeal.name" class="form-control"><br>
      <label>Details:</label>
      <input [(ngModel)]="childSelectedMeal.details" class="form-control"><br>
      <label>Calories:</label>
      <input [(ngModel)]="childSelectedMeal.calories" class="form-control"><br>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
  this.doneButtonClickedSender.emit();
  }
}
