<?php

/*
 *  Semplice esempio di una calcolatrice realizzata in php usando
 *  lo spread operator
 */


function mathOp($operazione,...$args) {
    $risultato = 0;
    if(empty($args)) {  
        return null;
    }

    switch($operazione) {
        case '+':
            $risultato = array_sum($args);    
        break;

        case '*':
            $risultato = 1;   
            foreach($args as $arg) {
                $risultato *= $arg;   
            break;
            }

        case '-':
            $risultato = $args[0];
            $vals = array_slice($args, 1);
            foreach($vals as $val) {
                $risultato -= $val;   
                }
            break;

        case '/':
            $risultato = $args[0];
            $vals = array_slice($args, 1);
            foreach($vals as $val) {
                $risultato /= $val;      
                }
            break;

            default:
                $risultato = null;   
    }
    return $risultato;
}

echo mathOp('*', 2, 4, 2);

?>