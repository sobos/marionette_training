define(['marionette', 'contacts-panel-view',
    'tpl!js/apps/Contacts/templates/list_item.tpl', 'tpl!js/apps/Contacts/templates/list.tpl',
    'tpl!js/apps/Contacts/templates/contacts_list_none.tpl'],
    function(Marionette, contactsPanelView, listItemTpl, listTpl, listNoneTpl) {

        var ContactListItemView = Marionette.ItemView.extend({
            tagName: "tr",
            template: listItemTpl,
            events: {
                'click': 'highlightItem',
                'click td': 'highlightCell',
                'click button.js-delete': 'deleteItem',
                'click td a.js-show': 'showItem',
                'click td button.js-edit': 'editItem'
            },

            modelEvents: {

                'sync': function(obj, obj, options) {

                    this.render();

                    if (this.criterium)
                        if (!options.silent) this.flash('success');
                },

                'contact:added': function() {

                    if (this.criterium())
                        this.flash('success');
                }
            },

            criterium: function() {

                var criterion = contactsPanelView.options.criterion;

                var l = criterion.length;

                if (l > 0) {

                    if (this.model.get('firstName').slice(0, l) === criterion.slice(0, l)) {

                        return true;

                    } else {

                        return false;
                    }
                }
                return true;
            },

            onRender: function() {

                if (this.criterium()) this.$el.show();
                else this.$el.hide();
            },

            flash: function(cssClass) {

                var $view = this.$el;
                $view.hide().toggleClass(cssClass).fadeIn(800, function() {
                    setTimeout(function() {
                        $view.toggleClass(cssClass);
                    }, 500);
                })
            },

            remove: function() {
                var self = this;
                this.$el.fadeOut(function() {
                    Marionette.ItemView.prototype.remove.call(self);
                });
            },
            highlightItem: function() {
                this.$el.toggleClass('warning');
            },
            highlightCell: function(evt) {
                $(evt.target).text('alert alert').css({'color': 'red'});
            },
            deleteItem: function(evt) {
                evt.stopPropagation();
                this.trigger('contact:delete');
                this.remove();
            },
            showItem: function(evt) {
                evt.preventDefault();
                evt.stopPropagation();
                this.trigger('contact:show');
            },
            editItem: function(evt) {
                evt.preventDefault();
                evt.stopPropagation();
                this.trigger('contact:edit');
            }
        });

         var NoContactsView = Marionette.ItemView.extend({

            template: listNoneTpl,
            tagName: 'tr',
            className: 'alert'
        });

        var ContactsListView = Marionette.CompositeView.extend({

            tagName: "table",
            className: 'table table-hover',
            template: listTpl,
            emptyView: NoContactsView,
            itemView: ContactListItemView,
            itemViewContainer: 'tbody'

          /*  onItemviewContactDelete: function() {
                this.$el.fadeOut(1000, function() {
                    $(this).fadeIn(1000);
                });
            }  */
        });

        return new ContactsListView();
    }
);