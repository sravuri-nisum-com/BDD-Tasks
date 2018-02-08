ContactManager.Models.Contact = Backbone.Model.extend({
  defaults: {
    name: null,
    tel: null,
    email: null,
    avatar:null,
  },

  initialize: function() {
    this.set('avatar', '6.jpg');
    // _.random(1, 15) + '
  }
});
