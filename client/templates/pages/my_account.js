Template.myAccount.helpers({
    organizationName: function () {
        return this.name ? this.name : "Organization name";
    },
    organizationInfo: function() {
        return this.info ? this.info : "Organization info";
    },
    username: function() {
        if (Meteor.user()) {
            return Meteor.user().username;
        }
    }
});

Template.myAccount.events({
    'submit form.edit-organization': function(e) {
        e.preventDefault();

        organizationAttributes = {
            name: $('#organization-edit-name').val(),
            info: $('#organization-edit-info').val()
        };

        if (Meteor.user()) {
            Meteor.call('organizationUpdate', organizationAttributes, function (err, result) {
                if (err) {
                    throwError(err.reason);
                }

                throwSuccess("Your organization has been updated.")
            });
        }
    }
});