class televisor{
    constructor(){
        this.prendido = false; 
        this.canal = 1;
        this.volumen = 0;
    }

    prender(){
        this.prendido= true;
    }
    apagar(){
        this.prendido = false;
    }

    subirCanal(){  
        if(this.prendido ===true){
            if (this.canal===99){
                this.canal = 1;
            }else{
                this.canal ++;
            }
        }else{
            mmessage: "Prendelo";
        }
    }
    bajarCanal(){
        if(this.prendido===true){
            if(this.canal ===1){
                this.canal = 99;
            }else{
                this.canal = this.canal -1;
            }
        }    
    }
    cambiarCanal(canalXd){
        if(this.prendido===true){
            if(canalXd >1 && canalXd <99){
                this.canal = canalXd;
            }
        }
    }

    subirVolumen(){
        if(this.prendido===true){
            if(this.volumen <100){
             this.volumen ++;
            }
        }
    }
    bajarVolumen(){
        if(this.prendido===true){
            if(this.volumen>0){
                this.volumen = this.volumen -1;
            }
       } 
    }
}

const teleXd = new televisor();
teleXd.apagar();
teleXd.cambiarCanal(12);
teleXd.subirCanal();
console.log(teleXd);