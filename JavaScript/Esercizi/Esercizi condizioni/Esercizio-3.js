/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.
  Esempio:
    Input: v = 29
    Output: Ottimo
*/

var v = 28;
var risposta;

if (v == 30) {
    risposta = "eccellente";
} else if (v >= 27 && v <= 29) {
    risposta = "ottimo" ;
} else if (v >= 24 && v < 27) {
    risposta = "distinto";
} else if (v >= 21 && v < 24 ) {
    risposta = "buono";
} else if (v >= 18 && v < 21){
    risposta = "sufficiente";
} else if (v <= 18)  {
    risposta = "insufficiente";
}

console.log(risposta);