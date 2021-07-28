<?php
include "../Config/Config.php";
require "../Utilities/db.php";
    $tableName = "user";
    $postSqlSentence = "INSERT INTO user id, name, surname, email, password, phone, created, updated, role) 
                        VALUES  (:id, :name, :surname, :email, :password, :phone, :created, :updated, :role);";
    Database::ProcessRequest($db, $tableName, $postSqlSentence);
?>