Meteor.publish('organizationPage', function(username) {
    check(username, String);
    return Organizations.find({username: Accounts.findUserByUsername(username).username});
});
Meteor.publish('accountPageOrganization', function(user) {
    check(user, Object);
    check(user._id, String);
    return Organizations.find({userId: user._id});
});
Meteor.publish('organizationList', function (options) {
    check(options, {
        sort: Object
    });

    return Organizations.find({approved: true}, {username: 1, tags: 1, sort: options.sort});  //returns only the username field
});
