import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div ng-show="addMeal" class="new-meal details-list">
      <h3 class="sub-title">Add A New Meal:</h3>
      <label>Name:</label>
      <input #newName class="form-control"><br>
      <label>Details:</label>
      <input #newDetails class="form-control"><br>
      <label>Calories:</label>
      <input #newCalories class="form-control"><br>
      <button (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
