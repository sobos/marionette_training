define(['backbone', 'contact-new-view', 'contacts-model', 'contacts-list-views', 'contact-editnew-routines'],
    function(Backbone, contactItemNewView, ContactModel, contactsListView, routines) {

        contactItemNewView.on('form:submit', function(formData) {

            var currentModel = routines.formSubmit(formData, this);

            contactsListView.render();

            currentModel.trigger('contact:added');

            //contactsListView.children.findByModel(currentModel).flash('success');
        });

        contactItemNewView.on('field:blur', function(fieldData) {

            routines.fieldBlur(fieldData, this);
        });

        return {

            newContact: function() {

                var newContact = new ContactModel();

                contactItemNewView.model = newContact;

                var App = require('app');

                contactItemNewView.delegateEvents();

                App.modalRegion.show(contactItemNewView);
            }
        };
    }
);
