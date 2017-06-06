var hooks = require('hooks');

var userId;
var organizationId;

hooks.after("Users > Users Collection > Get All Users", function (transaction) {
    let userList = JSON.parse(transaction.real.body);
    if (userList) {
        hooks.log(userList);
        userId = userList[0]._id;
    }
});

hooks.before("Users > User > Get User", function (transaction) {
    if (userId) {
        transaction.request.uri = transaction.fullPath = transaction.fullPath.replace('1', userId);
    }
});

hooks.after("Organizations > Organizations Collection > Get All Organization", function (transaction) {
    let organizationList = JSON.parse(transaction.real.body);
    if (organizationList) {
        hooks.log(organizationList);
        organizationId = organization[0]._id;
    }
});

hooks.before("Organizations > Organization > Get Organization", function (transaction) {
    if (organizationId) {
        transaction.request.uri = transaction.fullPath = transaction.fullPath.replace('1', organizationId);
    }
});