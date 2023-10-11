import * as crypto from "node:crypto";
import * as rs from "readline-sync";
import * as fs from "node:fs";
export class User {
  public id: string = crypto.randomUUID();
  public name: string;
  private address: string;
  private phoneNumber: number;
  public scoring: number = 0;
  public penaltyCount: number;

  constructor(name: string, address: string, phoneNumber: number) {
    this.id= crypto.randomUUID();
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  };

  checkUser() { };


  calculateScoring(daysLate: number): void {
    if (daysLate >= 1 && daysLate <= 2) {
      this.scoring += 2;
    } else if (daysLate > 2 && daysLate <= 5) {
      this.scoring += 3;
    } else if (daysLate > 5 && daysLate <= 10) {
      this.scoring += 6;
    } else if (daysLate > 10) {
      // Se cancela al usuario
      this.scoring = 0;
      this.penaltyCount += 1;
      console.log(`Usuario ${this.name} ha sido cancelado debido al retraso en la devolución.`);
    }
  };

  // applyPenalty(): void {
  //   if (this.scoring >= 6) {
  //     console.log(`Usuario ${this.name} ha alcanzado 6 puntos de penalización.`);
  //     console.log(`El usuario está penalizado y no puede retirar ítems por una semana.`);

  //     // Establecer la fecha de levantamiento de la penalización (1 semana después de la fecha actual)
  //     const currentDate = new Date();
  //     const oneWeekLater = new Date(currentDate);
  //     oneWeekLater.setDate(currentDate.getDate() + 7);

  //     this.penaltyCount += 1;
  //     this.scoring = 0;// Reiniciar el scoring

  //     console.log(oneWeekLater);// Devolver la fecha de levantamiento de la penalización
  //   }
  // };
}
const usu = new User("samira", "callexd", 222222222);
//usu.applyPenalty();
usu.calculateScoring(2);
