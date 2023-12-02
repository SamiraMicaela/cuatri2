import * as ReadlineSync from 'readline-sync';
import {Moto} from './moto.js';
class Auto {
private marca: string
private modelo: string
private año: number
private color: string
constructor(marca: string, modelo: string, año: number, color: string){
  this.marca = marca
  this.modelo = modelo
  this.año = año
  this.color = color
}
encenderMotor() {
  console.log('rum rum')
}
}
class RegistroAutomotor {
  private direccion: string;
  private abierto: boolean;
  private autos: Array<Auto>;
  private motos: Array<Moto>;
  public constructor(direccion: string, abierto: boolean, autos: Array<Auto>, motos: Array<Moto>) {
      this.direccion = direccion;
      this.abierto = abierto;
      this.autos = autos;
      this.motos = motos;
  }
  public mostrarRegistro(): void {
      console.log(this.direccion);
      console.log(this.abierto);
      console.log(this.autos);
      console.log(this.motos);
  }
  crearAuto(auto: string, arrayAuto: Array<Auto>): void {
      let propiedadAuto: string[] = auto.split(',')
      let marca: string = propiedadAuto[0]
      let modelo: string = propiedadAuto[1]
      let año: number = Number(propiedadAuto[2])
      let color: string = propiedadAuto[3]
      let nuevoAuto: Auto = new Auto(marca, modelo, año, color)
      arrayAuto.push(nuevoAuto)
  }
  borrarAuto(arrayAuto: Array<Auto>, posicion: number): void {
      delete arrayAuto[posicion]
  }
  modificarAuto(arrayAuto: Array<Auto>, posicion: number): void {
      let marca: string = ReadlineSync.question("Ingrese la marca del auto: ")
      let modelo: string = ReadlineSync.question("Ingrese el modelo del auto: ")
      let año: number = ReadlineSync.questionInt("Ingrese el año de fabricación del auto: ")
      let color: string = ReadlineSync.question("Ingrese el color del auto: ")
      let autoModificado: Auto = new Auto(marca, modelo, año, color)
      delete arrayAuto[posicion]
      arrayAuto[posicion] = autoModificado
  }
  crearMoto(moto: string, arrayMoto: Array<Moto>): void {
    let propiedadMoto: string[] = moto.split(',')
    let marca: string = propiedadMoto[0]
    let modelo: string = propiedadMoto[1]
    let año: number = Number(propiedadMoto[2])
    let color: string = propiedadMoto[3]
    let nuevaMoto: Moto = new Moto(marca, modelo, año, color);
    arrayMoto.push(nuevaMoto)
}
  borrarMoto(arrayMoto: Array<Moto>, posicion: number): void {
  delete arrayMoto[posicion]
}
  modificarMoto(arrayMoto: Array<Moto>, posicion: number): void {
  let marca: string = ReadlineSync.question("Ingrese la marca de la moto: ")
  let modelo: string = ReadlineSync.question("Ingrese el modelo de la moto: ")
  let año: number = ReadlineSync.questionInt("Ingrese el año de fabricación de la moto: ")
  let color: string = ReadlineSync.question("Ingrese el color de la moto: ")
  let motoModificada: Moto = new Moto(marca, modelo, año, color)
  delete arrayMoto[posicion]
  arrayMoto[posicion] = motoModificada
  }
}
let listaMotos: Array<Moto> = [];
let listaAutos: Array<Auto> = [];
let registro: RegistroAutomotor = new RegistroAutomotor("Avenida Santagada 1900", true, listaAutos, listaMotos)
registro.mostrarRegistro();
registro.crearAuto("volkswagen,gol,2014,gris", listaAutos)
registro.crearAuto("volkswagen,golf,2015,negro", listaAutos)
registro.crearAuto("chevrolet,cruze,2015,blanco", listaAutos)
registro.crearAuto("fiat,multipla,2008,rojo", listaAutos)
registro.mostrarRegistro()
registro.modificarAuto(listaAutos, 0)
registro.mostrarRegistro()
registro.crearMoto("volkswagen,gol,2014,gris", listaMotos)
registro.crearMoto("volkswagen,golf,2015,negro", listaMotos)
registro.crearMoto("chevrolet,cruze,2015,blanco", listaMotos)
registro.crearMoto("fiat,multipla,2008,rojo", listaMotos)
registro.mostrarRegistro()
registro.modificarMoto(listaMotos, 0)
registro.mostrarRegistro()
export default Auto