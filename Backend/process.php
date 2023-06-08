<?php
    $username = $_POST['user'];
    $password = $_POST['pass'];

    if ($username == NULL || $password == NULL) {
        header('Location: login.php');
    }

    $username = stripcslashes($username);
    $password = stripcslashes($password);
    //$username = mysql_real_escape_string($username);
    //$password = mysql_real_escape_string($password);

    //$con = mysqli_connect("octacat.dk.mysql", "root", "123456");
    $host = "octacat.dk.mysql";
    //$host = "localhost";
    $user = "octacat_dkwebproject";
    $pwd = "123456";
    $db = "octacat_dkwebproject";

    //$mysqli = new mysqli($host,$user,$pwd,$db);

    $con = mysqli_connect($host,$user,$pwd);
    //mysqli_select_db($con, "octacat_dkwebproject");

    //$con = mysql_connect(dbserver,dbuser,dbpass);

    if (!$con){
      die('error connecting to database');
    }else{
      mysql_select_db($db, $con);
    }

    $result = mysqli_query($con, "select * from users where username = '$username' and password = '$password'")
        or die("Failed db ".mysql_error());
    $row = mysqli_fetch_array($result);
    if ($row['username'] == $username && $row['password'] == $password) {
        echo "Great Sucess";
        header('Location: admin.php');
    } else {
        echo "Nahh bro";
    }
?>
