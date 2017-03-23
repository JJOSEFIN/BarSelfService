import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http'

@Component({
  selector: 'my-app',
  template: `
  <div class="list">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 item">
        <figure>
          <img src="/assets/images/drink.jpg" alt="[TITLE]">
        </figure>
        <figcaption class="summary">
          <h2 class="title">[TITLE]</h2>
          <span class="price fa-usd">[PRICE]</span>
          <span class="category">[CATEGORY]</span>
          <span class="description">[DESCRIPTION]</span>
          <button class="add-to-cart fa-shopping-cart">[TEXT]</button>
        </figcaption>
      </div>
    </div>
   </div>
  </div>
  `,
  
})
export class AppComponent  { name = 'Angular'; }
    
export class Drink {
  id: number;
  price: number;
  name: string;
}

drink1: Drink = {
  id: 1,
  price: 10,
  name: 'Tequila Sunrise'
};


