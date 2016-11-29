<?php
$name = $_POST["name"];
$puntuacion = 0;
$jugador = '{"name":"'. $name .'","puntuacion":"'. $puntuacion .'"}';

if(isset($_SESSION["jugadores"])) {
    $_SESSION["jugadores"][$name] = $puntuacion;
}else {
    $_SESSION["jugadores"] = array (''=>'');
}