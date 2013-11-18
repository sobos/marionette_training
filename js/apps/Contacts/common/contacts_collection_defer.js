define(['backbone', 'contacts-model', 'contacts-collection', 'backbone.localstorage'],
    function(Backbone, ContactModel, contactsCollection) {

    var ContactsCollection = Backbone.Collection.extend({
        url: 'contacts',
        model: ContactModel,
        comparator: "firstName",
        localStorage: new Backbone.LocalStorage("ContactsCollection")
    });

    var contacts = [
        { id: 1, firstName: "Alice", lastName: "Arten", phoneNumber: "555-0184" },
        { id: 2, firstName: "Bob", lastName: "Brigham", phoneNumber: "555-0163" },
        { id: 3, firstName: "Charlie", lastName: "Campbell", phoneNumber: "555-0129" }
    ];

    var collection = new ContactsCollection();

    var deferred = $.Deferred();

    setTimeout(function() {

        collection.fetch({

            success: function(collection) {

                if (collection.length === 0) {
                    _.each(contacts, function(contact) {
                        collection.create(contact);
                    })
                }

                deferred.resolve(collection);
            }
        });

    }, 1000);

    return function(callBack) {

        $.when(deferred.promise()).done(function(collection) {

            contactsCollection.fetched = collection;
            callBack();

        });
    }
});
