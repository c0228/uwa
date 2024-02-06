<?php
session_start();
header("Content-Type: application/json");
require_once '../core/app.database.php';
require_once '../core/app.initiator.php';
require_once '../repo/data.module.app.static.php';

if(isset($_GET["action"])){
 if($_GET["action"]=='APP_VIEW_STATDATA'){
	$data = json_decode(file_get_contents('php://input'), true);
	$keys = $data["keys"];
	$values = $data["values"];
	if(count($keys)>0 && count($values)>0 && count($keys)===count($values)){
		$query = $appStaticModule->query_view_appStaticData($values);
		$jsonData = json_decode($database->getJSONData($query), true);
		$statData = array();
		foreach($jsonData as $row){
			$index = array_search($row["configKey"],$values);
			$statData[$keys[$index]] =$row["configValue"];
		}
		$content=array();
		$content["status"] = "Success";
		$content["data"] = $statData;
		echo json_encode($content);
	} else {
		$content=array();
		$content["status"] = "Failed";
		$content["message"] = "keys and values should be greator than zero and keys length should be equal to values length";
		echo json_encode($content);
	}
	
 } 
 else if($_GET["action"]=='APP_ADDUPDATE_STATDATA'){
	$data = json_decode(file_get_contents('php://input'), true);
	$configKey = $data["configKey"];
	$configValue = $data["configValue"];
	if(strlen($configKey)>0 && strlen($configValue)>0) {
	 $query = $appStaticModule->query_addUpdate_appStaticData($configKey, $configValue);
	 $content["status"] =  $database->addupdateData($query);
	 $content["message"] = "Data Added/Updated Successfully";
	 echo json_encode($content);
	} else {
	   $message='Missing';
	   if(strlen($configKey)<=0){ $message.=' configKey,'; }
	   if(strlen($configValue<=0)){ $message.=' configValue,'; }
	   $message=chop($message,',');
	   $content = array();
	   $content["status"] =  "Failed";
	   $content["message"] = $message;
	   echo json_encode($content);
	}
 }
 else if($_GET["action"]=='APP_DELETE_STATDATA'){
	$data = json_decode(file_get_contents('php://input'), true);
	$configKey = $data["configKey"];
	if(strlen($configKey)>0) {
	 $query = $appStaticModule->query_delete_appStaticData($configKey);	
	 $content["status"] =  $database->addupdateData($query);
	 $content["message"] = "Data deleted Successfully";
	 echo json_encode($content);
	} else {
	   $content = array();
	   $content["status"] =  "Failed";
	   $content["message"] = "Missing configKey";
	   echo json_encode($content);
	}
 }
}
else { 
 $content = array();
 $content["status"] = "Failed";
 $content["message"] = "Expecting Action Parameter";
 echo json_encode($content);
}
	