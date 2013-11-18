define(['marionette', 'tpl!js/apps/Contacts/templates/contacts_list_layout.tpl'],
    function(Marionette, contactsListLayoutTpl) {

        var ListLayout = Marionette.Layout.extend({

            template: contactsListLayoutTpl,

            regions: {
                panelRegion: '#panel-region',
                contactsRegion: '#contacts-region'
            }
        });

        return new ListLayout();
    }
);
