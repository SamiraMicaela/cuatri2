/*
class Auto{
    private motor : Motor;

    constructor(motor:Motor,){
        this.motor = motor; 
    };

    encender(){
        console.log(`Arranca o no arranca? CLARO QUE ARRANCA! ${this.motor.combustible}`)
    }

    apagar(){
        console.log(`Tuve que apagar el auto, creo que estaba por explotar.`)
    }
}

class Motor{
     combustible:string;

    constructor(combustible:string){
        this.combustible = combustible;
    }

    setCombustibleEstablecido(){

    }
}

const autoMotor = new Motor ("Agua sucia");
const superAuto = new Auto (autoMotor);
superAuto.encender();
superAuto.apagar();
*/

class Vehiculo{
    protected marca:string;
    protected modelo:string;
    private encendido: boolean;

    constructor(marca:string,modelo:string){
        this.marca=marca;
        this.modelo=modelo;
        this.encendido=false;
    }

    encender(){
        this.encendido=true;
        console.log(`El ${this.marca} ${this.modelo} está encendido.`);
        
    }

    apagar(){
        this.encendido=false;
        console.log(`El ${this.marca}, ${this.modelo} esta apagado.`);
        
    }

    acelerar(){
        console.log(`El ${this.marca} ${this.modelo} esta acelerandooo.`); 
    }
}

class Auto extends Vehiculo{
    private puertas : number;
    constructor(marca:string,modelo:string,puertas:number){
        super(marca,modelo);
        this.puertas= puertas;
    }

    acelerar(){
        console.log(`El ${this.marca} ${this.modelo} con ${this.puertas} puertas, esta acelerandooo.`); 
    }    
}

class Motocicleta extends Vehiculo{
    private cilindrada:string;
    
    constructor(marca:string,modelo:string, cilindrada:string){
        super(marca,modelo);
        this.cilindrada=cilindrada;
    }

    acelerar(){
        console.log(`El ${this.marca} ${this.modelo}, cilindrada ${this.cilindrada} esta acelerandooo.`); 
    } 
}

const rayito = new Auto("toyota","GR86",4);
const flechita = new Motocicleta ("Kawasaki","Z650","649cc");

rayito.encender();
rayito.acelerar();
flechita.encender();
flechita.acelerar();