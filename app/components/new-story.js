import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      var params = {
        titleLong: this.get("titleLong"),
        titleShort: this.get("titleShort"),
        author: this.get("author"),
        text: this.get("text"),
        mainImage: this.get("mainImage"),
      };
      this.sendAction('save2', params);
    }
  }
});
