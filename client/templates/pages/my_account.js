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
    },
    org_tag_names: function() {
        return OrganizationTags;
    },
});

Template.myAccount.events({
    'submit form.edit-organization': function(e) {
        e.preventDefault();

        var org_tags = [];
        $('.org-tag:checked').each(function() {
            console.log(this);
            org_tags.push($(this).val());
        });
        console.log('after checked');

        organizationAttributes = {
            name: $('#organization-edit-name').val(),
            info: $('#organization-edit-info').val(),
            tags: org_tags
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