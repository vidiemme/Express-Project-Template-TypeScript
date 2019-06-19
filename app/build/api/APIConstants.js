"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActorAPI_1 = require("./Actor/ActorAPI");
var APIs = /** @class */ (function () {
    function APIs(router) {
        this.router = router;
        this.actorAPI = new ActorAPI_1.ActorAPI(this.router);
    }
    APIs.prototype.attachAPIs = function () {
        this.actorAPI.attach();
        this.actorAPI.prepareForTests();
    };
    return APIs;
}());
exports.APIs = APIs;
