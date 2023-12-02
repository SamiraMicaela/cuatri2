"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var crypto = require("node:crypto");
var Item = /** @class */ (function () {
    function Item(title, year, id) {
        this.isAvailable = true;
        this.id = crypto.randomUUID();
        this.title = title;
        this.year = year;
    }
    ;
    return Item;
}());
exports.Item = Item;
;
