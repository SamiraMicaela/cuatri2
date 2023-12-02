class Televisor {
    private prendido: boolean;
    private canal: number;
    private volumen: number;

    constructor(prendido:boolean,canal:number,volumen:number) {
        this.prendido = false;
        this.canal = 0;
        this.volumen = 0;
    }

    prender(): void {
        this.prendido = true;
        this.canal = 1;
    }

    apagar(): void {
        this.prendido = false;
    }

    verificarEstado(): void {
        if (this.prendido) {
            console.log("El televisor está prendido");
        } else {
            console.log("El televisor no funciona si no está prendido");
        }
    }

    subirCanal(): void {
        if (this.prendido) {
            if (this.canal === 99) {
                this.canal = 1;
            } else {
                this.canal++;
            }
        }
    }

    bajarCanal(): void {
        if (this.prendido) {
            if (this.canal === 1) {
                this.canal = 99;
            } else {
                this.canal = this.canal - 1;
            }
        }
    }

    cambiarCanal(canalXd: number): void {
        if (this.prendido) {
            if (canalXd > 1 && canalXd < 99) {
                this.canal = canalXd;
            }
        }
    }

    subirVolumen(): void {
        if (this.prendido) {
            if (this.volumen < 100) {
                this.volumen++;
            }
        }
    }

    bajarVolumen(): void {
        if (this.prendido) {
            if (this.volumen > 0) {
                this.volumen = this.volumen - 1;
            }
        }
    }

    info(): void {
        if (this.prendido) {
            const currentDate = new Date();
            console.log(`Volumen ${this.volumen}, Canal ${this.canal},Hora ${currentDate.toLocaleTimeString()}`);
        }
    }
}


const tv1 = new Televisor(true,12,23);
tv1.info();
 