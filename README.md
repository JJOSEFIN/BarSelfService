# Claremont Bar Self Service

This repository holds the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html),
the foundation for most of the documentation samples and potentially a good starting point for your application.

## The Challenge

The goal of the evening is to produce a self service bar. The customer should be able to see the entire bar (drinks list), and order as many drinks as they like. To order the drink, the customer puts the drinks of choice in their shopping cart, and when they're satisfied they go to the checkout area. In the checkout area, the customer can view their shopping cart, and finilize their purchase. 

Your challange is to build the parts that constitues a complete bar: 
* The bar itself (a drinks list with information about each drink, price etc.), 
* The shopping cart, with the customer's ordered drinks (no backend support, keep the customers drink in memory, or build a cookie based solution if you like)
* The ability to "purchase" your entire shopping cart (again no backend support, you will have to mock the finialization and present to customer)

After you have built each part, call a supervisor/assistant and they will review your solution. The first group to finalize each part will earn a prize!

**The first team to build the complete bar wins!**

## Prerequisites

* [Git](https://git-scm.com/downloads).

* Node.js and npm are essential to Angular development. [Get it now](https://docs.npmjs.com/getting-started/installing-node) if it's not already installed on your machine.

* Your IDE or text editor of choice: [Brackets](http://brackets.io/), [Atom](https://atom.io/), [IntelliJ IDEA](https://www.jetbrains.com/idea/download/), [Sublime](https://www.sublimetext.com/) or whatever you prefer. 


## Getting started

``git clone`` this repository to your local machine. `cd` to the cloned directory and install the npm packages and start the server:

```shell
npm install
npm start
```


## API

The backend API for drinks is located at http://claremontbarwebapi.azurewebsites.net. To browse available endpoints, go to http://claremontbarwebapi.azurewebsites.net/Help. Focus on the `get/Products` endpoint at first, to get all available drinks, and look into other endpoints later if you have the time. 


## You're the boss

Feel free to change as much as you'd like. Maybe don't use any of our `HTML`. Maybe switch to `SASS`. Maybe keep the `CSS` as "vanilla". **But remember, focus on the `angular` part of this challange.** You're the boss!


## HTML

We're helping you with some `HTML` and `CSS` so you can focus on the `angular` part of the challenge.

### Items

One item can look like this:
```html
<li class="item">
  <figure>
    <img src="[URL]" alt="[TITLE]">
  </figure>
  <figcaption class="summary">
    <h2 class="title">[TITLE]</h2>
    <span class="price fa-usd">[PRICE]</span>
    <span class="category">[CATEGORY]</span>
    <span class="description">[DESCRIPTION]</span>
    <button class="add-to-cart fa-shopping-cart">[TEXT]</button>
  </figcaption>
</li>
```

With the item inside `.items` you can choose between a `.list` class or a `.cards` class on the items container to get different layouts.

Example:
```html
<main role="main" class="container wrapper">
  <ol class="items list">
    <li class="item">[...]</li>
    <li class="item">[...]</li>
    <li class="item">[...]</li>
  </ol>
</main>
```


### Search box

If you'd like a search box in your app you could use:
```html
<section class="search">
  <div class="wrapper">
    <form>
      <input type="search" placeholder="What can I get you?">
      <button type="submit" class="fa-search"></button>
    </form>
  </div>
</section>
```


## FontAwesome icons

If you want some fancy icons you can [browse them here](http://fontawesome.io/icons/).


## npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.

Here are the test related scripts:
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - run protractor e2e tests, written in JavaScript (*e2e-spec.js)
