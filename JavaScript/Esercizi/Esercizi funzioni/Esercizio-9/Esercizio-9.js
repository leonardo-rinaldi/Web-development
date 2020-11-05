/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).
  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36
  Consigli:
  Puoi definire un array con i giorni di ogni mese e ciclarlo.
*/

function trovaNumeroGiorni(giorno, mese) {
    var giorni = [31, 28, 31, 30, 31, 30, 31, 31, 31, 30, 31, 30, 31];
    var numeroGiorni = 0;

    for(var i = 0; i < mese - 1; i++) {
        numeroGiorni += giorni[i];
    }

    return numeroGiorni + giorno;
}

document.write(trovaNumeroGiorni(5, 2));
