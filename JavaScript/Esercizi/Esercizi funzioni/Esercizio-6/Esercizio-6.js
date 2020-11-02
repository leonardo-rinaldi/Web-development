/*
  Conta il numero
  Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.
  Esempi:
    Input: numero = 9
    Output: 1 cifra
    Input: numero = 245
    Output: 3 cifre
*/

function contaCifre(n) {
   var num = n.toString();
   var lunghezza = num.length;
   return lunghezza;
}

document.write(contaCifre(245));
document.write("<br>");
document.write(contaCifre(9));

