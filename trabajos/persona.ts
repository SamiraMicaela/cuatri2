class Persona{
    private name: string;
    private age : number;
    private genero: string;

 
    constructor (name:string, age:number,genero:string){
        this.name =(name);
        this.age =(age);
        this.genero=(genero);
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.name}, soy ${this.genero} y tengo ${this.age} años.`)
    }


}
const pers1 = new Persona("Samira",23,"Mujer");
pers1.saludar();