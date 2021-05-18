<?php
require "../Config/Config.php";
require "../Utilities/db.php";
require "../vendor/autoload.php";

use \Firebase\JWT\JWT;

function IsAuth()
{
    try {
        $secret_key = "YleUPLOADERAPI";
        $jwt = null;
        $authHeader = $_SERVER['HTTP_AUTHORIZATION'];
        $arr = explode(" ", $authHeader);
        $jwt = $arr[1];
        if ($jwt) {
            JWT::decode($jwt, $secret_key, array('HS256'));
            return true;
        } else {
            return false;
        }
    } catch (Exception $e) {
        return false;
    }
}
