Template.organizationPage.helpers({
    organizationName: function () {
        return this.name ? this.name : "Organization name";
    },
    organizationInfo: function() {
        return this.info ? this.info : "Organization info";
    }
});