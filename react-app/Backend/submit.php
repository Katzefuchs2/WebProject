<?php
  $host = "localhost";
  $user = "root";
  $pwd = "";
  $db = "webproject";

//$mysqli = new mysqli($host,$user,$pwd,$db);
  $con = mysqli_connect($host,$user,$pwd,$db);

// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}

if(isset($_POST["submitBtn"]) && $_POST["submitBtn"]!=""){
    $title=$_POST["title"];
    $content=$_POST["content"];
    echo $title;

    $sql = "INSERT INTO posts (title, content)
    VALUES ('$title', '$content')";

    if ($con->query($sql) === TRUE) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $con->error;
    }
    header('Location: admin.php');
    $con->close();
}
?>
