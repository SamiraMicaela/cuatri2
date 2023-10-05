import * as rs from "readline-sync";
import * as fs from "node:fs";
import {User} from "./user";
import {LibraryItem} from "./item"; 
import {Loan} from "./loan";
import { Console, log } from "node:console";
import { Book } from "./book";

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

    // // Metodo para agregar un usuario a la biblioteca
    addUser(user:User): void{
        this.users.push(user);
        console.log(`"${user.name}" ha sido registrado in the library :)`);
    };

    restricUser(user){};

    // Mmmetodo para mostrar los prestamos activos
    showActiveLoans() {
        return this.loans.filter((loan) => loan.returnDate >= new Date());
    };
    

    loanItem(libraryItem:LibraryItem,user:User,returnDate:Date):void{ /* tomamos el objeto libraryitme, un objeto user y una fecha returnDate como argumentos.*/
            if (!libraryItem.checkAvailability()){ /*comprueba si libraryitmem esta disponible llamando al metodo chemckavailability() de libraryitme.*/
                console.log(`"${libraryItem.title}" no esta disponiblem para prestamos.`); /*si no esta disponible*/
                return;
            }
            
            const loan= new Loan(libraryItem,user,returnDate); /*si el item esta disponible se creea una nueva instancia de loanm para regiustrar ala lista de prestamos mthis.loans*/
            this.loans.push(loan);
            libraryItem.loanItem(); /*luego llama al memtodo loanitem para marcarlo como prestado */
            console.log(`"${libraryItem.title}" ha sido prestado a "${user.name}" hasta el "${returnDate}".`); /*y se presto*/
            rs.keyInPause("\n");  
    };

    //metodo para devolver un item prestado    
    returnDate(loan:Loan): void{
        const index,showActiveLoans,indexof,(loan);
        if(index!==1){
            const returnItem = this.showActiveLoans.(index,1)
        }
    }

    returnItem(loan:Loan):void{
        const index = this.loans.indexOf(loan); /*busca la posicion del objeto loan en la lista this loans*/
        if(index !== -1){ /*si el prestamo no se encuentra index sera igual a menos 1. msi index no es igual a memnos 1 significa que encontro el prestamo*/
            const returnedLoan = this.loans.splice(index, 1)[0]; /*se elimina el prestamo usandom this.loans.splice(index,1)arr0.*/
            returnedLoan.libraryItem.returnItem(); /*se llama a returnitmemmmm de la biblioteca para marcarlo como devuelto*/
            console.log(`"${returnedLoan.libraryItem.title}" ha sido demvuelto por "${returnedLoan.user.name}".`);  
        }else {
            console.log(`El prestamo mno se encontro men la lista.`);    
        }
        rs.keyInPause("\n");
    };

    // Metodo para agregar un elemento a la biblioteca
    addItem(libraryItem:LibraryItem): void{
        this.items.push(libraryItem); /* this.items esuna propiedad que almacemna una listade elememntos de la biblioteca.*/
        console.log(`"${libraryItem.title}" ha sido agregado a la biblioteca.`); /*mthis.itemms.push(libraryitem) agrega al objeto libraryitem a la lista de elemtenso de la biblioteca.*/
        rs.keyInPause("\n");
        
    };

    deleteItem(){
        console.log("borra2");
        rs.keyInPause ("\n");
        
    };

    readItems(){
        try{
            const readItems = fs.readFileSync("./items.json", { encoding: "utf-8"});
            
            console.log(readItems) ;
            rs.keyInPause("\n");
        }catch{}
    };

    menu(){
        while(true){
            console.clear();
            const choice = rs.keyInSelect(this.menuOptions);
            switch(choice){
                case 0:
                     this.readItems();
                break;
                case 1: 
                    this.addItem();
                 break;
                case 2: 
                    this.deleteItem();
                break;
                case 3:
                    this.loanItem();
                break;
                default:
                     console.log("xxs");
                return;
                        
                      
            }
        }
    }
    menuOptions =["read", "add", "delete", "loan"
    ]
}
const sarasabook = new Library ();
//console.log(sarasabook.readItems());
sarasabook.menu();


