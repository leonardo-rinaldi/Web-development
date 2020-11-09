/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.
  Consigli:
  Puoi usare un array come base per salvare le automobili.
*/

/*
    Array di oggetti
*/

var cars = [
    {
        brand: "Audi",
        model: "A3"
    },
    {
        brand: "Mercedes",
        model: "Class A"
    },
    {
        brand: "Opel",
        model: "Corsa"
    },
    {
        brand: "Audi",
        model: "A7"
    }
]

function stampaModelli(brand) {
    for(var i = 0; i < cars.length; i++) {
        if(cars[i].brand == brand) {
            document.write(cars[i].model);
            document.write("<br>");
        }
    }
}

stampaModelli("Audi");