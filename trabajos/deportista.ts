class Deportista{
    public nombre: string;
    public edad: number;
    protected equipo: Equipo;

    constructor(nombre:string, edad:number, equipo:Equipo){
        this.nombre = nombre;
        this.edad = edad;
        this.equipo= equipo; 
    };

    entrenar():void{
        console.log(`El deportista esta entrenando duro.`);
    };

    descansar():void{
        console.log(`Es hora de descansar, hiciste tu mejor esfuerzo.`);
    };
    
    info(){
        console.log(`Nombre del deportista ${this.nombre}, edad: ${this.edad}, equipo: ${this.equipo}`);
        
    };
};

class Equipo{
    public integrantes:number;
    constructor(integrantes:number){
        this.integrantes=integrantes;
    }
    
};

class Tenista extends Deportista{
    private ranking:number;

    constructor(ranking:number, nombre:string,edad:number,equipo:Equipo){
        super(nombre,edad,equipo);
        this.ranking= ranking;
    };

    competir():void{
        console.log(`${this.nombre} a comenzado a competir!!!!`);
        
    };

};

class Futbolista extends Deportista{
    private posicion: string;

    constructor(posicion:string,nombre:string,edad:number,equipo:Equipo){
       super(nombre,edad,equipo);
       this.posicion=posicion; 
    };
    
    jugarPartido():void{
        console.log(``);
        
    };
};

class Nadadorx extends Deportista{
    private estilo: string;

    constructor(estilo:string,nombre:string,edad:number,equipo:Equipo){
        super(nombre,edad,equipo);
        this.estilo=estilo;
    };

    nadar():void{
        console.log(`${this.nombre} a comenzado a nadar`);
        
    };
    
};
let safiros=new Equipo(1);
let safiro =new Deportista("Pedro Pascal",27,safiros);
let safir=new Nadadorx("Estilo libre","Delfina Pignatiello",21,safiros);
safir.nadar();
safir.info();
let samira=new Tenista(3,"Samira",23,safiros);
samira.competir();

