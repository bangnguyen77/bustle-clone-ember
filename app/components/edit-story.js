import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update() {
      var params = {
        titleLong: this.get("edit-titleLong"),
        titleShort: this.get("edit-titleShort"),
        author: this.get("edit-author"),
        text: this.get("edit-text"),
        mainImage: this.get("edit-mainImage"),
      };
      this.sendAction('update', this.get("storyId"), params);
    }
  }
});
