TemporaryNotifications = new Mongo.Collection(null);

throwError = function(message) {
    console.log('inserting');
    TemporaryNotifications.insert({message: message, type: 'danger'});
};

throwWarning = function(message) {
    TemporaryNotifications.insert({message: message, type: 'warning'});
};

throwSuccess = function(message) {
    TemporaryNotifications.insert({message: message, type: 'success'});
};