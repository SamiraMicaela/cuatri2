import { LibraryItem } from "./item";
import {User} from "./user";

export class Loan{
    private isActive: Loan;
    public libraryItem: LibraryItem;
    public user: User;
    private startDate:  Date;
    public returnDate: Date;
    
    constructor(libraryItem:LibraryItem,user:User,returnDate:Date){
        this.libraryItem = libraryItem;
        this.user=user;
        this.startDate= new Date;
        this.returnDate= returnDate;
    };

    
    lendItem(libraryItem:LibraryItem, user:User, returnDate:Date){};

    
}
