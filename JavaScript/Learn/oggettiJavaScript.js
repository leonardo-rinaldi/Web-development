/*
    Primo oggetto
*/ 

var auto = {
    modello: "Porsche",
    velocitàMassima: 280,
    velocitàAttuale: 50,

    aumentaVelocità: function() {
        return this.velocitàAttuale + 1;
    }
};

var velocitàAumentata = auto.aumentaVelocità();

console.log("Modello: " + auto.modello);
console.log("Velocità massima: " + auto.velocitàMassima);
console.log("Velocità attuale: " + velocitàAumentata);

/*
    Secondo oggetto
*/

var secondaAuto = new Object();

secondaAuto.modello = "BMW";
secondaAuto.velocitàMassima = 280;
secondaAuto.velocitàAttuale = 180;

secondaAuto.aumentaVelocità = function() {
    return this.velocitàAttuale + 1;
};

var velocitàSecondaAuto = secondaAuto.aumentaVelocità();

console.log("Modello: " + secondaAuto.modello);
console.log("Velocità massima: " + secondaAuto.velocitàMassima);
console.log("Velocità attuale: " + velocitàSecondaAuto);

/*
    Terzo oggetto
*/

function TerzaAuto(modello, velocitàMassima, velocitàAttuale) {
    this.modello = modello;
    this.velocitàMassima = velocitàMassima;
    this.velocitàAttuale = velocitàAttuale;

    this.aumentaVelocità = function() {
        return this.velocitàAttuale + 1;
    };
}

var mercedes = new TerzaAuto("Mercedes", 180, 100);
velocità = mercedes.aumentaVelocità();

console.log("Modello: " + mercedes.modello);
console.log("Velocità massima: " + mercedes.velocitàMassima);
console.log("Velocità attuale: " + velocità);

