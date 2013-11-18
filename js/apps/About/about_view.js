define(['marionette', 'tpl!js/apps/About/about_message.tpl'], function(Marionette, aboutMessageTpl) {

    var AboutView = Marionette.ItemView.extend({

        template: aboutMessageTpl
    });

    return new AboutView();
});
