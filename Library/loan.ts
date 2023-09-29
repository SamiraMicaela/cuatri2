import { LibraryItem } from "./item";
import {User} from "./user";

export class Loan{
    private isActive: Loan;
    public libraryItem;
    private user: User;
    private startDate:  Date;
    private returnDate: Date;
    
    constructor(libraryItem:LibraryItem,user:User,returnDate:Date){
        this.libraryItem = libraryItem;
        this.user=user;
        this.startDate= new Date;
        this.returnDate= returnDate;
    };

    checkUser(libraryItem){};
    lendItem(libraryItem,user,returnDate){};
    returnItem(libraryItem,user,returnDate){}

}
