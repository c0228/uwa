<?php
class PlatformQAModule {
 function query_add_platformQA($syllabusName,$question,$questionType,$answer){
  return "INSERT INTO platform_qa(syllabusName, question, questionType, answer) "
	."VALUES ('".$syllabusName."','".$question."','".$questionType."','".$answer."');";  
 }
 function query_update_platformQA($questionId,$syllabusName,$question,$questionType,$answer){
  $sql="UPDATE platform_qa SET";
  if(strlen($syllabusName)>0){ $sql.=" syllabusName='".$syllabusName."',"; }
  if(strlen($question)>0){ $sql.=" question='".$question."',"; }
  if(strlen($questionType)>0){ $sql.=" questionType='".$questionType."',"; }
  if(strlen($answer)>0){ $sql.=" answer='".$answer."',"; }
  $sql=chop($sql,",").";"
  $sql.=" WHERE questionId=".$questionId.";";
  return $sql;
 }
 function query_autoComplete_platformQA($keywordArry){
  $sql="SELECT * FROM platform_qa WHERE";
  foreach ($keywordArry as $keyword) {
	$sql.=" (question LIKE '%".$keyword."%' OR answer LIKE '%".$keyword."%') AND";
  }
  return chop($sql," AND").";"
 }
 function query_delete_platformQA($questionId){
  return "DELETE FROM platform_qa WHERE questionId='".$questionId."';";
 }
}

$platformQAModule = new PlatformQAModule();