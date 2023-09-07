class televisor{
    constructor(){
        this.prendido = false; 
        this.canal = 0;
        this.volumen = 0;
    }

    prender(){
        this.prendido= true;
        this.canal = 1;
    }
    apagar(){
        this.prendido = false;
    }
    verificarEstado(){
        if (this.prendido){
            console.log("El televisor esta prendido");
        }else{
            console.log("El televisor no funciona si no esta prendido");
        }   
    }

    subirCanal(){  
        if(this.prendido){
            if (this.canal===99){
                this.canal = 1;
            }else{
                this.canal ++;
            }
        }
    }
    bajarCanal(){
        if(this.prendido){
            if(this.canal ===1){
                this.canal = 99;
            }else{
                this.canal = this.canal -1;
            }
        }    
    }
    cambiarCanal(canalXd){
        if(this.prendido){
            if(canalXd >1 && canalXd <99){
                this.canal = canalXd;
            }
        }
    }

    subirVolumen(){
        if(this.prendido){
            if(this.volumen <100){
             this.volumen ++;
            }
        }
    }
    bajarVolumen(){
        if(this.prendido){
            if(this.volumen>0){
                this.volumen = this.volumen -1;
            }
        } 
    }
    info(){
        if(this.prendido){
            console.log(`Volumen ${this.volumen},Canal ${this.canal},hora ${currentDate.toLocaleTimeString()} `);
        }
    }
    
}

const teleXd = new televisor();
teleXd.prender();
teleXd.subirVolumen();
teleXd.subirVolumen();
teleXd.subirVolumen();
teleXd.cambiarCanal(45);
teleXd.verificarEstado();
teleXd.info();
//console.log(teleXd);