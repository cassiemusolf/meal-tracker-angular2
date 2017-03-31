import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Meal Tracker</h1>
  </div>

<new-meal (newMealSender)="addMeal($event)"></new-meal>

<meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>

<edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>

  `
})

export class AppComponent {

  masterMealList: Meal[] = [
    new Meal("Spaghetti", "Noodles, sauce and cheese!", 600),
    new Meal("Caeser Salad", "I left off the croutons!", 300),
    new Meal("Enchiladas", "Not super healthy but so good!", 700)
  ];

  selectedMeal = null;

  finishedEditing() {
    this.selectedMeal = null;
  }

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }

}
