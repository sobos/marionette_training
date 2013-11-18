define(['marionette', 'tpl!js/apps/Contacts/templates/contacts_list_panel.tpl'],
        function(Marionette, contactsListPanelTpl) {

        var ListPanel = Marionette.ItemView.extend({

            template: contactsListPanelTpl,

            triggers: {
                'click button.js-new': 'contact:add'
            },

            events: {
                'click button.js-filter': 'filterClicked'
            },

            serializeData: function() {
                return {
                    criterion: this.options.criterion
                }
            },

            filterClicked: function(evt) {

                evt.preventDefault();

                this.options.criterion = this.$('.js-filter-criterion').val();

                this.trigger('contacts:filter', this.options.criterion.trim());

                this.$('.js-filter-criterion').focus();
            }
        });

        return new ListPanel({criterion: ''});
    }
);
