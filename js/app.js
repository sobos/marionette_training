define(['marionette', 'contacts-collection-defer', 'contacts-router',
        'about-router', 'modal-region', 'header-view', 'loading-view'],
    function(Marionette, contactsCollectionDefer, ContactsRouter,
             AboutRouter, ModalRegion, headerView, loadingView) {

        $('body').off('.data-api');

        Marionette.Region.prototype.open = function(view) {
            this.$el.hide();
            this.$el.empty().append(view.el);
            this.$el.fadeIn();
        };

        var App = new Marionette.Application();

        App.addRegions({
            headerRegion: '#header-region',
            mainRegion: '#main-region',
            modalRegion: new ModalRegion({ el: '#modal-region' })
        });

        App.headerRegion.show(headerView);

        App.mainRegion.show(loadingView);

        App.addInitializer(function() {

            new ContactsRouter();
            new AboutRouter();

            contactsCollectionDefer(function() {

                if (Backbone.history) {

                    Backbone.history.start();
                }
            });
        });

        return App;
    }
);
