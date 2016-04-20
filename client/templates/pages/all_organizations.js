Template.organizationList.onCreated(function() {
    Session.set('tag-filter', null);
});

Template.organizationList.helpers({
    organizationList: function() {
        return this;
    },
    tagList: function() {
        return OrganizationTags;
    },
    inTagFilter: function(organization) {
        var tagFilter = Session.get('tag-filter');
        if (!tagFilter)
            return true;

        if (_.contains(organization.tags, tagFilter)) {
            return true;
        }
    },
});

Template.organizationList.events({
    'click .list-tag-name': function(event) {
        //alter which organizations are shown based on their tags

        if (this.name == Session.get('tag-filter'))
            Session.set('tag-filter', null);  //reset if the user clicks a tag twice
        else
            Session.set('tag-filter', this.name);
    },
});
