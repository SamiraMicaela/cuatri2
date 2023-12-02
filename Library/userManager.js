"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
var fs = require("node:fs");
var rs = require("readline-sync");
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users;
    }
    ;
    // lee la lista de usuarios desde el archivo JSON
    UserManager.readUsers = function () {
        try {
            var usersData = fs.readFileSync("./users.json", { encoding: "utf-8" });
            return JSON.parse(usersData);
        }
        catch (err) {
            return [];
        }
    };
    ;
    UserManager.appendUser = function (usersData) {
        try {
            fs.writeFileSync("./users.json", JSON.stringify(usersData, null, 2), { encoding: "utf-8" });
            console.log("COMPLETE");
            rs.keyInPause("\n");
        }
        catch (error) {
            console.log("Unexpected Error:", error);
            rs.keyInPause("\n");
        }
    };
    ;
    // guarda la lista de usuarios en el archivo JSON
    UserManager.prototype.saveUsers = function () {
        fs.writeFileSync("./users.json", JSON.stringify(this.users, null, 2), { encoding: "utf-8" });
    };
    ;
    return UserManager;
}());
exports.UserManager = UserManager;
