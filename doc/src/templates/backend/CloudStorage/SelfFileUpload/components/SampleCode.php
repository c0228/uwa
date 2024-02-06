<?php
  header('Content-Type: application/json; charset=utf-8');
  header('Access-Control-Allow-Origin: *');

function simpleFileUpload(){
  $response = array();
  $target_dir = $_POST["TARGET_DIRECTORY"];
  $server_url = 'http://localhost';
  if($_FILES){
    $count = intval($_POST["TARGET_FILES_COUNT"]); 
    for ($i = 0; $i < $count; $i++) {  
      $file_name = $_FILES["TARGET_FILE_".$i]["name"];
      $file_tmp_name = $_FILES["TARGET_FILE_".$i]["tmp_name"];
      $target_file = $target_dir . basename($file_name);
      if(move_uploaded_file($file_tmp_name, $target_file)) {
        array_push($response, array("status" => "FILE_UPLOAD_SUCCESS", "fileName" => $file_name));
      } else {
        array_push($response, array("status" => "FILE_UPLOAD_FAILED", "fileName" => $file_name));
      }
    }
  } else{
      array_push($response, array("status" => "NO_FILES_FOUND"));
  }
  echo json_encode($response);
}

function advancedFileUpload(){

}
?>