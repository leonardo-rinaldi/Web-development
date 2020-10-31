/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.
  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4
  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.
*/

function restituisciMaggiore(a, b, c) {
    var array = [a, b, c];
    var maggiore = 0;

    for(var i = 0; i < array.length; i++) {
        if(array[i] > maggiore) {
            maggiore = array[i];
        }
    }
    return maggiore;
}

function restituisciMinore(a, b, c) {
    var array = [a, b, c];
    var minore = 0;

    for(var i = 0; i < array.length; i++) {
        if(array[i] < minore) {
            minore = array[i];
        }
    }
    return minore;
}

function restituisciMaggioreArray(array) {
    var maggiore = 0;

    for(var i = 0; i < array.length; i++) {
       if(array[i] > maggiore) {
        maggiore = array[i];
       }
    }
    return maggiore;
}

function restituisciMinoreArray(array) {
    var minore = 0;

    for(var i = 0; i < array.length; i++) {
        if(array[i] < minore) {
            minore = array[i];
        }
    }
    return minore;
}

var array = [1, 4, 40, -10, -2, 2, 8, -4, 5];

document.write("Maggiore: ");
document.write(restituisciMaggiore(1, -10, 4));
document.write("<br>");
document.write("Minore: ");
document.write(restituisciMinore(1, -10, 4));
document.write("<br>");
document.write("Maggiore nell'array: ");
document.write(restituisciMaggioreArray(array));
document.write("<br>");
document.write("Minore nell'array: ");
document.write(restituisciMinoreArray(array));