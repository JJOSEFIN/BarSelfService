import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http'

@Component({
  selector: 'my-app',
  template: `
  <div class="list">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 item">
        <img src="/assets/images/CarlsbergExport.jpg" alt="">
        <div class="summary">
          <h2 class="title">Carlsberg Export</h2>
          <span class="price fa-usd">3.50</span>
          <span class="category">Beer</span>
          <span class="description">Lager. Danmark. 50cl. 4.6%</span>
          <button class="add-to-cart fa-shopping-cart">Add to cart</button>
        </div>
      </div>
      <div class="col-sm-4 item">
        <img src="/assets/images/DryMartini.jpg" alt="">
        <div class="summary">
          <h2 class="title">Dry martini</h2>
          <span class="price fa-usd">10.0</span>
          <span class="category">Cocktail</span>
          <span class="description">1cl. Vermouth. 2cl gin. Oliv</span>
          <button class="add-to-cart fa-shopping-cart">Add to cart</button>
        </div>
      </div>
      <div class="col-sm-4 item">
        <img src="/assets/images/GinTonic.jpg" alt="">
        <div class="summary">
          <h2 class="title">Gin Tonic</h2>
          <span class="price fa-usd">10.0</span>
          <span class="category">Long Drink</span>
          <span class="description">4cl gin. Tonic. Lemon. Ice</span>
          <button class="add-to-cart fa-shopping-cart">Add to cart</button>
        </div>
      </div>
      <div class="col-sm-4 item">
        <img src="/assets/images/SevenAndseven.jpg" alt="">
        <div class="summary">
          <h2 class="title">Seven and Seven</h2>
          <span class="price fa-usd">11</span>
          <span class="category">Long Drink</span>
          <span class="description">4 CL seagram's Seven crown. 12cl 7up. Lemon</span>
          <button class="add-to-cart fa-shopping-cart">Add to cart</button>
        </div>
      </div>
      <div class="col-sm-4 item">
        <img src="/assets/images/SexOnTheBeach.jpg" alt="">
        <div class="summary">
          <h2 class="title">Sex on the beach</h2>
          <span class="price fa-usd">10.50</span>
          <span class="category">Long Drink</span>
          <span class="description">2cl Codka. 2cl Cointreau. 2cl Passoa. 2cl Orange Juice</span>
          <button class="add-to-cart fa-shopping-cart">Add to cart</button>
        </div>
      </div>
      <div class="col-sm-4 item">
        <img src="/assets/images/WhiskeySour.jpg" alt="">
        <div class="summary">
          <h2 class="title">Whiskey Sour</h2>
          <span class="price fa-usd">12.0</span>
          <span class="category">Cocktail</span>
          <span class="description">4cl burbon. 2cl Lemon Juice. 1.5cl Sugar Syrup</span>
          <button class="add-to-cart fa-shopping-cart">Add to cart</button>
        </div>
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


