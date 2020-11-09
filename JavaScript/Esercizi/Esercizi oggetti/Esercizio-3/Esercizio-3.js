/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.
  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrezione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.
  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.
  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applicare l'operazione.
*/

function Contatto(nome, cognome, numeroTelefonico) {
    this.nome = nome;
    this.cognome = cognome;
    this.numeroTelefonico = numeroTelefonico;

    this.visualizzaContatto = function() {
        document.write("Nome: " + this.nome + "<br>");
        document.write("Cognome: " + this.cognome + "<br>");
        document.write("Numero: " + this.numeroTelefonico + "<br>");
        document.write("<br>");
    }
}

/*
    Array di oggetti Contatto
*/

var rubrica = [
    new Contatto("Marco", "Colussi", "3478911751"),
    new Contatto("Alessia", "Bertoluzzi", "9876544329"),
    new Contatto("Martina", "Nori", "4356411765"),
]

/*
    Visualizza tutti i contatti in rubrica
*/

function visualizzaRubrica(rubrica) {
    for(var i = 0; i < rubrica.length; i++) {
        rubrica[i].visualizzaContatto();
    }
}

/*
    Creo un nuovo contatto e lo inserisce nella rubrica
*/

function nuovoContatto(nome, cognome, numeroTelefonico) {
    rubrica[rubrica.length] = new Contatto(nome, cognome, numeroTelefonico);
}

/*
    Modifica un contatto trovandolo tramite l'indice
*/

function modificaContatto(indice, nome, cognome, numeroTelefonico) {
    rubrica[indice].nome = nome;
    rubrica[indice].cognome = cognome;
    rubrica[indice].numeroTelefonico = numeroTelefonico;
}

/*
    Cancella un contatto esistente in rubrica
*/

function cancellaContatto(indice) {
    rubrica.splice(indice, 1);  //il secondo parametro è il numero di elementi da eliminare
}

/*
    Cerca il contatto in base al suo nome e lo mostra
*/

function cercaContatto(nome) {
    for(var i = 0; i < rubrica.length; i++) {
        if(rubrica[i].nome == nome) {
            document.write("Il contatto cercato è:" + "<br>")
            rubrica[i].visualizzaContatto();
        }        
    }
}

nuovoContatto("Leonardo", "Rinaldi", "3485434769");
visualizzaRubrica(rubrica);
modificaContatto(1, "Daniele", "Isino", "35174993711")
visualizzaRubrica(rubrica);
cancellaContatto(1);
visualizzaRubrica(rubrica);
cercaContatto("Leonardo")

