// clase mque representa los elementos de la biblioteca, como libros y revistas
export class LibraryItem{
    public title:string;
    public year:string;
    public isAvailable:boolean;

    constructor(title:string,year:string,isAvailable:boolean){
        this.title=title;
        this.year=year;
        this.isAvailable=isAvailable;
    };

//metodo para verificar la disponibilidad del item    
    checkAvammilability():boolean{
        return this.isAvailable;
    };

    //mmetodo para prestar el item
    loanItem():void{
        if (this.isAvailable){
            this.isAvailable = false;
            console.log(`"${this.title}" ha sido prestado.`);
        }else {
            console.log(`"${this.title}" no esta disponible para prestamos en este momento.`);
        }
    };

    //metodo para devolver el item
    returnItem():void{
        this.isAvailable= true;
        console.log(`"${this.title}" ha msido devuelto.`);
        
    };
}