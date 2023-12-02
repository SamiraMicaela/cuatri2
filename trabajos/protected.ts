class Animal{
    protected nombre:string;
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

     mostrarNombre(): void{
        console.log(`El nombre del perro es: ${this.nombre}`);
     }

     mostrarRaza(): void{
        console.log(`La raza delperro es: ${this.raza}`)
     }

     mostrarEdad(): void{
        console.log(`El perro tiene ${this.edad} años.`)
     }
 }
 
 
 const perro0 = new Perro("Gordo",2,"pichicho");
 perro0.emitirSonido();
 perro0.mostrarEdad();
 perro0.mostrarNombre();
 perro0.mostrarRaza();