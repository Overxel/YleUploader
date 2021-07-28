<?php
header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');
class Database
{
    public static function Connect($db)
    {
        try {
            $conn = new PDO("mysql:host={$db['host']};dbname={$db['db']};charset=utf8", $db['username'], $db['password']);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $conn;
        } catch (PDOException $exception) {
            exit($exception->getMessage());
        }
    }

    public static function ProcessRequest($db, $tableName, $postSqlSentence = "")
    {
        $dbConn =  self::Connect($db);
        switch ($_SERVER['REQUEST_METHOD']) {
            case 'GET':
                self::Get($dbConn, $tableName);
                break;
            case 'POST':
                self::Post($dbConn, $postSqlSentence);
                break;
            case 'PUT':
                self::Update($dbConn, $tableName);
                break;
            case 'DELETE':
                self::Delete($dbConn, $tableName);
                break;
            default:
                header("HTTP/1.1 400 Bad Request");
                break;
        }
        $dbConn = null;
    }

    private static function Get($dbConn, $tableName)
    {
        if (isset($_GET['id'])) {
            $sql = $dbConn->prepare("SELECT * FROM " . $tableName . " where id=:id");
            $sql->bindValue(':id', $_GET['id']);
            $sql->execute();
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetch(PDO::FETCH_ASSOC));
        } else {
            $sql = $dbConn->prepare("SELECT * FROM  " . $tableName);
            $sql->execute();
            $sql->setFetchMode(PDO::FETCH_ASSOC);
            header("HTTP/1.1 200 OK");
            echo json_encode($sql->fetchAll());
        }
    }

    private static function Post($dbConn, $sqlSentence)
    {
        $input = $_POST;
        $statement = $dbConn->prepare($sqlSentence);
        self::BindAllValues($statement, $input);
        $statement->execute();
        $postId = $dbConn->lastInsertId();
        if ($postId) {
            $input['id'] = $postId;
            header("HTTP/1.1 200 OK");
            echo json_encode($input);
        }
    }

    private static function Delete($dbConn, $tableName)
    {
        parse_str(file_get_contents('php://input'), $_DELETE);
        $id = $_DELETE['id'];
        $statement = $dbConn->prepare("DELETE FROM " . $tableName . " where id=:id");
        $statement->bindValue(':id', $id);
        $statement->execute();
        header("HTTP/1.1 200 OK");
    }

    private static function Update($dbConn, $tableName)
    {
        parse_str(file_get_contents('php://input'), $_PUT);
        $postId = $_PUT['id'];
        $fields = self::GetParams($_PUT);
        $sql = "
              UPDATE " . $tableName . "
              SET $fields
              WHERE id='$postId'
               ";
        $statement = $dbConn->prepare($sql);
        self::BindAllValues($statement, $_PUT);
        $statement->execute();
        header("HTTP/1.1 200 OK");
    }

    private static function GetParams($input)
    {
        $filterParams = [];
        foreach ($input as $param => $value) {
            $filterParams[] = "$param=:$param";
        }
        return implode(", ", $filterParams);
    }

    private static function BindAllValues($statement, $params)
    {
        foreach ($params as $param => $value) {
            $statement->bindValue(':' . $param, $value);
        }
        return $statement;
    }
}
