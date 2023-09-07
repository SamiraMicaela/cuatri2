class Personaje{
    private nombre: string;
    private edad : number;
    private pais: string;
    private movimientoEspecial:string;
    private salud:number;
    private nivel:number;

    constructor (nombre:string, edad:number,pais:string,movimientoEspemcial:string)   {
        this.nombre = nombre;
        this.edad = edad;
        this.pais = pais;
        this.movimientoEspecial = movimientoEspemcial;
        this.salud = 100;
        this.nivel = 1;

    }

    recibirDaño(daño:number): void{
        this.salud -= daño;
        console.log(`${this.nombre} recibio ${daño} puntos de daño. Salud actual ${this.salud}`);
    }

    incrementarNivel(): void{
        this.nivel ++;
        console.log(`${this.nombre} subio de nivel ${this.nivel}!`);
    }

    usarMomvimienmtoEspecial(objetivo:string): void{
        console.log(`${this.nombre} uso ${this.movimientoEspecial} contra ${objetivo}`);
    }

}

class Enemigo{
    private nombre : string
    private tipo : string
    private daño : number
    private energia: number
    private personaje: Personaje

    constructor(nombre:string, tipo:string,daño:number, personaje:Personaje){
        this.nombre = nombre;
        this.tipo = tipo;
        this.daño = daño;
        this.energia = 100;
        this.personaje = personaje;
    }

    recibirDaño(daño:number): void{
        this.energia -= daño;
        console.log(`${this.nombre} recibio ${daño} puntos de daño. Energia actual: ${this.energia}`);
        console.log(this.tipo)
    }

    atacar(): void{
        this.personaje.recibirDaño(this.daño);
    }
}

//crear un personaje y probar sus metodos.
const personajeUno = new Personaje("Samira", 23,"Argentina","Golpe mortal de la paciencia");

personajeUno.recibirDaño(15);
personajeUno.usarMomvimienmtoEspecial("Enemigo1");
personajeUno.incrementarNivel();

const personajeEnemigo = new Personaje("Enemigo1", 25, "El rincon oscuro","Somnolencia");
const enemigo1 = new Enemigo ("Enano","Fuerza",25,personajeEnemigo);

enemigo1.atacar();
enemigo1.atacar();