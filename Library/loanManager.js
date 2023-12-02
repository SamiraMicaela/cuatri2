"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loanManager = void 0;
var fs = require("node:fs");
var rs = require("readline-sync");
var loanManager = /** @class */ (function () {
    function loanManager() {
        this.loans;
    }
    ;
    // static readUsers(): User[] {
    //     try {
    //         const userData = fs.readFileSync("./users.json", { encoding: "utf-8" });
    //         return JSON.parse(userData) as User[];
    //     } catch (err) {
    //         console.error("Error al leer los datos de usuarios:", err);
    //         throw err;
    //     }
    // };
    // static readItems(): Item[] {
    //     try {
    //         const itemsData = fs.readFileSync("./items.json", { encoding: "utf-8" });
    //         return JSON.parse(itemsData) as Item[];
    //     } catch (err) {
    //         console.error("Error al leer los datos de ítems:", err);
    //         throw err;
    //     }
    // };
    loanManager.readLoans = function () {
        try {
            var loansData = fs.readFileSync("./loans.json", { encoding: "utf-8" });
            console.log("Prestamos.");
            rs.keyInPause("\n");
            return JSON.parse(loansData);
        }
        catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }
    };
    ;
    loanManager.appendLoan = function (loansData) {
        try {
            fs.writeFileSync("./loans.json", JSON.stringify(loansData, null, 2), { encoding: "utf-8" });
            console.log("COMPLETE");
            rs.keyInPause("\n");
        }
        catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }
    };
    ;
    loanManager.prototype.saveLoans = function () {
        fs.writeFileSync("./users.json", JSON.stringify(this.loans, null, 2), { encoding: "utf-8" });
    };
    ;
    return loanManager;
}());
exports.loanManager = loanManager;
