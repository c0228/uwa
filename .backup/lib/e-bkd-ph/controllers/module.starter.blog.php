<?php

// Set headers to allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

require_once "./../utils/util.manage.file.php";


$htmlData = json_decode ( file_get_contents('php://input'), true );

CreateAFile( $htmlData["location"] + "/" + $htmlData["fileName"], $htmlData["content"]);

echo "Test";
?>