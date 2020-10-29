/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola
  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".
*/

var numeriCasuali = [];
var numeriScelti = [14, 22, 80, 44, 50, 55, 77, 39, 30, 98];

/*
    Riempie l'array di numeri casuali
*/

function riempiArrayCasuale() {
    for(var i = 0; i < 10; i++) {
        var numeroGenerato = Math.floor((Math.random() * 90) + 1);
        numeriCasuali[i] = numeroGenerato;
    }
}

/*
    Permette di visualizzare l'array riempito di 
    numeri casuali
*/

function visualizzaArray() {
    document.write("[");
    for(var i = 0; i < numeriCasuali.length; i++) {
        document.write(numeriCasuali[i] + " ");
    }
    document.write("]");
}

/*
    Verifica la presenza dei valori dell'array "numeriScelti"
    nll'array dei numeri casuali generati.
*/

function verificaPresenza() {
    var numeroPresenza = 0;

    for(var i = 0; i < 10; i++) {
        for(var z = 0; z < 10; z++) {
            if(numeriScelti[i] == numeriCasuali[z]) {
                numeroPresenza++;
            } else {
                continue;
            }
        }
    }
    return numeroPresenza;
}

/*
    In base al numero di valori uguali mostro una risposta
*/

function restituisciRisultato() {
    var presenza = verificaPresenza();

    switch(presenza) {
        case 1:
            document.write("1 numero uguali");
            break;
        case 2:
            document.write("2 numeri uguali");
            break;
        case 3:
            document.write("3 numeri uguali");
            break;
        case 4:
            document.write("4 numeri uguali");
            break;
        case 5:
            document.write("5 numeri uguali");
            break;
        case 6:
            document.write("6 numeri uguali");
            break;
        case 7:
            document.write("7 numeri uguali");
            break;
        case 8:
            document.write("8 numeri uguali");
            break;
        case 9:
            document.write("9 numeri uguali");
            break;
        case 10:
            document.write("tutti i numeri uguali");
            break;
        default:
            document.write("Mi dispiace, hai perso!")
    }
}

riempiArrayCasuale();
visualizzaArray();
document.write("<br>");
restituisciRisultato();
