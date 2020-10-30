/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.
  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]
*/

var primoArray = [];
var secondoArray = [];
var terzoArray = [];
var operazione = "addizione";

function riempiArray(array) {    
    for(var i = 0; i < 10; i++) {
        var valore = Math.floor((Math.random() * (10-1) + 1));
        array[i] = valore;
    }
}

function visualizzaArray(array) {
    document.write("[");
    for(var i = 0; i < 10; i++) {
        document.write(array[i] + " ");
    }
    document.write("]");
}

function addizione() {
    for(var i = 0; i < 10; i++) {
        terzoArray[i] = primoArray[i] + secondoArray[i];
    }
}

function sottrazione() {
    for(var i = 0; i < 10; i++) {
        terzoArray[i] = primoArray[i] - secondoArray[i];
    }
}

function moltiplicazione() {
    for(var i = 0; i < 10; i++) {
        terzoArray[i] = primoArray[i] * secondoArray[i];
    }
}

function divisione() {
    for(var i = 0; i < 10; i++) {
        terzoArray[i] = primoArray[i] / secondoArray[i];
    }
}

function scegliOperazione() {
    switch(operazione) {
        case "addizione":
            addizione();
            break;
        case "sottrazione":
            sottrazione();
            break;
        case "moltiplicazione":
            moltiplicazione();
            break;
        case "divisione":
            divisione();
            break;
    }
}


riempiArray(primoArray);
riempiArray(secondoArray);
document.write("Primo array: ");
visualizzaArray(primoArray);
document.write("<br>" + "Secondo array: ")
visualizzaArray(secondoArray);
document.write("<br>" + operazione + ":")
scegliOperazione();
visualizzaArray(terzoArray);