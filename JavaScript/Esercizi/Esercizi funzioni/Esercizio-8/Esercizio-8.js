/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.
  Esempio:
    Input : N = 123456, K = 3
    Output: 4
*/

function trovaCifra(n, k) {
    var cifra;
    var numero = n.toString();
    if(k >= numero.length) {
        cifra = 0;
    } else {
        cifra = numero.charAt(k);
    }
    return cifra;
}

document.write(trovaCifra(123456, 6));