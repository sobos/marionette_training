define(['marionette', 'bootstrap'], function(Marionette) {

    var ModalRegion = Marionette.Region.extend({

        onShow: function(view) {

            this.listenTo(view, 'modal:close', this.closeModal);

            this.$el.modal({show: true,
                            keyboard: false});
        },

        closeModal: function() {

            this.stopListening();

            var self = this;
            this.$el.slideUp(500, function() {
                self.close();
            });

            this.$el.modal('hide');
        },

        open: function(view) {
            this.$el.empty().append(view.el);
            this.$el.slideDown();
        }

    });

    return ModalRegion;
});
