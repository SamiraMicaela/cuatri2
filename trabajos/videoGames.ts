class videoGame{
    protected nombre: string;
    protected vida: number;
    protected energia: number;
    private nivel: number;

    constructor(nombre:string,vida:number,energia:number,nivel:number){
        this.nombre=nombre;
        this.vida=vida;
        this.energia=energia;
        this.nivel=nivel;
    }

    subirNivel():void{};
}

