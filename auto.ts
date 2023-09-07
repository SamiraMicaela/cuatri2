class Auto{
    private motor : Motor;

    constructor(motor:Motor,){
        this.motor = motor; 
    };

    encender(){
        console.log("Arranca o no arranca? CLARO QUE ARRANCA!")
    }

    apagar(){
        console.log("Tuve que apagar el auto, creo que estaba por explotar.")
    }
}

class Motor{
    private combustible:string;

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
