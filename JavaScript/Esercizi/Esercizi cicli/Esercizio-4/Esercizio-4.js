/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.
  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31
  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.
*/

var numeroGiorni = 31;
var giornoSettimana = 0;

function getGiorno(numero)  {
    var giorno;
    switch(numero) {
        case 0:
            giorno = "Lun";
            break;
        case 1:
            giorno = "Mar";
            break;
        case 2:
            giorno = "Mer";
            break;
        case 3:
            giorno = "Gio";
            break;
        case 4:
            giorno = "Ven";
            break;
        case 5:
            giorno = "Sab";
            break;
        case 6:
            giorno = "Dom";
            break;
    }
    return giorno;
}

for(var i = 1; i <= numeroGiorni; i++) {
    if(giornoSettimana <= 6) {
        document.write(getGiorno(giornoSettimana) + " " + i + "<br>");
    } else {
        giornoSettimana = 0;
        document.write(getGiorno(giornoSettimana) + " " + i + "<br>");
    }
    giornoSettimana++;
}

/*
    Variante
*/

var meseInserito = "Gennaio";

function getNumeroGiorni(mese) {
    var numeroGiorni;
    switch(mese) {
        case "Gennaio":
            numerogiorni = 31;
            break;
        case "Febbraio":
            numeroGiorni = 28;
            break;
        case "Marzo":
            numeroGiorni = 31;
            break;
        case "Aprile":
            numerogiorni = 30;
            break;
        case "Maggio":
            numerogiorni = 31;
            break;
        case "Giugno":
            numeroGiorni = 30;
            break;
        case "Luglio":
            numeroGiorni = 31;
            break;
        case "Agosto":
            numeroGiorni = 31;
            break;
        case "Settembre":
            numeroGiorni = 30;
            break;
        case "Ottobre":
            numeroGiorni = 31;
            break;
        case "Novembre":
            numeroGiorni = 30;
            break;
        case "Dicembre":
            numerogiorni = 31;
            break;
        default:
            numeroGiorni = 0;
    }
    return numerogiorni;
}

var giorniMese = getNumeroGiorni(meseInserito);
document.write("Il mese inserito ha: " + giorniMese + " giorni");