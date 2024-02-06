<?php

function CreateAZipFile($folderName, $ZipFileToCreate) {
    function loop($folderName){
        $dir = opendir($folderName);
        while($file = readdir($dir)) {
          if(is_file($folderName.$file)) {
            $zip -> addFile($folderName.$file, $file);
          }
        }
    }
    // Create new zip class
    $zip = new ZipArchive;
    if($zip -> open($ZipFileToCreate, ZipArchive::CREATE ) === TRUE) {
        // Store the path into the variable
        loop($folderName);
        $zip ->close();
    }
}

function ExtractAZipFile($zipFile, $extractLocation){
    $zip = new ZipArchive;
    // Zip File Name
    if ($zip->open($zipFile) === TRUE) {
        // Unzip Path
        $zip->extractTo($extractLocation);
        $zip->close();
        return 'Success';
    } else {
        return 'Failed';
    }
} 

// File Management
function CreateAFile($fileName, $content){
 $file = fopen($fileName, "a"); // open the file for writing
 fwrite($file, $content); // write content to the file
 fclose($file); // close the file
}


?>