import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('game-1');
  this.route('monopoly');
  this.route('life');
});

export default Router;
