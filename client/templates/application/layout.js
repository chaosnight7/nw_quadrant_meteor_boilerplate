Template.layout.helpers({
    pageTitle: function () {
        return (Session.get('pageTitle')) ? Session.get('pageTitle') : "Des Moines Northwest Quadrant";
    }
});