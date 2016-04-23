import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sorry');
  this.route('monopoly');
  this.route('life');
  this.route('clue');
  this.route('scrabble');
  this.route('cah');
  this.route('add-game');
});

export default Router;
