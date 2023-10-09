import { Item } from "./item";
import * as fs from "node:fs";
import * as rs from "readline-sync";

export class itemManager {
    items: Item[];
    constructor() {
        this.items;
    };

    static readItem() {
        try {
            const items = fs.readFileSync("./items.json", { encoding: "utf-8" });
            console.log("Agregar items.");
            rs.keyInPause("\n");
            return JSON.parse(items) as Item[];
        } catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }

    };

    static appendItem(data: Item[]) {
        try {
            fs.writeFileSync("./items.json", JSON.stringify(data, null, 2), { encoding: "utf-8" });
            console.log("COMPLETE")
            rs.keyInPause("\n");
        } catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }
    };
}