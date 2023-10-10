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
            const itemsData = fs.readFileSync("./items.json", { encoding: "utf-8" });
            console.log("Agregar items.");
            rs.keyInPause("\n");
            return JSON.parse(itemsData) as Item[];
        } catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }

    };

    static appendItem(itemsData: Item[]) {
        try {
            fs.writeFileSync("./items.json", JSON.stringify(itemsData, null, 2), { encoding: "utf-8" });
            console.log("COMPLETE")
            rs.keyInPause("\n");
        } catch (err) {
            console.log("Unexpected Error:", err);
            rs.keyInPause("\n");
        }
    };
}