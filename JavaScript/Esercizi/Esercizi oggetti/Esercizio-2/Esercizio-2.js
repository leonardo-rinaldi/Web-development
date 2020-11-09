/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).
  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"
*/

var day = 31;
var month = 12;
var year = 2018;
var correctDate;

function Date(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
}

function checkDate(day, month, year) {
    var monthResult = checkMonth(month);
    var dayResult = checkDay(day, month);

    if(monthResult && dayResult) {
        document.write("La data è valida!");
        correctDate = new Date(day, month, year);
    } else {
        document.write("La data non è valida");
    }
}

function checkMonth(month) {
    var result;
    if(month <= 12 && month >= 1) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

function checkDay(day, month) {
    var result;
    switch(month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if(day >= 1 && day <= 31) {
                result = true;
            }
            break;
        case 2:
            if(day >= 1 && day <= 28) {
                result = true;
            }
            break;
        case 4:
        case 6:
        case 8:
        case 11:
            if(day >= 1 && day <= 30) {
                result = true;
            }
            break;
        default:
            result = false;
    }
    return result;
}

function printDate(date) {
    document.write("<br>");
    document.write(date.day);
    document.write("/");
    document.write(date.month);
    document.write("/");
    document.write(date.year);
}

checkDate(day, month, year);
printDate(correctDate);