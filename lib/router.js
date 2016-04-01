Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});


//TODO: "slugify" organization names for the router, in case they contain spaces or special characters
OrganizationPageController = RouteController.extend({
    template: 'organizationPage',
    subscriptions: function() {
        this.singlePageSub = [
            Meteor.subscribe('organizationPage', this.params.organizationName)
        ];
    },
    organizationPage: function() {
        return Organizations.findOne({});
    },
    data: function() {
        return this.organizationPage();
    }
});
Router.route('/organization/:organizationName', {
    name: 'organizationPage',
    controller: OrganizationPageController
});

OrganizationListController = RouteController.extend({
    template: 'organizationList',
    findOptions: function() {
        return {sort: {username: 1}}
    },
    subscriptions: function() {
        this.organizationListSub = [
            Meteor.subscribe('organizationList', this.findOptions())
        ];
    },
    organizationList: function() {
        return Organizations.find({});
    },
    data: function() {
        return this.organizationList();
    }
});

AccountPageController = RouteController.extend({
    template: 'myAccount',
    subscriptions: function() {
        if (Meteor.user()) {
            this.singlePageSub = [
                Meteor.subscribe('accountPageOrganization', Meteor.user())
            ];
        }
    },
    organizationPage: function() {
        return Organizations.findOne({});
    },
    data: function() {
        return this.organizationPage();
    }
});


Router.route('/all', {
    name: 'organizationList',
    controller: OrganizationListController
});
Router.route('/account', {
    name: 'myAccount',
    controller: AccountPageController
});
Router.route('/login', {name: 'signInPage'});
Router.route('/about', {name: 'aboutPage'});
Router.route('/', {name: 'homePage'});


//These send a user to either the login or account page, depending on whether they're signed in.
Router.onBeforeAction(function() {
    if (!Meteor.user()) {
        Router.go('signInPage');
    }
    else {
        this.next();
    }
}, {only: ['myAccount']});

Router.onBeforeAction(function() {
    if (Meteor.user()) {
        Router.go('myAccount');
    }
    else {
        this.next();
    }
}, {only: ['signInPage']});
