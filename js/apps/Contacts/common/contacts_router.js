define(['marionette', 'contacts-list-controller', 'contact-show-controller', 'contacts-panel-controller'],
    function(Marionette, contactsListController, contactShowController) {

        var ContactsRouter = Marionette.AppRouter.extend({

            routes: {
                '': 'navigateToContacts',
                'contacts': 'listContacts',
                'contacts(/filter=:criterion)': 'filterSet',
                'contacts/:id': 'showContact'
            },

            filterSet: function(criterion) {

                contactsListController.listContacts(criterion.trim());
            },

            listContacts: function() {

                contactsListController.listContacts();
            },

            showContact: function(id) {

                contactShowController.showContact(id);
            },

            navigateToContacts: function() {

                this.navigate('contacts');
                contactsListController.listContacts();
            }
        });

        return ContactsRouter;
    }
);
