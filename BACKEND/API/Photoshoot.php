<?php
include "../Config/Config.php";
require "../Utilities/db.php";

if(IsAuth()){
$tableName = "photoshoot";
$postSqlSentence = "INSERT INTO photoshoot (id, description, place, type, customerid, updated, created) 
                    VALUES (:id, :description, :place, :type, :customerid, :updated, :created);";
Database::ProcessRequest($db, $tableName, $postSqlSentence);
}
?>