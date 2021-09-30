<html>
<head>
  <title>Register</title>
</head>
<body>
<h1>Register</h1>
<?php
  // create short variable names
  $ID=$_POST['ID'];
  $Name=$_POST['Name'];
  $Description=$_POST['Description'];
  $Price=$_POST['Price'];

  if (!$ID || !$Name || !$Description || !$Price) {
     echo "You have not entered all the required details.<br />"
          ."Please go back and try again.";
     exit;
  }

  @ $db = new mysqli('localhost', 'FoodDB', '', 'FoodDB');

  if (mysqli_connect_errno()) {
     echo "Error: Could not connect to database.  Please try again later.";
     exit;
  }

  $query = "insert into food values
            ('".$ID."', '".$Name."', '".$Description."', '".$Price."')";
  $result = $db->query($query);

  if ($result) {
      echo  $db->affected_rows." food inserted into database.";
  } else {
  	  echo "An error has occurred.  The item was not added.";
  }

  $db->close();
?>
</body>
</html>