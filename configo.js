require.config({
    paths: {
        'jquery': './js/vendor/jquery',
        'underscore': './js/vendor/underscore',
        'tpl': './js/vendor/tpl',
        'spin': './js/vendor/spin',
        'jquery-spin': './js/vendor/jquery.spin',
        "bootstrap": "./js/vendor/bootstrap",
        'backbone.localstorage': './js/vendor/backbone.localStorage',
        'backbone.syphon': './js/vendor/backbone.syphon',
        'backbone': './js/vendor/backbone',
        'marionette': './js/vendor/backbone.marionette',

        'app': './js/app',
        'app-start': './js/app_start',

        'loading-view': './js/apps/common/loading_view',
        'modal-region': './js/apps/common/modal_region',

        'contact-newedit-view': './js/apps/Contacts/common/contact_newedit_view',

        'contacts-router': './js/apps/Contacts/common/contacts_router',
        'contacts-model': './js/apps/Contacts/common/contact_model_class',
        'contacts-collection-defer': './js/apps/Contacts/common/contacts_collection_defer',
        'contacts-collection': './js/apps/Contacts/common/contacts_collection',
        'contact-editnew-routines': './js/apps/Contacts/common/contact_editnew_routines',

        'contacts-list-views': './js/apps/Contacts/List/list_views',
        'contacts-list-controller': './js/apps/Contacts/List/list_controller',
        'contact-show-views': './js/apps/Contacts/Show/show_views',
        'contact-show-controller': './js/apps/Contacts/Show/show_controller',
        'contact-edit-views': './js/apps/Contacts/Edit/edit_views',
        'contact-edit-controller': './js/apps/Contacts/Edit/edit_controller',
        'contact-new-view': './js/apps/Contacts/New/new_view',
        'contact-new-controller': './js/apps/Contacts/New/new_controller',
        'contacts-panel-view': './js/apps/Contacts/List/panel_view',
        'contacts-panel-controller': './js/apps/Contacts/List/panel_controller',
        'contacts-list-layout': './js/apps/Contacts/List/list_layout',

        'about-view': './js/apps/About/about_view',
        'about-controller': './js/apps/About/about_controller',
        'about-router': './js/apps/About/about_router',

        'header-view': './js/apps/Header/header_view'
        },
    shim: {
        'bootstrap': {
            deps: ["jquery"]
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            exports: 'Backbone',
            deps: ['underscore', 'jquery']
        },
        'marionette': {
            exports: 'Marionette',
            deps: ['backbone']
        }
    }
});
require(['app-start']);
