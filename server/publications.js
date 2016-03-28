Meteor.publish('organizationPage', function(username) {
    check(username, String);
    return Organizations.find({username: username});
});
Meteor.publish('accountPageOrganization', function(user) {
    check(user, Object);
    check(user._id, String);
    return Organizations.find({userId: user._id});
});
Meteor.publish('organizationList', function () {
    return Organizations.find({}, {username: 1});  //returns only the username field
});