<?php
include "../Config/Config.php";
require "../Utilities/db.php";
require "../Utilities/jwt.php";

if(IsAuth()){
    $tableName = "user";
    $postSqlSentence = "INSERT INTO user id, name, surname, email, password, phone, created, updated, role) 
                        VALUES  (:id, :name, :surname, :email, :password, :phone, :created, :updated, :role);";
    db::ProcessRequest($db, $tableName, $postSqlSentence);
}
?>