<?php
include "../Config/Config.php";
require "../Utilities/db.php";
$tableName = "campaign";
$postSqlSentence = "INSERT INTO campaign (id, name, message, created, released, updated) VALUES (:id, :name, :message, :created, :released, :updated);";
db::ProcessRequest($db, $tableName, $postSqlSentence);

?>