class Calculadora{
   public suma (a:number,b:number){
    return a + b;
    //this.resultado(resultado); 
   };
   public resta(a:number,b:number){
    return a - b;
    //this.resultado(resultado); 
   };
   public multiplicacion(a:number,b:number){
     return a * b;
    //this.resultado(resultado); 
   };
   public division(a:number,b:number){
    return a / b;
    //this.resultado(resultado); 
   };
   public resultado(resultado:number){
    //return resultado;
   };
 
}

const cal01 = new Calculadora ();

console.log(cal01.suma(4,5));
console.log(cal01.resta(4,4));



//realizarsuma
//realizarresta
//realizarmul
//realizardiv
//calcular