Template.registerHelper('pluralize', function(n, thing) {
    if (n === 1) {
        return thing;
    } else {
        return thing + 's';
    }
});

Template.registerHelper('equals', function(a, b) {
    return a === b;
});
Template.registerHelper('greaterThan', function(a, b) {
    return a > b;
});
Template.registerHelper('lessThan', function(a, b) {
    return a < b;
});
Template.registerHelper('and', function(a, b) {
    return a && b;
});
Template.registerHelper('or', function(a, b) {
    return a || b;
});

Template.registerHelper('truthy', function(a) {
    if (typeof a === "string") {
        a = a.toLowerCase();
        if (a != "" && a != "no" && a != "0" && a != "false") {
            return true;
        }
    }
    else if (a && a != 0) {
        return true;
    }
    return false;
});
Template.registerHelper('falsy', function(a) {
    if (typeof a === "string") {
        a = a.toLowerCase();
        if (a == "no" || a == "none" || a == "false" || a == "0" || a == "") {
            return true;
        }
    }
    else if (a || a == 0) {
        return true;
    }
    return false;
});