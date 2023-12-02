"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
var fs = require("node:fs");
var rs = require("readline-sync");
var Loan = /** @class */ (function () {
    function Loan(Item, user, returnDate) {
        this.Item = Item;
        this.user = user;
        this.startDate = new Date;
        this.returnDate = new Date;
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
    Loan.readLoans = function () {
        try {
            var loan = fs.readFileSync("./loans.json", { encoding: "utf-8" });
            console.log("Prestamos.");
            rs.keyInPause("\n");
            return JSON.parse(loan);
        }
        catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }
    };
    ;
    Loan.appendLoan = function (data) {
        try {
            fs.writeFileSync("./loans.json", JSON.stringify(data, null, 2), { encoding: "utf-8" });
            console.log("COMPLETE");
            rs.keyInPause("\n");
        }
        catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }
    };
    ;
    Loan.prototype.loanItems = function () {
    };
    return Loan;
}());
exports.Loan = Loan;
;
