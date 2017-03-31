import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li *ngFor="let currentMeal of childMealList">{{currentMeal.name}}<br>
    {{currentMeal.details}}<br>{{currentMeal.calories}}<button class="btn" (click)="editButtonHasBeenClicked(currentMeal)">Edit!</button></li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
}
