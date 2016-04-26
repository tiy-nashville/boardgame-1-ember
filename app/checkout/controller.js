import Ember from 'ember';

export default Ember.Controller.extend({
  checkoutGame() {
    const attributes = {
      qty: this.qty,
      name: this.name,
    };

    fetch(`http://8cb7cf5b.ngrok.io/checkout-game`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((res) => res.json())
    .then((run) => {
      this.transitionToRoute(`index`);
    });
  },
});
