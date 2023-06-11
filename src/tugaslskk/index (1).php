<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();


$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM user";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($user);
        break;
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO user(id, name,email, subject,message) VALUES(null, :name, :email, :subject,:message )";
        $stmt = $conn->prepare($sql);
        $created_at = date('y-m-d');
        $stmt->bindParam(':name, $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':suject', $user->subject);
        $stmt->bindParam(':message', $user->message);
       
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created succesfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
}   

?>