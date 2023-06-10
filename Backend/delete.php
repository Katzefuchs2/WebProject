
<?php
$id = $_POST["title"];

$host = "localhost";
$user = "root";
$pwd = "";
$db = "webproject";

// Create connection
$con = new mysqli($host, $user, $pwd, $db);
// Check connection
if ($con->connect_error) {
 die("Connection failed: " . $con->connect_error);
}

// sql to delete a record
$sql = "DELETE FROM posts WHERE id=$id";

if ($con->query($sql) === TRUE) {
 echo "Record deleted successfully";
} else {
 echo "Error deleting record: " . $conn->error;
}
header('Location: admin.php');
$con->close();
?>
