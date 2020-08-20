<?php

/*
*   Dato l'array $data, eseguire i seguenti compiti:
*
*   1. Mettere l'ultimo valore dell'array nella variabile $last. Esempio: $last = funzione($data)
*   2. Aggiungere alla fine dell'array il valore "END"
*   3. Mettere il primo valore dell'array nella variabile $first. Esempio: $first ) funzione($data)
*   4. Aggiungere il valore 1, all'inizio dell'array.
*
*/

$last = array_pop($data);
array_push($data, 'END');

$first = array_shift($data);
array_unshift($data, 1);