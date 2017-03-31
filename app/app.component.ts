import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-light bg-faded">
  <a class="navbar-brand" href="#">
    <img src="/resources/images/icon.png" class="d-inline-block align-top icon" alt="">
  </a>
  <h2 class="heading">Meal Tracker</h2>
</nav>

<div class="jumbotron"></div>
<div class="container">
<div class="row">
<div class="col-md-6">
<meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list><hr>
</div>
<div class="col-md-6">
<new-meal (newMealSender)="addMeal($event)"></new-meal>
</div>
</div>
<div class="col-md-6">
<edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
<div>
</div>
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
