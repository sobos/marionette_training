define(['contact-newedit-view'], function(contactNeweditView) {

    var ContactItemNewView = contactNeweditView.extend();

    return new ContactItemNewView({ title: 'New Contact' });
});
