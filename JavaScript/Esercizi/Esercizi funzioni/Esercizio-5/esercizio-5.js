/*
  Indovina il giorno
  Scrivi un programma con due funzioni, la prima prende in ingresso un intero e verifica se sia compreso nel range da 1 a 7.
  Se è compreso, la funzione restituirà TRUE, se non è compreso restituirà FALSE.
  La seconda funzione:
  - nel caso la prima restituisca TRUE visualizza il giorno della settimana corrispondente,
    considerando la seguente corrispondenza:
        1 = Lunedì
        ...
        7 = Domenica
  - nel caso il giorno non sia compreso nel range, la funzione dovrà restituire un messaggio d'errore simile a questo: 'Peccato, non posso indovinare il giorno.'
*/

function controllaRange(n) {
    var risultato;
    if(n >= 1 && n <= 7) {
        risultato = true;
    } else {
        risultato = false;
    }
    return risultato;
}

function visualizzaGiorno(n) {
    if(controllaRange(n)) {
        scegliGiorno(n);
    } else {
        document.write("Peccato, non posso indovinare il giorno.");
    }
}

function scegliGiorno(n) {
    switch(n) {
        case 1:
            document.write("Lunedì");
            break;
        case 2:
            document.write("Martedì");
            break;
        case 3:
            document.write("Mercoledì");
            break;
        case 4:
            document.write("Giovedì");
            break;
        case 5:
            document.write("Venerdì");
            break;
        case 6:
            document.write("Sabato");
            break;
        case 7:
            document.write("Domenica");
            break;
    }
}

var numero = 6;
visualizzaGiorno(numero);