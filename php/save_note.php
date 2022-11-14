<?php

include("DB_connection.php");

$conntent = $_POST["content"];

$query = "INSERT INTO `notes` (`content`) VALUES (?)";

$preparation = $DB_connection->prepare($query);

$preparation->execute([$conntent]);

?>