var altezza;
var larghezza;
var titolo;
var ultimaModifica;
var url;
var dominio;



altezza = "Altezza finestra: " + window.innerHeight;  //altezza della finestra
larghezza = "Larghezza finestra: " + window.innerWidth;   //larghezza della finestra
titolo = "Titolo: " + document.title;                     //titolo del documento 
ultimaModifica = "Ultima modifica: " + document.lastModified;   //data ultima modifica della pagina
url = "URL: " + document.URL;   //url della pagina
dominio = "Dominio: " + document.domain;    //domionio della pagina

var elAltezza = document.getElementById("info-altezza");
elAltezza.textContent = altezza;

var elLarghezza = document.getElementById("info-larghezza");
elLarghezza.textContent = larghezza;

var elTitolo = document.getElementById("titolo");
elTitolo.textContent = titolo;

var elUltimaModifica = document.getElementById("ultimaModifica");
elUltimaModifica.textContent = ultimaModifica;

var elUrl = document.getElementById("url");
elUrl.textContent = url;

var elDominio = document.getElementById("domain");
elDominio.textContent = dominio;

alert("Url: " + window.location);   //apre una finestra di allerta

window.open("https://www.leonardorinaldi.io");  //apre un nuovo tab al link indicato

