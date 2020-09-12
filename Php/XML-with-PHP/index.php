<?php

/*
 * Creare un file XML tramite PHP DOM
 */

$films = [[
    'title' => 'Batman',
    'year' => '1989',
    'director' => 'Tim Burton',
    'plot' => 'Qui ci va la trama'
], [
    'title' => 'The StarWars Aventures',
    'year' => '2016',
    'director' => 'Tim Burton',
    'plot' => 'Qui ci va la trama'
]];

$dom = new DOMDocument('1.0', 'utf-8');

$root = $dom->createElement('root');

foreach($films as $film) {
    $movie = $dom->createElement('film');

    foreach($film as $tag => $value) {
        $element = $dom->createElement($tag);   
        $text = $dom->createTextNode($value);   
        $element->appendChild($text);  
        $movie->appendChild($element);  
    }
    $root->appendChild($movie); 
}

$dom->appendChild($root);

header("Content-type:text/xml"); 

$dom->save('mymovies.xml'); 

echo $dom->saveXML();