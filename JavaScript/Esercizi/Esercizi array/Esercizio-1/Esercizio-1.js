/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.
  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]
  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.
*/

var dimensioneArray = 5;
var array = [];

function riempiArray() {
    for(var i = 0; i < dimensioneArray; i++) {
        var valoreCasuale = Math.floor((Math.random() * 10) + 1);
        array[i] = valoreCasuale;
     }
}

function visualizzaArray() {
    document.write("Array  non inverito:" + "<br>")
    document.write("[");
    for(var z = 0; z < array.length; z++) {
        document.write(array[z] + " ");
    }
    document.write("]");
}

function arrayInvertito() {
    document.write("Array invertito:" + "<br>");
    document.write("[");
    for(var i = array.length - 1; i >= 0; i--) {
        document.write(array[i] + " ");
    }
    document.write("]");
}

riempiArray();
visualizzaArray();
document.write("<br>");
arrayInvertito();
