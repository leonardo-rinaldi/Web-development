/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.
  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0
*/

function contaAllaRovescia(n) {
    for(var i = n - 1; i >= 0; i--) {
        document.write(i);
        document.write("<br>");
    }
}

var n = 5;
contaAllaRovescia(n);