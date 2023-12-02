"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemManager = void 0;
var fs = require("node:fs");
var rs = require("readline-sync");
var itemManager = /** @class */ (function () {
    function itemManager() {
        this.items;
    }
    ;
    itemManager.readItem = function () {
        try {
            var itemsData = fs.readFileSync("./items.json", { encoding: "utf-8" });
            console.log("Agregar items.");
            rs.keyInPause("\n");
            return JSON.parse(itemsData);
        }
        catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }
    };
    ;
    itemManager.appendItem = function (itemsData) {
        try {
            fs.writeFileSync("./items.json", JSON.stringify(itemsData, null, 2), { encoding: "utf-8" });
            console.log("COMPLETE");
            rs.keyInPause("\n");
        }
        catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }
    };
    ;
    return itemManager;
}());
exports.itemManager = itemManager;
