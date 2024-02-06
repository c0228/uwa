<?php
session_start();
header("Content-Type: application/json");
require_once '../core/app.database.php';
require_once '../core/app.initiator.php';
require_once '../repo/data.module.admin.php';

if(isset($_GET["action"])){
	if($_GET["action"]=='PLATFORM_ADD_NEW'){
	  $platformName = $_GET["platformName"];
	  $platformDesc = $_GET["platformDesc"];
	  $query = $adminModule->query_add_newPlatform($platformName,$platformDesc);
	  $content = array();
	  $content["status"] =  $database->addupdateData($query);
	  echo json_encode($content);
	}
	else if($_GET["action"]=='PLATFORM_VIEW'){
	  $query = $adminModule->query_view_platformInfo();
	  echo $database->getJSONData($query);
	}
	else if($_GET["action"]=='QUESTION_ADD_NEW'){
	  $platformName = $_POST["platformName"];
	  $question = $_POST["question"];
	  $questionType = $_POST["questionType"];
	  $answer = $_POST["answer"];
	  $query = $adminModule->query_add_newQuestion($platformName,$question,$questionType,$answer);
	  $content = array();
	  $content["status"] =  $database->addupdateData($query);
	  echo json_encode($content);
	}
	else if($_GET["action"]=='QUESTION_VIEW'){
	  $platformName = $_GET["platformName"];
	  $limitStart = $_GET["limitStart"];
	  $limitEnd = $_GET["limitEnd"];
	  $query1 = $adminModule->query_view_aboutPlatform($platformName);
	  $query2 = $adminModule->query_view_questions($platformName,$limitStart,$limitEnd);
	  echo '{"platformDetails":'.$database->getJSONData($query1).',"questions":'.$database->getJSONData($query2).'}';
	}
	else if($_GET["action"]=='QUESTION_UPDATE'){
	  $question_Id = $_POST["question_Id"];
	  $answer = str_replace("'","\'",$_POST["answer"]);
	  $query = $adminModule->query_update_question($question_Id, $answer);
	  echo $query;
	  $content = array();
	  $content["status"] =  $database->addupdateData($query);
	  echo json_encode($content);
	}
	else if($_GET["action"]=='QUESTION_AUTOCOMPLETE'){
		$keyword = $_GET["keyword"];
		$query = $adminModule->query_autoComplete_questions($keyword);
		echo $database->getJSONData($query);
	}
}
else if(isset($_POST["action"])){
	
}
else { 
 $content = array();
 $content["status"] = "MISSING_ACTION";
 $content["message"] = "Expecting Action Parameter";
 echo json_encode($content);
}