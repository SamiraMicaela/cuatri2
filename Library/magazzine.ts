import { LibraryItem } from "./item";

export class Magazzine extends LibraryItem{
    public editor:string;

    constructor(title:string,editor:string,year:string,isAvailable:boolean){
        super(title,year,isAvailable);
        this.editor=editor;
    }
}