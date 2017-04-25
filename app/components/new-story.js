import Ember from 'ember';

export default Ember.Component.extend({
  addNewStory: false,
  actions: {
    storyFormShow() {
      this.set('addNewStory', true);
    },

  saveStory() {
    var params = {
      headline: this.get('headline'),
      author: this.get('author'),
      image: this.get('image'),
      content: this.get('content'),
      category: this.get('category'),
    };
    this.set('addNewStory', false);
    this.sendAction('saveStory', params);
    }
  }
});
