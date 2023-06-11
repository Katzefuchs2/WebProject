<!-- PHP code to establish connection with the localserver -->
<?php

// Username is root
$user = 'root';
$password = '';

// Database name is geeksforgeeks
$database = 'webproject';

// Server is localhost with
// port number 3306
$servername='localhost:3306';
$mysqli = new mysqli($servername, $user,
                $password, $database);

// Checking for connections
if ($mysqli->connect_error) {
    die('Connect Error (' .
    $mysqli->connect_errno . ') '.
    $mysqli->connect_error);
}

// SQL query to select data from database
$sql = " SELECT * FROM posts";
$result = $mysqli->query($sql);
$mysqli->close();
?>
<!-- HTML code to display data in tabular format -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>GFG User Details</title>
    <!-- CSS FOR STYLING THE PAGE -->
    <style>
        table {
            margin: 0 auto;
            font-size: large;
            border: 1px solid black;
        }

        h1 {
            text-align: center;
            color: #006600;
            font-size: xx-large;
            font-family: 'Gill Sans', 'Gill Sans MT',
            ' Calibri', 'Trebuchet MS', 'sans-serif';
        }

        td {
            background-color: #E4F5D4;
            border: 1px solid black;
        }

        th,
        td {
            font-weight: bold;
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }

        td {
            font-weight: lighter;
        }
    </style>
</head>

<body>
    <section>
        <h1>ADMIN PAGE</h1>
        <h2>Posts</h2>
        <!-- TABLE CONSTRUCTION -->
        <table>
            <tr>
                <th>Title</th>
                <th>Content</th>
                <th>ID</th>
                <th>Action</th>
            </tr>
            <!-- PHP CODE TO FETCH DATA FROM ROWS -->
            <?php
                // LOOP TILL END OF DATA
                while($rows=$result->fetch_assoc())
                {
            ?>
            <tr>
                <!-- FETCHING DATA FROM EACH
                    ROW OF EVERY COLUMN -->
                <td><?php echo $rows['title'];?></td>
                <td><?php echo $rows['content'];?></td>
                <td> <form action="delete.php" method="post">
                <input type="number" name="title" id="title" value = <?php echo $rows['id'];?> readonly="readonly">
                <td><input type="submit" value="Delete"> </td>

                </form> </td>

            </tr>
            <?php
                }
            ?>
        </table>
    </section>
    <form action="submit.php" method="post">
  <h2>Add Post</h2>
  <table>
    <tr>
      <td>Title:</td>
      <td><input type="text" name="title" id="title" ></td>
    </tr>
    <tr>
      <td>Content:</td>
      <td><textarea name="content" cols="40" rows="5" id="content"></textarea></td>
    </tr>
    <tr>
      <td><input name="submitBtn" type="submit" id="submitBtn"
value="Submit"></td>
    </tr>
  </table>
</form>
<td> <button type="button">Exit</button> </td>
</body>

</html>
