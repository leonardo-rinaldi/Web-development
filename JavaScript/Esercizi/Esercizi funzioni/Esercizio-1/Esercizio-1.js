/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.
  Esempi:
    Input: n = 2, m = 3
    Output: FALSE
    Input: n = 2, m = '2'
    Output: FALSE
    Input: n = 2, m = 2
    Output: TRUE
*/

function controllaArgomenti(n, m) {
    var risultato;
    if(n === m) {
        risultato = true;
    } else {
        risultato = false;
    }
    return risultato;
}

document.write(controllaArgomenti(2, 3));
document.write("<br>");
document.write(controllaArgomenti(2, "2"));
document.write("<br>");
document.write(controllaArgomenti(2, 2));