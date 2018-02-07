var _ = require('underscore');
var $ = require('jquery');
require('backbone');
(function() {
    
    window.App = {
        Models: {},
        Collections: {},
        Views: {}
    };
   
    window.template = function(id) {
        return _.template( $('#' + id).html() );
    };
    
    
   
    App.Models.Person = Backbone.Model.extend({
        defaults: {
            name: '',
            age: null,
            occupation: ''
        }
    });
    
   
    App.Collections.People = Backbone.Collection.extend({
        model: App.Models.Person
    });
    
    
    
    App.Views.People = Backbone.View.extend({
        tagName: 'ul',
        
        initialize: function() {
           
            this.listenTo(this.collection, "add", this.addOne);
           
        },
        
    
	    render: function(){
		this.collection.each(this.addOne, this);
		return this;
	    },
  
        addOne: function(person) {
            var personView = new App.Views.Person({ model: person });
            this.$el.append(personView.render().el);
        }
    });
    
    
    App.Views.Person = Backbone.View.extend({
        tagName: 'li',
    
        template: template('personTemplate'),	
        
        initialize: function(){
            this.listenTo(this.model,"change",this);
            this.listenTo(this.model,"destroy",this);
           
        },
        
        events: {
         'click .edit' : 'editPerson',
         'click .delete' : 'DestroyPerson'	
        },
        
        editPerson: function(){
            var newName = prompt("Please enter the new name", this.model.get('name'));
            if (!newName) return;
            this.model.set('name', newName);
        },
        
            DestroyPerson: function(){
                this.model.destroy();
            },
            
            remove: function(){
                this.$el.remove();
            },
            
            render: function() {
                this.$el.html( this.template(this.model.toJSON()) );
                return this;
            }
        });
    
    
    App.Views.AddPerson = Backbone.View.extend({
        el: '#addPerson',
    
        events: {
            'submit': 'submit'
        },
    
        submit: function(e) {
            e.preventDefault(); 
           
            var newPersonName = $(e.currentTarget).find('input[type=text]').val(); 
            // var newtel = $(e.currentTarget).find('input[type=num]').val(); 
            // var newemail = $(e.currentTarget).find('input[type=text]').val(); 
            var person = new App.Models.Person({ name: newPersonName});
            this.collection.add(person);
        }
    
    });


    
    
    
    var peopleCollection = new App.Collections.People([
        {
            name: 'Mohit Jain',
            age: 26
        },
        {
            name: 'Taroon Tyagi',
            age: 25,
            occupation: 'web designer'
        },
        {
            name: 'Rahul Narang',
            age: 26,
            occupation: 'web developer'
        },
        {
            name: 'Nareen ',
            age: 30,
            occupation: 'UI Developer'
        },
       
        {
            age: 25,
            occupation: 'web designer'
        }
    ]);
    var addPersonView = new App.Views.AddPerson({ collection: peopleCollection });

    peopleView = new App.Views.People({ collection: peopleCollection });
    
    $(document.body).append(peopleView.render().el);//DOM rendering 
    })();