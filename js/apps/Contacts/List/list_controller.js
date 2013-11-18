define(['backbone', 'contacts-collection', 'contacts-list-views', 'contacts-panel-view', 'contacts-list-layout',
        'contact-show-controller', 'contact-edit-controller'],
    function(Backbone, contactsCollection, contactsListView, contactsPanelView, contactsListLayout,
             contactShowController, contactEditController) {

        contactsListView.on('itemview:contact:delete', function(childView) {

            childView.model.destroy({silent: true});

            if (this.collection.models.length === 0) this.render();
        });

        contactsListView.on('itemview:contact:show', function(childView) {

            var id = childView.model.get('id');

            Backbone.history.navigate('contacts/' + id);

            contactShowController.showContact(id);
        });

        contactsListView.on('itemview:contact:edit', function(childView) {

            var id = childView.model.get('id');

            contactEditController.editContact(id);
        });

        contactsListLayout.on("show", function() {

            contactsPanelView.delegateEvents();

            contactsListLayout.panelRegion.show(contactsPanelView);

            contactsListLayout.contactsRegion.show(contactsListView);
        });

        return {

            listContacts: function(criterion) {

                if (typeof criterion === 'undefined') {

                    contactsPanelView.options = {

                        criterion: ''
                    };

                } else {

                    contactsPanelView.options = {

                        criterion: criterion
                    };
                }

                var App = require('app');

                contactsListView.collection = contactsCollection.fetched;

                App.mainRegion.show(contactsListLayout);
            }
        };
    }
);
