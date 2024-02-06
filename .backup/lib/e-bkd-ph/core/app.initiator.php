<?php 

ini_set('max_execution_time',300);
date_default_timezone_set("Australia/Melbourne");
$_SESSION["PROJECT_MODE"]='DEBUG';
 
/* Logger Declaration in JSON */ 
include('../vendor/apache/log4php/src/main/php/Logger.php'); 
Logger::configure('../config/log-config.xml'); 
	
/* Database Credentials */
if($_SESSION["PROJECT_MODE"]=='DEBUG'){
 $DB_SERVERNAME="localhost:3306";
 $DB_NAME="rw";
 $DB_USER="root";
 $DB_PASSWORD="";
}
else {
 $DB_SERVERNAME="localhost:3306";
 $DB_NAME="rw";
 $DB_USER="root";
 $DB_PASSWORD="";
}

$database = new Database($DB_SERVERNAME,$DB_NAME,$DB_USER,$DB_PASSWORD);