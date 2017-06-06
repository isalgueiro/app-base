var hooks = require('hooks');

var userId;

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