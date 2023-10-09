import * as crypto from "node:crypto";

export class Item {
    public id: String;
    public title: string;
    public year: string;
    public isAvailable: boolean = true;

    constructor(title: string, year: string) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.year = year;

    };
};
