// 14-puppy-adoption/src/toggle-nav.js

// import Ember from 'ember';
//
// export default Ember.Controller.extend({
// });
//
//
'use strict';

export default function toggleSlider() {
  const toggleButton = document.querySelector(`.top-nav__icon`);
  const main = document.querySelector(`.main`);
  toggleButton.addEventListener(`click`, () => {
    main.classList.toggle(`slide`);
  });
}
