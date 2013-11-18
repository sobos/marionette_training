define(['backbone', 'contacts-panel-view', 'contact-new-controller', 'contacts-list-views'],
    function(Backbone, contactsPanelView, contactNewController,  contactsListView) {

        contactsPanelView.on('contact:add', function() {

            contactNewController.newContact();
        });

        contactsPanelView.on('contacts:filter', function(criterion) {

            if (criterion) {

                Backbone.history.navigate('contacts/filter=' + criterion);

            } else {

                Backbone.history.navigate('contacts');
            }

            contactsListView.render();
        });
    }
);
