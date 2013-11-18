define(['marionette', 'backbone.syphon', 'tpl!js/apps/Contacts/templates/newedit_item_modal.tpl'],
    function(Marionette, Syphon, editItemTpl) {

        var ContactNewEditView = Marionette.ItemView.extend({

            template: editItemTpl,

            events: {
                'click button.js-submit': 'submitClicked',
                'blur input': 'blurValidate',
                'focus input': 'focusCleanup',
                'click button.js-close': 'closeIt',

                'keyup div.frame': 'keysFunc'
            },

            keysFunc: function(evt) {

                if (evt.keyCode === 13) this.submitClicked(evt);
                if (evt.keyCode === 27) this.trigger('modal:close');
            },

            onShow: function() {

                $('div.frame').attr('tabindex', '0').focus();

                var self = this;
                $('.modal-backdrop')
                    .attr('tabindex', '0')
                    .on('click', function() {
                        self.trigger('modal:close');
                    })
                    .on('keyup', function(evt) {
                        if (evt.keyCode === 27) self.trigger('modal:close');
                    });
            },

            onClose: function() {

                $('.modal-backdrop').off();
            },

            serializeData: function() {
                return {
                    firstName: this.model.get('firstName'),
                    lastName: this.model.get('lastName'),
                    phoneNumber: this.model.get('phoneNumber'),
                    title: this.options.title || 'Contact'
                }
            },

            closeIt: function(evt) {

                evt.preventDefault();
                this.trigger('modal:close');
            },

            blurValidate: function(evt) {

                var $field = $(evt.target);

                this.trigger('field:blur', {
                    id: $field.attr('id'),
                    name: $field.attr('name'),
                    value: $field.val()
                });
            },

            focusCleanup: function(evt) {

                var $fieldp = $(evt.target).parent();

                $fieldp.removeClass("error");
                $fieldp.find('.help-inline.error').remove();
            },

            submitClicked: function(evt) {

                evt.preventDefault();

                var formData = Syphon.serialize(this);

                this.trigger('form:submit', formData);
            },

            onFieldDataInvalid: function(fieldData) {

                var $errorEl = $('<span>', { class: 'help-inline error',
                    text: fieldData.message });

                var $fieldp = $('#' + fieldData.id).parent();
                $fieldp.removeClass("error");
                $fieldp.find('.help-inline.error').remove();
                $fieldp.append($errorEl).addClass('error');
            },

            onFormDataInvalid: function(errors) {

                var $view = this.$el;

                var clearFormErrors = function() {
                    var $form = $view.find("form");
                    $form.find(".help-inline.error").each(function() {
                        $(this).remove();
                    });
                    $form.find(".control-group.error").each(function() {
                        $(this).removeClass("error");
                    });
                };

                var markErrors = function(value, key) {
                    var $controlGroup = $view.find("#contact-" + key).parent();
                    var $errorEl = $("<span>", { class: "help-inline error", text: value });
                    $controlGroup.append($errorEl).addClass("error");
                };

                clearFormErrors();
                _.each(errors, markErrors);
            }
        });

        return ContactNewEditView;
    }
);
