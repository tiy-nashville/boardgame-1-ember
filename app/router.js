import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('scrabble');
  this.route('life');
  this.route('cards-against-humanity');
  this.route('clue');
  this.route('login');
  this.route('form');
});

export default Router;
