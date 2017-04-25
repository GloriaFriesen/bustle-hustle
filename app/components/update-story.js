import Ember from 'ember';

export default Ember.Component.extend({
  updateStoryForm: false,
  actions: {
    updateStoryForm() {
      this.set('updateStoryForm', true);
    },
    update(story) {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content'),
        category: this.get('category'),
      };
      this.set('updateStoryForm', false);
      this.sendAction('update', story, params);
    }
  }
});
