/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.
*/

function numeroCasuale(n) {
    var numeroRandom = Math.floor((Math.random() * (n-1) + 1));
    return numeroRandom;
}

document.write(numeroCasuale(10));