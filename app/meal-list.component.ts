import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `

  <select (change)="onChange($event.target.value)">
    <option value="allMeals">All Meals</option>
    <option value="lowCalorie">Low Calorie Meals</option>
    <option value="highCalorie">High Calorie Meals</option>
  </select>

  <ul>
    <li *ngFor="let currentMeal of childMealList">{{currentMeal.name}}<br>
    {{currentMeal.details}}<br>{{currentMeal.calories}}<button class="btn" (click)="editButtonHasBeenClicked(currentMeal)">Edit</button></li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(clickedMeal: Meal) {
  this.clickSender.emit(clickedMeal);
}

filterByCalories: string = "allMeals";

onChange(optionFromMenu) {
  this.filterByCalories = optionFromMenu;
}

}
