/*
    Calcolatrice JavaScript V1.0
*/

var calcolatrice = new Object();

calcolatrice.primoNumero = 0;
calcolatrice.secondoNumero = 0;

calcolatrice.somma = function() {
    return this.primoNumero + this.secondoNumero;
};

calcolatrice.sottrazione = function() {
    return this.primoNumero - this.secondoNumero;
};

calcolatrice.moltiplicazione = function() {
    return this.primoNumero * this.secondoNumero;
};

calcolatrice.divisione = function() {
    return this.primoNumero / this.secondoNumero;
};

calcolatrice.primoNumero = 4;
calcolatrice.secondoNumero = 2;

console.log(calcolatrice.somma());
console.log(calcolatrice.sottrazione());
console.log(calcolatrice.moltiplicazione());
console.log(calcolatrice.divisione());