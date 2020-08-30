<?php

if(isset($_GET['username']) && isset($_GET['lastname'])) {
    echo 'Username: '.$_GET['username'].'<br>';
    echo 'Lastname: '.$_GET['lastname'].'<br>';
}

?>

<a href="TestGet.php?username=Leonardo&lastname=Rinaldi">Test Get</a>
