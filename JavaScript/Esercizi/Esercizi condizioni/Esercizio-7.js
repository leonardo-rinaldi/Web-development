/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.
  Esempi:
    Input: numero = 63
    Output: 1
    Input: numero = 24
    Output: 0
*/

var numero = 24;
var risposta;

if(numero % 2 == 0) {
    risposta = 0;
} else {
    risposta = 1;
}

console.log(risposta);