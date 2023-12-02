"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var crypto = require("node:crypto");
var User = /** @class */ (function () {
    function User(name, address, phoneNumber) {
        this.id = crypto.randomUUID();
        this.scoring = 0;
        this.id = crypto.randomUUID();
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    ;
    User.prototype.checkUser = function () { };
    ;
    User.prototype.calculateScoring = function (daysLate) {
        if (daysLate >= 1 && daysLate <= 2) {
            this.scoring += 2;
        }
        else if (daysLate > 2 && daysLate <= 5) {
            this.scoring += 3;
        }
        else if (daysLate > 5 && daysLate <= 10) {
            this.scoring += 6;
        }
        else if (daysLate > 10) {
            // Se cancela al usuario
            this.scoring = 0;
            this.penaltyCount += 1;
            console.log("Usuario ".concat(this.name, " ha sido cancelado debido al retraso en la devoluci\u00F3n."));
        }
    };
    ;
    return User;
}());
exports.User = User;
var usu = new User("samira", "callexd", 222222222);
//usu.applyPenalty();
usu.calculateScoring(2);
