<?php

/*
*   Esercizio 1
*
*    Definisci una variabile $anno l'anno corrente. Dopo crea un blocco if-endif che mostra 
*    l'output della frase Siamo nell'anno 2014!. In seguito, grazie alla stessa variabile, 
*    scrivi una condizione if-else per stampare una delle due seguenti frasi: Siamo nel 2014.
*    Non siamo nel 2014. Infine ripeti l'operazione; questa volta, però, decrementa la variabile 
*    $anno di uno per poi riutilizzarla in una condizione if-else breve (ternario) attraverso il 
*    quale dovresti ottenere una delle due frasi precedenti.
*/

$anno = 2014;

if($anno === 2014) {
    echo "Siamo nel 2014! <br>";
}

if($anno === 2014) {
    echo "Siamo nel 2014! <br>";
} else {
    echo "Non siamo nel 2014 <br>";
}

$anno--;

$risultato = ($anno === 2014)? print "Siamo nel 2014": print "Non siamo nel 2014";