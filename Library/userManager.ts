import * as fs from "node:fs";
import { User } from "./user";
import * as rs from "readline-sync";

export class UserManager {
    private users: User[];

    constructor() {
        this.users  ;
    };

    // lee la lista de usuarios desde el archivo JSON
    static readUsers(): User[] {
        try {
            const usersData = fs.readFileSync("./users.json", { encoding: "utf-8" });
            return JSON.parse(usersData) as User[];
        } catch (err) {
            return [];
        }
    };

    
    static appendUser(data: User[]) {
        try {
            fs.writeFileSync("./users.json", JSON.stringify(data, null, 2), { encoding: "utf-8" });
            console.log("COMPLETE");
            rs.keyInPause("\n");
        } catch (error) {
            console.log("Unexpected Error:", error);
            rs.keyInPause("\n");
        }


    };


    // guarda la lista de usuarios en el archivo JSON
    saveUsers() {
        fs.writeFileSync("./users.json", JSON.stringify(this.users, null, 2), { encoding: "utf-8" });
    };
}




