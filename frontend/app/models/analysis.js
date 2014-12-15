import DS from 'ember-data';
import Ember from 'ember';
var inflector = Ember.Inflector.inflector;
inflector.irregular('analysis', 'analyses');

export default DS.Model.extend({
  dataset: DS.belongsTo('dataset'),
  classifiers: DS.hasMany('classifier', {async: true}),
  title: DS.attr('string'),
  classifier_ids: DS.attr()
});
