export class Moto {
    marca: string;
    modelo: string;
    año: number;
    color: string;
    private cilindrada: string;

    constructor(marca: string, modelo: string, año: number, cilindrada: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.año=año;
        this.cilindrada = cilindrada;
    }

    encenderMotor() {
        console.log(`El ${this.marca} ${this.modelo}, cilindrada ${this.cilindrada} esta aencendida.`);
    }
}