"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var RedeFpHostalariaPage = (function () {
    function RedeFpHostalariaPage() {
    }
    RedeFpHostalariaPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    RedeFpHostalariaPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('ab-root h1')).getText();
    };
    return RedeFpHostalariaPage;
}());
exports.RedeFpHostalariaPage = RedeFpHostalariaPage;
//# sourceMappingURL=app.po.js.map