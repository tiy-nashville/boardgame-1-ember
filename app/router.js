import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
<<<<<<< HEAD
  this.route('scrabble');
  this.route('life');
  this.route('cards-against-humanity');
  this.route('clue');
  this.route('login');
  this.route('form');
=======
  this.route('sorry');
  this.route('monopoly');
  this.route('life');
  this.route('clue');
  this.route('scrabble');
  this.route('cah');
  this.route('add-game');
  this.route('checkout');
>>>>>>> 38e419a2b1b3b07e58492b8c2d149b410d376870
});

export default Router;
