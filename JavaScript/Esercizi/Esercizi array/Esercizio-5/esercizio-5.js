
/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -2, -4]
  Variante:
  Prova ad ordinali in modo crescente.
*/

var numeri = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

function selectionSortCrescente(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length; j++) {
      reverse(i, j, array);
    }
  }
}

function selectionSortDecrescente(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length; j++) {
      reverse(j, i, array);
    }
  }
}

function reverse(i, j, array) {
  if(array[i] < array[j]) {
    var temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
}

function visualizzaArray(array) {
  document.write("[")
  for(var i = 0; i < array.length; i++) {
    document.write(array[i] + " ");
  }
  document.write("]");
}

selectionSortCrescente(numeri);
document.write("crescente = ")
visualizzaArray(numeri);
document.write("<br>");
selectionSortDecrescente(numeri);
document.write("decrescente =");
visualizzaArray(numeri);