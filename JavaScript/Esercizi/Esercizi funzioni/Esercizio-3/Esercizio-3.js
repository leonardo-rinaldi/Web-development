/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.
  Esempio:
    Input: n = 5
    Output: 120
  Consigli:
  Il fattoriale è il prodotto dei numeri interi da 1 a n.
  Esempio: n = 5, fattoriale = 5*4*3*2*1 = 120
*/

function fattoriale(n) {
    var fattoriale = 1;

    for(var i = n; i > 0; i--) {
        fattoriale = fattoriale * i;
    }
    return fattoriale;
}

document.write(fattoriale(5));
document.write("<br>");

/*
    Fattoriale ricorsivo
*/

function fattorialeRicorsivo(n) {
    var fattoriale = n;

    if(n == 1) {
        fattoriale = fattoriale * 1;
    } else {
        fattoriale = fattoriale * fattorialeRicorsivo(n - 1);
    }
    return fattoriale;
}

var risultato = fattorialeRicorsivo(5);
document.write(risultato);