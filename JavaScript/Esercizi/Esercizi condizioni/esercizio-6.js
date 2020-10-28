/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.
  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia
    Input: scelta = 7
    Output: Dolce non disponibile
*/

var scelta = 2;
var dolce;

switch(scelta) {
    case 1:
        dolce = "Hai scelto il tiramisù";
        break;
    case 2:
        dolce = "Hai scelto la torta della nonna";
        break;
    case 3:
        dolce = "Hai scelto la cheesecake alla nutella";
        break;
    case 4:
        dolce = "Hai scelto la macedonia";
        break;
    default:
        dolce = "Dolce non disponibile";
}

console.log(dolce);