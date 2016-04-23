import Ember from 'ember';

export default Ember.Route.extend({
  model(url) {
    return fetch(`http://8cb7cf5b.ngrok.io/add-game`)
    .then(res => res.json());
  },
});
