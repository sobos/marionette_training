define(['marionette', 'contacts-panel-view', 'tpl!js/apps/Header/header.tpl'],
    function(Marionette, contactsPanelView, headerTpl) {

    var HeaderView = Marionette.ItemView.extend({

        template: headerTpl,

        events: {

            'click a.js-contact': 'contactsWithFilter',

            'click a': 'activeItem'
        },

        activeItem: function(evt) {


            this.$('a').parent().removeClass('active');

            $(evt.target).parent().addClass('active');
        },

        contactsWithFilter: function(evt) {

            var criterion = contactsPanelView.options.criterion;

            if (criterion) {

                evt.preventDefault();

                Backbone.history.navigate('contacts/filter=' + criterion, {trigger: true});

            }
        }

    });

    return new HeaderView();
});
