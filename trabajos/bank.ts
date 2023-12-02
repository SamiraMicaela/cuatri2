class BankAccount {
    private owner : string;    //dueño
    private balance: number;    //balance
    private accountType:string;   //tipo de cuenta

    constructor(owner:string,accountType:string){
        this.owner=owner;
        this.balance=0.0;
        this.accountType=accountType;
    }

    deposit(amount: number): void{
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposito de $${amount} realizado con exito.`);
        }else{
            console.log("El monto del deposito debe ser mayor que cero.");
        }
    };
    
    withdraw(amount: number): void{
        if(this.balance >= amount){
            this.balance -= amount;
            console.log(`Retiro de $${amount} realizado con exito.`)
        } else {
            console.log("El monto del retiro debe ser mmayor a cero.");
        }
    };

    getBalance(): number{
        return this.balance
    };

    getOwner(): string{
        return this.owner;
    }
    
    getAccountType(): string{
        return this.accountType;
    }

    toString(): string{  //imprime inmformacion de lña cuenta
        return `Titular: ${this.owner}, tipo de cuenta: ${this.accountType}, saldo actual $${this.balance}`;
    }
}

const cuenta1 = new BankAccount("Samira Bava","Cuenta de ahorro");
cuenta1.deposit(10000);
cuenta1.withdraw(500);
console.log(`saldo actual: $${cuenta1.getBalance()}`);