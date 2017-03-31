import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorieFilter",
  pure: false
})

export class CalorieFilterPipe implements PipeTransform {
  transform(input: Meal[], desiredCalories) {
    var output: Meal[] = [];
  if(desiredCalories === "lowCalorieMeals") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].calories < 500) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (desiredCalories === "highCalorieMeals") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].calories > 500) {
        output.push(input[i]);
      }
    }
    return output;
  } else {
    return input;
    }
  }
}
