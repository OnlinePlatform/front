<?php 
	$db_host='127.0.0.1';
	$db_database='student';
	$db_username='root';
	$db_password='';
	$connection=mysql_connect($db_host,$db_username,$db_password);
if(!$connection){
die('could not connect to the database:<br/>'.mysql_error());
}
$db_select=mysql_select_db($db_database);
if(!$db_select){
die('could not connect to the database:<br/>'.mysql_error());
}
 ?>