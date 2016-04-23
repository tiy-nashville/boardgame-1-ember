
import toggleNav from 'toggle-login';

export default class FormView {
  constructor(form, app) {
    this.form = document.querySelector(`form.login-form`);
    this.app = app;

    toggleNav();

    this.form.addEventListener(`submit`, (ev) => {
      ev.preventDefault();

      const getValues = {
        userName: this.form.querySelector(`[userName=userName]`).value,
        email: this.form.querySelector(`[email=email]`).value,
      };

      // fetch(`We will get this URL from the backend team, {
        method: `POST`,
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(getValues),
      }).then((res) => res.json())
      .then((data) => {
        this.form.reset();


// We might explore adding this after we complete the basic functionality
        this.app.add(data);
        document.querySelector(`.main`).classList.toggle(`slide`);
      });
    });
  }
}





// OTHER OPTION
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
