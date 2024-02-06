<?php
class UserAccountModule {
  function query_add_userAccount($surName, $name, $dob, $gender, $email, $emailVal, $mcountrycode, $mobile, $mobileVal, $dp, 
	$userTz, $accactive, $userRole){
	 return "INSERT INTO user_accounts_info(surName, name, dob, gender, email, emailVal, mcountrycode, mobile, mobileVal, ".
	 "dp, userTz, accactive, userRole) VALUES ('".$surName."','".$name."','".$dob."','".$gender."','".$email."','".$emailVal
	 ."','".$mcountrycode."','".$mobile."','".$mobileVal."','".$dp."','".$userTz."','".$accactive."','".$userRole."')";
  }
  /*function query_add_userAccount($name,$email,$accPwd,$accActive,$availableTime){
	return "INSERT INTO user_account_info(name,email,accPwd,accActive,availableTime) ".
	"VALUES ('".$name."','".$email."','".md5($accPwd)."','".$accActive."','".$availableTime."');";  
  } */
 /* function query_update_userAccount($accountId){
	$sql="UPDATE user_account_info SET";
	if(strlen($name)>0){ $sql.=" name='".$name."',"; }
	if(strlen($email)>0){ $sql.=" email='".$email."',"; }
	if(strlen($accPwd)>0){ $sql.=" accPwd='".md5($accPwd)."',"; }
	if(strlen($accActive)>0){ $sql.=" accActive='".$accActive."',"; }
	if(strlen($availableTime)>0){ $sql.=" availableTime='".$availableTime."',"; }
	$sql=chop($sql,",").";"
	$sql.=" WHERE accountId=".$accountId.";";
	return $sql;
  } */
  function query_view_userAccount($name,$accPwd){
	return "SELECT * FROM user_account_info WHERE name='".$name."' AND accPwd='".md5($accPwd)."';";  
  }
}

$userAccountModule = new UserAccountModule();