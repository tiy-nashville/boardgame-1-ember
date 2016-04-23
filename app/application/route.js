// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   session: Ember.inject.service(),
//
//   login({ email, password }) {
//     this.get(`session`).authenticate(`authenticator:application`, email, password)
//       .then(() => {
//         // this.transitionToRoute(`arcade`);
//       })
//       .catch((reason) => {
//         console.log(reason);
//       });
//   },
// });
//
// 'use strict';
import toggleNav from 'toggle-nav';

export default class FormView {
  constructor(form, app) {
    this.form = document.querySelector(`form.nav-form`);
    this.app = app;

    toggleNav();

    this.form.addEventListener(`submit`, (ev) => {
      ev.preventDefault();

      const getValues = {
        name: this.form.querySelector(`[name=name]`).value,
        age: this.form.querySelector(`[name=age]`).value,
        photoUrl: this.form.querySelector(`[name=photo-url]`).value,
        profile: this.form.querySelector(`[name=profile]`).value,
      };

      fetch(`http://tiny-tn.herokuapp.com/collections/nt-puppy`, {
        method: `POST`,
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(getValues),
      }).then((res) => res.json())
      .then((data) => {
        this.form.reset();
        // this.form.querySelector(`[name=name]`).value = ``;
        // this.form.querySelector(`[name=age]`).value = ``;
        // this.form.querySelector(`[name=photo-url]`).value = ``;
        // this.form.querySelector(`[name=profile]`).value = ``;

        this.app.add(data);
        document.querySelector(`.main`).classList.toggle(`slide`);
      });
    });
  }
}
