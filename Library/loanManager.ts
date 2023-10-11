import { Loan } from "./loan";
import { Item } from "./item";
import { User } from "./user";
import * as fs from "node:fs";
import * as rs from "readline-sync";
export class loanManager{
    private loans : Loan[];

    constructor(){
        this.loans;
    };



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

    static readLoans() {
        try {
            const loansData = fs.readFileSync("./loans.json", { encoding: "utf-8" });
            console.log("Prestamos.");
            rs.keyInPause("\n");
            return JSON.parse(loansData) as Loan[];
        } catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }

    };

    static appendLoan(loansData: Item[]){
        try {
            fs.writeFileSync("./loans.json", JSON.stringify(loansData, null, 2), { encoding: "utf-8" });
            console.log("COMPLETE")
            rs.keyInPause("\n");
        } catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }
    };

    saveLoans() {
        fs.writeFileSync("./users.json", JSON.stringify(this.loans, null, 2), { encoding: "utf-8" });
    };
}