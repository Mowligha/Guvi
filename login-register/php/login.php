<?php
$conn = mysqli_connect('localhost:3307', 'root', '', 'login_register');
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

  $email = $_POST['email'];
  $password = $_POST['password'];

  //$hashed_password = md5($password);
  $qry = "Select * from users where email = '" . $email . "' and password = '" . $password . "'";
  $result = $conn->query($qry);
  $row = mysqli_fetch_array($result, MYSQLI_ASSOC);

  $count = mysqli_num_rows($result);
  if ($count == 1) { 
    header('Location: http://localhost/login-register/profile.html');
  } else {

     $response = array(
       'status' => 0,
       'msg' => 'Invalid Credentials'
     );
      }
  echo json_encode($response);
  exit();

?>