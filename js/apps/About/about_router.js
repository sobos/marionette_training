define(['marionette', 'about-controller'], function(Marionette, aboutController) {

    var AboutRouter = Marionette.AppRouter.extend({

        routes: {
            'about': 'showAbout'
        },

        showAbout: function() {

            aboutController.showAbout();
        }
    });

    return AboutRouter;
});
