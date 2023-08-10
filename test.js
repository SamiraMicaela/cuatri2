class televisor{
    constructor(){
        this.prendido = false; 
        this.canal = 1;
        this.volumen = 0;
    }

    prender(){
        this.prendido= true;
    }
    subirCanal(){
        this.canal ++;
    }
    bajarCanal(){
        this.canal = this.canal -1;
    }
    cammmbiarCanal(){
        this.canal 
    }

}

const teleXd = new televisor();
teleXd.prender();
teleXd.cambiar(78);
console.log(teleXd);