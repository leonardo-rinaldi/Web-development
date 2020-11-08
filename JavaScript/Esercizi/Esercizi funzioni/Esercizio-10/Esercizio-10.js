/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.
  Esempio:
    Input: i topi non avevano nipoti
    Output: TRUE
  Consigli:
  Puoi eliminare spazi e segni di punteggiatura usando le espressioni regolari o il metodo del tipo stringa chiamato replace,
  in questo modo: str.replace(/\W/g, "").
*/

function controllaSePalindroma(stringa) {
    var stringaRivoltata = giraStringa(stringa);
    stringa = rimuoviSpazi(stringa);
    var risultato;

    if(stringa == stringaRivoltata) {
        risultato = true;
    } else {
        risultato = false;
    }
    return risultato;
}

/*
    Scrive la stringa da destra a sinistra e rimuove gli spaz
*/

function giraStringa(stringa) {
    var stringaRivoltata = "";

    for(var i = stringa.length; i >= 0; i--) {
            stringaRivoltata += stringa.charAt(i);
    }
    stringaRivoltata = rimuoviSpazi(stringaRivoltata);
    return stringaRivoltata;
}

/*
    Rimuovo gli spazi dalla stringa
*/

function rimuoviSpazi(stringa) {
    var stringaSenzaSpazi = "";
    
    for(var i = 0; i < stringa.length; i++) {
        if(stringa.charAt(i) == " ") {
            continue;
        } else {
            stringaSenzaSpazi += stringa.charAt(i);
        }
    }
    return stringaSenzaSpazi;
}


document.write(controllaSePalindroma("i topi non avevano nipoti"))
