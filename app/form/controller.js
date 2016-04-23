
import Ember from 'ember';

export default Ember.Controller.extend({
  createGame() {
    const attributes = {
      userName: this.userName,
      numberOfPlayers: this.numberOfPlayers,
      gameRules: this.gameRules,
    };

    fetch(`http://8cb7cf5b.ngrok.io/add-game`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((res) => res.json())
    .then((run) => {
      this.transitionToRoute(`index`);
      this.clearGameForm();
    });
  },
  clearGameForm() {
    this.set(`userName`, ``);
    this.set(`numberOfPlayers`, ``);
    this.set(`gameRules`, ``);
  },
});
