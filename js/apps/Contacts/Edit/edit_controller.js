define(['backbone', 'contacts-list-views', 'contact-edit-views',
        'contact-show-views', 'contact-editnew-routines'],
    function(Backbone, contactsListView, contactItemEditView,
             contactItemShowViews, routines) {

        contactItemEditView.on('form:submit', function(formData) {

            routines.formSubmit(formData, this);
        });

        contactItemEditView.on('field:blur', function(fieldData) {

                routines.fieldBlur(fieldData, this);
        });

        return {

            editContact: function(id) {

                contactItemEditView.delegateEvents();

                var App = require('app');

                var model = contactsListView.collection.get(id);

                contactItemEditView.model = model;

                App.modalRegion.show(contactItemEditView);

            }
        };
    }
);
