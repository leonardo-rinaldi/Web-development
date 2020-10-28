/*
  Che giorno è oggi?
  Scrivi un programma che dato un numero intero compreso tra 1 a 7
  visualizzi il corrispondente giorno della settimana. Sapendo che:
    1 = lunedì
    2 = martedì
    3 = mercoledì
    ...
    7 = domenica
  Utilizza il costrutto Switch-case e prevedi anche il caso in cui il valore immesso non sia valido
  (nel caso stampare un messaggio di errore a tua scelta).
  Esempi:
    Input: numero = 6
    Output: "Sabato"
    Input: numero = 10
    Output: "Errore! Giorno della settimana non valido!"
  Variante:
  Scrivere una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.
*/

var giorno = 4;

function controllaGiorno(giorno) {
    var risposta;
    switch(giorno) {
        case 1:
            risposta = "Lunedì";
            break;
        case 2:
            risposta = "martedì";
            break;
        case 3:
            risposta = "mercoledì";
            break;
        case 4:
            risposta = "giovedì";
            break;
        case 5:
            risposta = "venerdì";
            break;
        case 6:
            risposta = "sabato";
            break;
        case 7:
            risposta = "domenica";
            break;
        default:
            risposta = "Errore! Giorno della settimana non valido!"
    }
    return risposta;
}

var risposta = controllaGiorno(giorno);
console.log(risposta);

var mese = 2;

function controllaMese(mese) {
    var rispostaMese;
    switch(mese) {
        case 1:
            ripostaMese = "Gennaio";
            break;
        case 2:
            rispostaMese = "Febbraio";
            break;
        case 3:
            rispostaMese = "Marzo";
            break;
        case 4:
            rispostaMese = "Aprile";
            break;
        case 5:
            rispostaMese = "Maggio";
            break;
        case 6:
            rispostaMese = "Giugno";
            break;
        case 7:
            rispostaMese = "Luglio";
            break;
        case 8:
            rispostaMese = "Agosto";
            break;
        case 9:
            rispostaMese = "Settembre";
            break;
        case 10:
            rispostaMese = "Ottobre";
            break;
        case 11:
            rispostaMese = "Novembre";
            break;
        case 12:
            rispostaMese = "Dicembre";
            break;
        default:
            rispostaMese = "Errore! Mese non valido!"
    }
    return rispostaMese;
}

var rispostaMese = controllaMese(mese);
console.log(rispostaMese);