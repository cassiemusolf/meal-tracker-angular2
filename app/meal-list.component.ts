import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `

<div class="list">
  <h3>Choose A Calorie Filter:</h3>
  <select (change)="onChange($event.target.value)">
    <option value="allMeals" selected="selected">All Meals</option>
    <option value="lowCalorieMeals">Low Calorie Meals</option>
    <option value="highCalorieMeals">High Calorie Meals</option>
  </select>

  <ul>
    <li *ngFor="let currentMeal of childMealList | calorieFilter:filterByCalories">{{currentMeal.name}}<button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button><button (click)='showMeal(currentMeal)'>Show Details</button></li>
  </ul>
</div>

  <div *ngIf="showDetails" class="details">
    <h4 class="detail-title">{{showDetails.name}}</h4>
    <h4 class="detail-content">{{showDetails.details}}</h4>
    <h4 class="detail-content"> {{showDetails.calories}} Calories</h4>
    <button class="details-button" (click)="hideDetails()">Hide Details</button>
  </div>

  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(clickedMeal: Meal) {
    this.clickSender.emit(clickedMeal);
  }

  showDetails = null;

  showMeal(clickedMeal) {
    this.showDetails = clickedMeal;
  }

  hideDetails() {
    this.showDetails = null;
  }

  filterByCalories: string = "allMeals";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}
