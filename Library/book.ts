import { Item } from "./item";

export class Book extends Item {
    public author: string;

    constructor(title: string, author: string, year: string,id) {
        super(title, year,id);
        this.author = author;
    }

    getAuthor() {
        return this.author;
    };

    setAuthor() { };

}