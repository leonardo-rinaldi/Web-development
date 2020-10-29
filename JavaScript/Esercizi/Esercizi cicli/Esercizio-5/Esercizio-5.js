/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.
  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X
  
*/

var larghezza = 5;
var spazi = Math.floor(larghezza / 2);
var altezza = Math.ceil(larghezza / 2);
var larghezzaAttuale = 1;

/*
  Parte superiore
*/

for(var i = 0; i < altezza; i++) {

  for(var x = 0; x < spazi; x++) {
    document.write("&nbsp &nbsp");  //&nbsp rappresenta lo spazio vuoto
  }

  for(var z = 0; z < larghezzaAttuale; z++) {
    document.write("X");
  }
  spazi--;
  larghezzaAttuale+=2;  //la larghezza aumenta di 2 invece che di 1
  document.write("<br>");
}

/*
  Parte inferiore
*/

larghezzaAttuale -= 4;
spazi = 1;
for(var i = 0; i < altezza - 1; i++) {
  
  for(var y = spazi; y > 0; y--) {
    document.write("&nbsp &nbsp");  //&nbsp rappresenta lo spazio vuoto
  }

  for(var z = larghezzaAttuale; z > 0; z--) {
    document.write("X");
  }
  spazi++
  larghezzaAttuale-=2;
  document.write("<br>");
}





