import Ember from 'ember';

export default Ember.Route.extend({
  editedStory: null,
  model() {
    return this.store.findAll('story');
  },
  actions: {
    save3(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
      this.transitionTo('index');
    },
    update(storyId, params) {
      var story;
      this.model().then(function(val) {
        val.forEach(function(databaseStory) {
          if(databaseStory.id===storyId) {
            story = databaseStory;
          }
        });
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            story.set(key,params[key]);
          }
        });
        story.save();
      });
    }
  }
});
