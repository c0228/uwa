<?php

function getListOfFilesInAFolder($path){
 return array_diff(scandir($path), array('.', '..')); // Returns List of Files as an Array
}

?>