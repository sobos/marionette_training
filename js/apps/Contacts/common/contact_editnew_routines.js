define(['contacts-list-views'], function(contactsListView) {

    return {

        formSubmit: function(formData, selfContext) {

            var returnModel;

            var contactsCollection = contactsListView.collection;

            selfContext.model.set(formData);

            if (selfContext.model.isValid()) {

                if (selfContext.model.isNew()) {

                    returnModel = contactsCollection.create(formData);

                } else {

                    returnModel = selfContext.model.save();
                }

                selfContext.trigger('modal:close');

            } else {

                selfContext.triggerMethod('form:data:invalid', selfContext.model.validationError);
            }

            return returnModel;
        },

        fieldBlur: function(fieldData, selfContext) {

            var preservedValue = selfContext.model.get(fieldData.name);

            var fieldValue = selfContext.model.get(fieldData.name);

            selfContext.model.set(fieldData.name, fieldData.value);

            if ((!selfContext.model.isValid()) && selfContext.model.validationError[fieldData.name]) {

                selfContext.model.set(fieldData.name, preservedValue);

                fieldData.message = selfContext.model.validationError[fieldData.name];

                selfContext.triggerMethod('field:data:invalid', fieldData);
            } else {

                selfContext.model.set(fieldData.name, fieldValue);
            }
        }
    };
});
