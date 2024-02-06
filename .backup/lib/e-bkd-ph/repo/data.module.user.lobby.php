<?php
class UserLobbyModule {
  function query_add_userLobby($accountId,$lobbyName,$spentTime,$fsDocUrl){
	return "INSERT INTO user_account_lobby(accountId,lobbyName,spentTime,fsDocUrl) ";
	"VALUES ('".$accountId."','".$lobbyName."','".$spentTime."','".$fsDocUrl."');";
  }
  function query_update_userLobby($lobby_Id,$accountId,$lobbyName,$spentTime,$fsDocUrl){
	$sql="UPDATE user_account_info SET";
	if(strlen($accountId)>0){ $sql.=" accountId='".$accountId."',"; }
	if(strlen($lobbyName)>0){ $sql.=" lobbyName='".$lobbyName."',"; }
	if(strlen($spentTime)>0){ $sql.=" spentTime='".md5($spentTime)."',"; }
	if(strlen($fsDocUrl)>0){ $sql.=" fsDocUrl='".$fsDocUrl."',"; }
	$sql=chop($sql,",").";"
	$sql.=" WHERE lobby_Id=".$lobby_Id.";";
	return $sql;
  }
  function query_delete_userLobby($lobby_Id){
	return "DELETE FROM user_account_lobby WHERE lobby_Id=".$lobby_Id;
  }
  function query_view_userLobby($accountId){
	return "SELECT * FROM user_account_lobby WHERE accountId=".$accountId;
  }
}

$userLobbyModule = new UserLobbyModule();