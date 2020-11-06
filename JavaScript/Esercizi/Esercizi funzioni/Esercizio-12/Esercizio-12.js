/*
  I primi numeri…primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.
  Esempio:
    Input: n = 5
    Output:
          TRUE
            2
            3
            5
            7
            11
*/

/*
    Controlla se il numero n inserito è primo.
*/

function controllaSePrimo(n) {
    var risultato = true;

    if(n == 1 || n == 2) {
        risultato = true;
    } else {
        for(var i = 2; i < n; i++) {
            if(n % i == 0) {
                risultato = false;
            }
        }
    }
    return risultato;
}


function stampaNumeriPrimi(n) {
    var i = 0;          //indice
    var valore = 2;     //valore iniziale
    while(i < n) {
        if(controllaSePrimo(valore)) {
            document.write("<br>");
            document.write(valore);
            i++;
            valore++;
        } else {
            valore++;
        }
    }
}

document.write(controllaSePrimo(30));
document.write("<br>");
stampaNumeriPrimi(5);
