import { LibraryItem } from "./item";

export class Book extends LibraryItem{
    public author: string;

    constructor(title:string,author:string,year:string, isAvailable:boolean){
        super(title,year,isAvailable);
        this.author= author;
    }

    getAuthor() {
        return this.author;
      }
}