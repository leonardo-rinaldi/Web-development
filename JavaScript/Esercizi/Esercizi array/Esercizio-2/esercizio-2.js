/*
  Tanti numeri
  Scrivi un programma che dato un array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.
  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]
  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
*/

var array = [3, 5, 10, 2, 8];

/*
    Calcola e restituisce media di tutti i valori presenti nell'array
*/

function calcolaMedia() {
    var media = 0;
    for(var i = 0; i < array.length; i++) {
        media = media + array[i];
    }
    return media / array.length;
}

var mediaOttenuta = calcolaMedia();

/*
    Trova i valori minori della media e li restituisce all'interno di un
    nuovo array.
*/

function calcolaValoriMinori() {
    var arrayValoriMinori = [];
    var indice = 0;

    for(var i = 0; i < array.length; i++) {
        if(array[i] < mediaOttenuta) {
            arrayValoriMinori[indice] = array[i];
            indice++;
        }
    }
    return arrayValoriMinori;
}

/*
    Stampa l'array contenente i valori minori della media
*/

function getValoriMinori() {
    var valori = calcolaValoriMinori();

    document.write("[");
    for(var i = 0; i < valori.length; i++) {
        document.write(valori[i] + " ");
    }
    document.write("]");
}

document.write("Media ottenuta = " + mediaOttenuta + "<br>");
getValoriMinori();


