<?php
class PlatformInfoModule {
  function query_addUpdate_platformInfo($platformName, $platformDesc){
	return "INSERT INTO platform_info(platformName, platformDesc) values ('".$platformName."', '".$platformDesc."') ".
		"ON DUPLICATE KEY UPDATE platformDesc='".$platformDesc."';"; 
  }
  function query_view_platformInfo(){
	return "SELECT * FROM platform_info;";
  }
  function query_delete_platformInfo($platformName){
	return "DELETE FROM platform_info WHERE platformName='".$platformName."';"; 
  }
}

$platformInfoModule = new PlatformInfoModule();