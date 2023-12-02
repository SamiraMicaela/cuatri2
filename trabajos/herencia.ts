class Animal{
   public nombre:string;
   public edad:number;

    constructor(nombre:string,edad:number){
        this.nombre =nombre;
        this.edad=edad;
    }

    emitirSonido():void{
        console.log("El animal emite un sonido");
    }
}

class Perro extends Animal{
   public raza:string;

    constructor(nombre:string,edad:number,raza:string){
        super(nombre,edad);
        this.raza=raza;
    }

    emitirSonido():void{
        console.log("El perro ladra: Guau guau!");
    }
}

class Gato extends Animal{
   public color: string;

    constructor(nombre:string,edad:number,color:string){
        super(nombre,edad);
        this.color=color;
    }

    emitirSonido(): void {
        console.log("El gato maulla: ¡Miau miau!");
    }
}

const miPerro = new Perro("Fredo",10,"Calle");

console.log(miPerro.nombre + " es de raza " + miPerro.raza);
