/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.
  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"
  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()
*/

var giocatore1 = 20;
var giocatore2 = 40;
var numeroRandom = Math.floor((Math.random() * (100-1) + 1));   //genera un numero casuale da 1 a 100
var risposta;

if(numeroRandom == giocatore1) {
    risposta = "Il giocatore 1 ha azzeccato il numero casuale";
} else
    if(numeroRandom == giocatore2) {
        risposta = "Il giocatore 2 ha azzeccato il numero casuale";
    } else {
        valorePiùVicino();
    }

function valorePiùVicino() {
    if(giocatore1 < numeroRandom && giocatore2 > numeroRandom) {
        risposta = "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!";
    } else
        if(giocatore2 < numeroRandom && giocatore1 > numeroRandom) {
            risposta = "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più!";
        } else {
            risposta = "Nessuno dei due ha azzeccato il numero casuale"
        }
}

console.log("Numero random: " + numeroRandom);
console.log(risposta);
