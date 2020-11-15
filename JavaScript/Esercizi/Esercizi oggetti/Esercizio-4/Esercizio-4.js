/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso
  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti e uno per i fascicoli.
  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto
  Nel carcere di Gotham City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.
  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.
*/

function criminale(nome, cognome, età) {
    this.nome = nome;
    this.cognome = cognome;
    this.età = età;
}

function guardia(nome, cognome, età) {
    this.nome = nome;
    this.cognome = cognome;
    this.età = età;
}

function fascicolo(identificativo, dataCarcerazione, dataScarcerazione, crimine) {
    this.identificativo = identificativo;
    this.dataCarcerazione = dataCarcerazione;
    this.dataScarcerazione = dataScarcerazione;
    this.crimine = crimine;
}

var criminali = [
    new criminale("Mario", "Zavardi", 24),
    new criminale("Paolo", "Nucchi", 48),
    new criminale ("Martina", "Cuochi", 32)
];

var guardie = [
    new guardia("Antonio", "Zuch", 25),
    new guardia("Marco", "Martini", 42),
    new guardia("Elisa", "Rucco", 24)
];

var fascicoli = [
    new fascicolo("Mario", "12/10/92", "", "Omicidio"),
    new fascicolo("Paolo", "14/11/20", "", "Stupro"),
    new fascicolo("Martina", "09/02/99", "12/10/03", "Omicidio")
];

/*
    Permette di aggiungere un nuovo oggetto guardia
    all'array di guardie.
*/

function assumiGuardia(nome, cognome, età) {
    guardie[guardie.length] = new guardia(nome, cognome, età);
}

/*
    Permette di aggiungere un nuovo oggetto criminale
    all'array di criminali.
*/

function schedaCarcerati(nome, cognome, età) {
    criminali[criminali.length] = new criminale(nome, cognome, età);
}

/*
    Permette di aggiungere un nuovo oggetto fascicolo
    all'array di fascicoli.
*/

function aggiungiFascicolo(identificativo, dataCarcerazione, dataScarcerazione, crimine) {
    fascicoli[fascicoli.length] = new fascicolo(identificativo, dataCarcerazione, dataScarcerazione, crimine);
}

/*
    Permette di visualizzare l'array di criminali
*/

function visualizzaCriminali() {
    document.write("Criminali:");
    document.write("<br>");
    for(var i = 0; i < criminali.length; i++) {
        document.write("Nome: " + criminali[i].nome);
        document.write("<br>");
        document.write("Cognome: " + criminali[i].cognome);
        document.write("<br>");
        document.write("Età: " + criminali[i].età);
        document.write("<br>");
    }
    document.write("<br>");
}

/*
   Permette di visualizzare l'array di guardie
*/

function visualizzaGuardie() {
    document.write("Guardie:");
    document.write("<br>");
    for(var i = 0; i < guardie.length; i++) {
        document.write("Nome: " + guardie[i].nome);
        document.write("<br>");
        document.write("Cognome: " + guardie[i].cognome);
        document.write("<br>");
        document.write("Età: " + guardie[i].età);
        document.write("<br>");
    }
    document.write("<br>");
}

/*
    Permette di viualizzare l'array di fascicoli
*/

function visualizzaFascicoli() {
    document.write("Fascicoli:");
    document.write("<br>");
    for(var i = 0; i < fascicoli.length; i++) {
        document.write("Identificativo: " + fascicoli[i].identificativo);
        document.write("<br>");
        document.write("Data Carcerazione: " + fascicoli[i].dataCarcerazione);
        document.write("<br>");
        document.write("Data scarcerazione: " + fascicoli[i].dataScarcerazione);
        document.write("<br>");
        document.write("crimine commesso: " + fascicoli[i].crimine);
        document.write("<br>");

    }
    document.write("<br>");
}

/*
    Permette di cercare un fascicolo utilizzando il
    nome del detenuto.
*/

function ricercaFascicoli(nomeDetenuto) {
    for(var i = 0; i < fascicoli.length; i++) {
        var nome = fascicoli[i].identificativo;
        if(nome == nomeDetenuto) {
            document.write("Identificativo: " + fascicoli[i].identificativo);
            document.write("<br>");
            document.write("Data carcerazione: " + fascicoli[i].dataCarcerazione);
            document.write("<br>");
            document.write("Data scarceraione: " + fascicoli[i].dataScarcerazione);
            document.write("<br>");
            document.write("Crimine commesso: " + fascicoli[i].crimine);
        }
    }
    document.write("<br>");
}

/*
    Elimina un detenuto dall'array di criminali e
    aumenta il contatore dei detenuti evasi.
*/

function evasioneDetenuto(nome) {
    for(var i = 0; i < criminali.length; i++) {
        var nomeDetenuto = criminali[i].nome;
        if(nomeDetenuto == nome) {
            numeroDetenutiDeceduti++;
            criminali.splice(i, i);
        }
    }
}

/*
    Elimina un detenuto dall'array di criminali e
    aumenta il contatore dei detenuti deceduti.
*/

function morteDetenuto(nome) {
    for(var i = 0; i < criminali.length; i++) {
        var nomeDetenuto = criminali[i].nome;
        if(nomeDetenuto == nome) {
            numeroDetenutiEvasi++;
            criminali.splice(i, i);
        }
    }
}


var numeroDetenutiEvasi = 0;
var numeroDetenutiDeceduti = 0;

visualizzaCriminali();
visualizzaGuardie();
visualizzaFascicoli();

ricercaFascicoli("Martina");

document.write("<br>");
document.write("Numero guardie: " + guardie.length);
document.write("<br>");
document.write("Numero detenuti: " + criminali.length);
document.write("<br>");
document.write("Detenuti evasi: " + numeroDetenutiEvasi);
document.write("<br>");
document.write("Detenuti deceduti: " + numeroDetenutiDeceduti);
document.write("<br>");

evasioneDetenuto("Mario");
morteDetenuto("Paolo");
assumiGuardia("Marco", "Castello", 30);

document.write("<br>");
document.write("Numero guardie: " + guardie.length);
document.write("<br>");
document.write("Numero detenuti: " + criminali.length);
document.write("<br>");
document.write("Detenuti evasi: " + numeroDetenutiEvasi);
document.write("<br>");
document.write("Detenuti deceduti: " + numeroDetenutiDeceduti);
document.write("<br>");
