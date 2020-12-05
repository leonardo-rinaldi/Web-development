/*
    Gestione delle eccezioni in JavaScript
*/

function divisione(x, y) {
    var risultato = 0;
    try {
        if(y != 0) {
            risultato = x / y;
        } else {
            throw new Error("divisione() non può eseguire una divisione per 0");
        }
    } catch(e) {
        console.error(e.name + " " + e.message);
    }
    return risultato;
}

var risultatoDivisione = divisione(4, 0);
console.log(risultatoDivisione);