Organizations = new Mongo.Collection('organizations');

//TODO: allow/deny rules here

Meteor.methods({
    organizationUpdate: function(organizationAttributes) {
        check(this.userId, String);
        check(organizationAttributes, {
            name: String,
            info: String,
            tags: [String]
        });

        //TODO: sanitize inputs here

        var user = Meteor.user();
        var organization = _.extend(organizationAttributes, {
            userId: user._id,
            username: user.username,
            updatedAt: new Date(),
            approved: false,  // NOTE: every time a user updates their org, this will automatically eliminate it from the list
        });

        Organizations.update(
            {
                userId: user._id
            },
            {
                $set: organization
            },
            {
                upsert: true
            });
    }
});
