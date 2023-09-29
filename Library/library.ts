import {User} from "./user";
import {LibraryItem} from "./item"; 
import {Loan} from "./loan";

class Library{
    private items: LibraryItem[]=[];
    private users: User[]=[];
    private loans: Loan[]=[];
    private isOpen: boolean;
    

    constructor(){
        this.items = [];
        this.users = [];
        this.loans = [];
    };
// Metodo para agregar un elemento a la biblioteca
    addItem(libraryItem:LibraryItem): void{
        this.items.push(libraryItem);
        console.log(`"${libraryItem.title}" ha sido agregado a library puede ser?`);
        
    };
    // Metodo para agregar un usuario a la biblioteca
    addUser(user:User): void{
        this.users.push(user);
        console.log(`"${user.name}" ha sido remmgistrado in the library :)`);
    };

    restricUser(muser){};

// Metodo para realizar un prestamo
    lendItem(libraryItem:LibraryItem,user:User,returnDate:Date):void{
        
    };
// Mmmetodo para mostrar los prestamos activos
    showActiveLoans(): void{
      
    };

//metodo para devolver un mitem prestado    
    returnItem(loan:Loan): void{
        
    }
    
}