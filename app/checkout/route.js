import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch(`http://8cb7cf5b.ngrok.io/checkout-game`)
    .then(res => res.json());
  },
});
