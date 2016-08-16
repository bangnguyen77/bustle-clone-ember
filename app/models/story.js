import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  author: DS.attr(),
  titleShort: DS.attr(),
  titleLong: DS.attr(),
  mainImage: DS.attr()
});
