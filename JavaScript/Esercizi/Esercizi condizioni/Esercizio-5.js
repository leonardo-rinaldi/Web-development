/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.
  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    potenza
    media
  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11
    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5
  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).
*/

var primoValore = 5;
var secondoValore = 6;
var operazione = "media";
var risultato;

function somma() {
    return primoValore + secondoValore;
}

function sottrazione() {
    return primoValore - secondoValore;
}

function moltiplicazione() {
    return primoValore * secondoValore;
}

function divisione() {
    return primoValore / secondoValore;
}

function media() {
    var media = (primoValore + secondoValore) / 2;
    return media;
}

function potenza() {
    return Math.pow(primoValore, secondoValore);
}

switch(operazione) {
    case "somma":
        risultato = somma();
        break;
    case "sottrazione":
        risultato = sottrazione();
        break;
    case "moltiplicazione":
        risultato = moltiplicazione();
        break;
    case "divisione":
        risultato = divisione();
        break;
    case "media":
        risultato = media();
        break;
    case "potenza":
        risultato = potenza();
        break;
    default:
        console.log("Operazione non esistente");
}

console.log(risultato);