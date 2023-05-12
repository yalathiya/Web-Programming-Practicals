<?php
// Retrieve the form inputs
$name = $_POST['name'];
$gender = $_POST['gender'];
$address = $_POST['address'];
$email = $_POST['email'];
$pincode = $_POST['pin'];
$cardType = $_POST['card_type'];
$cardNumber = $_POST['Card_number'];
$expDate = $_POST['exp_date'];
$cvv = $_POST['cvv'];

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "Yash@2233";
$dbname = "WP_LabManual";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Insert the user record into the database
$sql = "INSERT INTO users (name, gender, address, email, pincode, card_type, card_number, exp_date, cvv)
        VALUES ('$name', '$gender', '$address', '$email', '$pincode', '$cardType', '$cardNumber', '$expDate', '$cvv')";

if ($conn->query($sql) === TRUE) {
  $lastInsertId = $conn->insert_id;
  echo "User record inserted successfully. ID: " . $lastInsertId . "<br>";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// Update the user record
$updateId = 1; // Example: update the user with ID 1
$sqlUpdate = "UPDATE users SET name='$name', gender='$gender', address='$address', email='$email', pincode='$pincode',
              card_type='$cardType', card_number='$cardNumber', exp_date='$expDate', cvv='$cvv' WHERE id=$updateId";

if ($conn->query($sqlUpdate) === TRUE) {
  echo "User record updated successfully. ID: " . $updateId . "<br>";
} else {
  echo "Error updating record: " . $conn->error;
}

// Delete the user record
$deleteId = 2; // Example: delete the user with ID 2
$sqlDelete = "DELETE FROM users WHERE id=$deleteId";

if ($conn->query($sqlDelete) === TRUE) {
  echo "User record deleted successfully. ID: " . $deleteId . "<br>";
} else {
  echo "Error deleting record: " . $conn->error;
}

$conn->close();
?>
