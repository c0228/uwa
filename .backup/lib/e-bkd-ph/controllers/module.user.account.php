<?php

// Set headers to allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

//
require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.module.user.account.php';

if($_GET["action"]=='USER_REGISTER'){
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 $surName = ''; if( array_key_exists("surName", $htmlData) ){ $surName = $htmlData["surName"]; }
 $name = ''; if( array_key_exists("name", $htmlData) ){ $name = $htmlData["name"];   }
 $dob = ''; if( array_key_exists("dob", $htmlData) ){ $dob = $htmlData["dob"];  }
 $gender = ''; if( array_key_exists("gender", $htmlData) ){ $gender = $htmlData["gender"];  }
 $email = ''; if( array_key_exists("email", $htmlData) ){ $email = $htmlData["email"];  }
 $emailVal = 'N'; if( array_key_exists("emailVal", $htmlData) ){ $emailVal = $htmlData["emailVal"];  }
 $mcountrycode = ''; if( array_key_exists("mcountrycode", $htmlData) ){ $mcountrycode = $htmlData["mcountrycode"];  }
 $mobile = ''; if( array_key_exists("mobile", $htmlData) ){ $mobile = $htmlData["mobile"];  }
 $mobileVal = 'N'; if( array_key_exists("mobileVal", $htmlData) ){ $mobileVal = $htmlData["mobileVal"]; }
 $dp = ''; if( array_key_exists("dp", $htmlData) ){ $dp = $htmlData["dp"];   }
 $userTz = ''; if( array_key_exists("userTz", $htmlData) ){ $userTz = $htmlData["userTz"];  }
 $accactive = ''; if( array_key_exists("accactive", $htmlData) ){ $accactive = $htmlData["accactive"];  }
 $userRole = ''; if( array_key_exists("userRole", $htmlData) ){ $userRole = $htmlData["userRole"];  }
 $query = $userAccountModule->query_add_userAccount($surName, $name, $dob, $gender, $email, $emailVal, $mcountrycode, $mobile, $mobileVal, $dp, 
	$userTz, $accactive, $userRole);
 $result = array();
 $status = $database->addupdateData($query);
 $message = 'New User Created Successfully';
 if($status === 'Error') { $message = 'Query Failed - ['.$query.']'; }
 $result["status"] = $status;
 $result["message"] = $message;
 echo json_encode( $result );
}
else {
	
}

