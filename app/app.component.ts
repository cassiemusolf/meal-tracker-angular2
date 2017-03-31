import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Meal Tracker</h1>
  </div>

<meal-list [childMealList]="masterMealList"></meal-list>

  `
})

export class AppComponent {

  masterMealList: Meal[] = [
    new Meal("Spaghetti", "Noodles, sauce and cheese!", 600),
    new Meal("Caeser Salad", "I left off the croutons!", 300),
    new Meal("Enchiladas", "Not super healthy but so good!", 700)
  ];

}
