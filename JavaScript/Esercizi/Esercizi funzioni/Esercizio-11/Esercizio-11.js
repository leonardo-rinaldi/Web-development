
/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B
*/

var A, B, N;

A = 15;
B = 10;
N = 20;

function calcolaDistanza(inizio, fine) {
  var contatore = 0;
  for(var i = inizio; i < fine; i++) {
    contatore++;
  }
  return contatore;
}

function trovaDistanza(a, b, n) {
  distanzaAN = calcolaDistanza(a, n);
  distanzaBN = calcolaDistanza(b, n);
  var risultato;

  if(distanzaAN == distanzaBN) {
    risultato = 0;
  } else if(distanzaBN < distanzaAN) {
    risultato = 1;
  } else {
    risultato = -1;
  }
  return risultato;
}

document.write(trovaDistanza(A, B, N));