define(['marionette', 'tpl!js/apps/Contacts/templates/show_item.tpl', 'tpl!js/apps/Contacts/templates/missing_item.tpl'],
    function(Marionette, showItemTpl, missingItemTpl) {

        var ContactItemShowView = Marionette.ItemView.extend({

            template: showItemTpl,

            events: {
                'click button.js-edit': 'editItem'
            },

            onShow: function() {

                this.listenTo(this.model, 'sync', this.render);
            },

            onClose: function() {
                this.stopListening();
            },

            editItem: function(evt) {

                evt.preventDefault();
                this.trigger('contact:edit', this.model);
            }
        });

        var ContactItemMissingView = Marionette.ItemView.extend({

            template: missingItemTpl
        });

        return {

            contactItemShowView: new ContactItemShowView(),

            contactItemMissingView: new ContactItemMissingView()
        };
    }
);
