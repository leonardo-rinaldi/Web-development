/*
    Prove caricamento dati da file .json a pagina HTML tramite JavaScript
*/

function loadDati() {
    $.getJSON('data/dati.json')
    .done(function(data) {  //se l'operazione va a buon fine

        var dati = data;    //memorizzo i dati JSON in una variabile
        var evento = "eventoUno"; //oggetto evento presente nell'array di dati JSON
        // var oggetto = "eventoDue";
        // var oggetto = "eventoTre";

        for(var i = 0; i < dati[evento].length; i++) {
            var msg = dati[evento][i].luogo + " " + dati[evento][i].dataEvento;  //dati[oggetto Nell'Array][posizione].proprietà, stampa i dati contenuti dentro "evento"
            $('#container').html(msg);
        }

    }).fail(function() {    //in caso di fallimento
        msg = "<div>" + "Errore" + "</div>";
        $('#container').html(msg);
    });
}

loadDati();