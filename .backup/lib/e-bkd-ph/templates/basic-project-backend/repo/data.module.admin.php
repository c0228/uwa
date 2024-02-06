<?php
class AdminModule {
  function query_add_newPlatform($platformName, $platformDesc){
	return "INSERT INTO platform_info(platformName, platformDesc) VALUES ('".$platformName."','".$platformDesc."');";
  }
  function query_view_platformInfo(){
	return "SELECT platformName, platformDesc, (SELECT count(*) FROM platform_qa WHERE platform_qa.platformName=platform_info.platformName) As questions, ".
		   "(SELECT count(*) FROM platform_qa WHERE questionType = 'PRACTICAL' AND platform_qa.platformName=platform_info.platformName) As practicalQuestions, ".
		   "(SELECT count(*) FROM platform_qa WHERE questionType = 'THEORY' AND platform_qa.platformName=platform_info.platformName) As theoryQuestions ".
		   " FROM platform_info;";
  }
  function query_add_newQuestion($syllabusName, $question, $questionType, $answer){
	return "INSERT INTO platform_qa(syllabusName, question, questionType, answer) VALUES ('".$syllabusName."','".$question."','".$questionType."','".$answer."');";
  }
  // Rewrite it
  function query_view_aboutPlatform($platformName){
	return "SELECT platformName, platformDesc, (SELECT count(*) FROM platform_qa WHERE platform_qa.platformName=platform_info.platformName) As questions, ".
		   "(SELECT count(*) FROM platform_qa WHERE questionType = 'PRACTICAL' AND platform_qa.platformName=platform_info.platformName) As practicalQuestions, ".
		   "(SELECT count(*) FROM platform_qa WHERE questionType = 'THEORY' AND platform_qa.platformName=platform_info.platformName) As theoryQuestions ".
		   " FROM platform_info WHERE platformName='".$platformName."';";
  }
  function query_view_questions($syllabusName,$limitStart,$limitEnd){
	return "SELECT * FROM platform_qa WHERE syllabusName='".$syllabusName."' LIMIT ".$limitStart.",".$limitEnd; 
  }
  function query_update_question($question_Id, $answer){
	return "UPDATE platform_qa SET answer='".$answer."' WHERE question_Id=".$question_Id;
  }
  function query_autoComplete_questions($keyword){
	return "SELECT * FROM platform_qa WHERE question LIKE '%".$keyword."%' OR answer LIKE '%".$keyword."%';";
  }
  function query_suggest_questionAnswer($keywords){
	$sql="SELECT * FROM platform_qa WHERE question";
  }
}
$adminModule = new AdminModule();