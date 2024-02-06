<?php
require_once "./../utils/util.manage.file.php";

$pathdir = "./../templates/basic-project-backend/"; 
$zipcreated = "./../temp/basic-project.zip";
CreateAZipFile($pathdir, $zipcreated);

?>