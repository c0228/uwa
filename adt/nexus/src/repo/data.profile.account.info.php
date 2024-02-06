<?php
class ProfileInfoModule {
 function query_add_profile($profileInfoArry){
   $sql = "INSERT INTO profile_accounts_info (".implode(", ",array_keys($profileInfoArry[0])).") VALUES";
   foreach($profileInfoArry as $row) {
    $sql.=" ('".implode("', '", $row)."'),";
   }
   return chop($sql,","); 
 }
 function query_view_profile($userId){
    return "SELECT * FROM profile_accounts_info WHERE userId='".$userId."';";  
 }
 function query_update_profile($profileId, $userId, $createdBy, $surName, $name, $gender, $motherTongue, 
  $status, $hgt_ft, $hgt_inch, $highDegree, $occupation, $occType, $livingStatus, $profileStatus,
  $profilePic){
   $sql="UPDATE profile_accounts_info SET";
   if(strlen($userId)>0){ $sql.=" userId='".$userId."',"; }
   if(strlen($createdBy)>0){ $sql.=" createdBy='".$createdBy."',"; }
   if(strlen($surName)>0){ $sql.=" surName='".md5($surName)."',"; }
   if(strlen($name)>0){ $sql.=" name='".$name."',"; }
   if(strlen($gender)>0){ $sql.=" gender='".$gender."',"; }
   if(strlen($motherTongue)>0){ $sql.=" motherTongue='".$motherTongue."',"; }
   if(strlen($status)>0){ $sql.=" status='".$status."',"; }
   if(strlen($hgt_ft)>0){ $sql.=" hgt_ft='".$hgt_ft."',"; }
   if(strlen($hgt_inch)>0){ $sql.=" hgt_inch='".$hgt_inch."',"; }
   if(strlen($highDegree)>0){ $sql.=" highDegree='".$highDegree."',"; }
   if(strlen($occupation)>0){ $sql.=" occupation='".$occupation."',"; }
   if(strlen($occType)>0){ $sql.=" occType='".$occType."',"; }
   if(strlen($livingStatus)>0){ $sql.=" livingStatus='".$livingStatus."',"; }
   if(strlen($profileStatus)>0){ $sql.=" profileStatus='".$profileStatus."',"; }
   if(strlen($isActive)>0){ $sql.=" isActive='".$isActive."',"; } 
   if(strlen($profilePic)>0){ $sql.=" profilePic='".$profilePic."',"; }
   $sql=chop($sql,",")." WHERE profileId=".$profileId.";";
   return $sql;
 }
 function query_delete_profile($userId){
   return "DELETE FROM profile_accounts_info WHERE userId='".$userId."';";
 }
}
?>