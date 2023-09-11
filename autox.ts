class Auto {
    protected marca: string;
    protected modelo : string;
    private velocidadMaxima : number;

    constructor(marca:string,modelo:string,velocidadMaxima:number){
        this.marca= marca;
        this.modelo=modelo;
        this.velocidadMaxima=velocidadMaxima;
    }

    acelerar(){
        console.log(`${this.marca} ${this.modelo} esta acelerando.`);
    }

    frenar(){
        console.log(`${this.marca} ${this.modelo} esta frenando.`);
    }
}

class AutoDeCarrera extends Auto{
    constructor(marca:string,modelo:string,velocidadMaxima:number){
        super(marca,modelo,velocidadMaxima);
    }

    turbo(){
        console.log(`El ${this.marca} ${this.modelo} activo el turbo y alcanza velocidades increiblesss!`);
    }
}

const auto1 = new Auto("citroen","DS DS4",180);
const flechon = new AutoDeCarrera("Ferrari","SF90 Deportivo",200);

auto1.acelerar();
flechon.acelerar();
flechon.turbo();