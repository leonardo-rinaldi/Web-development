var numero;
var messaggio;

numero = 9;


if(numero > 10) {
    messaggio = "Hai inserito un numero maggiore di 10";
} else {
    messaggio = "Hai inserito un numero minore di 10";
}

document.write('<h2 class="messaggio">' + messaggio + '</h2>');
