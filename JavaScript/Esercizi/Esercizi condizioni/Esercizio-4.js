/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.
  Esempi:
    Input: numero = 9
    Output: 1 cifra
    Input: numero = 245
    Output: 3 cifre
*/

var numero = 40;
var numeroCifre;

function contaCifre() {
    if(numero < 10) {
        numeroCifre = "1 cifra";
    } else if(numero >= 10 && numero < 100) {
        numeroCifre = "2 cifre";
    } else if(numero >= 100 && numero < 1000) {
        numeroCifre = "3 cifre";
    } else {
        numeroCifre = "4 cifre";
    }
}

contaCifre();
console.log(numeroCifre);