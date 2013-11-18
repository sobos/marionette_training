define(['about-view'], function(aboutView) {

    return {

        showAbout: function() {

            var App = require('app');
            App.mainRegion.show(aboutView);
        }
    };
});
