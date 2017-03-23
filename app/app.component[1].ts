import { Component } from '@angular/core';
import { Drink } from './drink.ts';
import { DrinkService } from './drink.service.ts';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  providers: [DrinkService] 
})
export class AppComponent  {
   name = 'Team AnguBar';
   drinks : Drink[];
   
   constructor(private drinkService : DrinkService) {}
   
   getDrinks(): void {
    this.drinkService.getDrinks().then(drinks => this.drinks = drinks);
  }
   
}
