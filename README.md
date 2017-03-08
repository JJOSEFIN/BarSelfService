# Claremont BarSelfservice

This repository holds the TypeScript source code of the [angular.io quickstart](https://angular.io/docs/ts/latest/quickstart.html),
the foundation for most of the documentation samples and potentially a good starting point for your application.


## Prerequisites

* [Git](https://git-scm.com/downloads).

* Node.js and npm are essential to Angular development. [Get it now](https://docs.npmjs.com/getting-started/installing-node) if it's not already installed on your machine.

* Your IDE or text editor of choice: [Brackets](http://brackets.io/), [Atom](https://atom.io/), [IntelliJ IDEA](https://www.jetbrains.com/idea/download/), [Sublime](https://www.sublimetext.com/) or whatever you prefer. 


## Getting started

``git clone`` this repository to your local machine. `cd` to the cloned directory and install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```


## API

The backend API for drinks is located at http://claremontbarwebapi.azurewebsites.net. To browse available endpoints, go to http://claremontbarwebapi.azurewebsites.net/Help.


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
