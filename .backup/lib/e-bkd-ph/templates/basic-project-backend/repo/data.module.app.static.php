<?php
class AppStaticModule {
 function query_addUpdate_appStaticData($configKey, $configValue){
   return "INSERT INTO app_static_config(configKey, configValue) values ('".$configKey."', '".$configValue."') ".
		"ON DUPLICATE KEY UPDATE configValue='".$configValue."';";
 }
 function query_view_appStaticData($list){
   $sql="SELECT configKey, configValue FROM app_static_config";
   if(count($list)>0){
	  $sql.=" WHERE"; 
	  foreach ($list as $value) {
		$sql.=" configKey='".$value."' OR";
	  }
   }
   return chop($sql," OR").";";
 }
 function query_delete_appStaticData($configKey){
   return "DELETE FROM app_static_config WHERE configKey='".$configKey."';";
 }
}

$appStaticModule = new AppStaticModule();