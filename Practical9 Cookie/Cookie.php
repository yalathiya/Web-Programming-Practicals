<!DOCTYPE html>
<html>
<head>
	<title>Login Page</title>
</head>
<body>
	<?php
		// Start a new or resume an existing session
		session_start();

		// Check if the user is already logged in
		if (isset($_SESSION["username"])) {
			echo "<h2>Welcome back, {$_SESSION["username"]}!</h2>";
			echo "<p><a href='logout.php'>Logout</a></p>";
		} else {
			if (isset($_COOKIE["username"])) {
				// If the user has a valid cookie, automatically log them in
				$_SESSION["username"] = $_COOKIE["username"];
				echo "<h2>Welcome back, {$_SESSION["username"]}!</h2>";
				echo "<p><a href='logout.php'>Logout</a></p>";
			} else {
				// If the user is not logged in, display the login form
				if ($_SERVER["REQUEST_METHOD"] == "POST") {
					$username = $_POST["username"];
					$password = $_POST["password"];
					// Validate the username and password (this is just an example)
					if ($username == "user" && $password == "password") {
						// Set a cookie with the username (valid for 7 days)
						setcookie("username", $username, time() + (86400 * 7), "/");
						// Set the session variable
						$_SESSION["username"] = $username;
						echo "<h2>Welcome, $username!</h2>";
						echo "<p><a href='logout.php'>Logout</a></p>";
					} else {
						echo "<h2>Invalid username or password.</h2>";
					}
				} else {
					// Display the login form
					echo "<h2>Login</h2>";
					echo "<form method='post' action=''>";
					echo "Username: <input type='text' name='username'><br>";
					echo "Password: <input type='password' name='password'><br>";
					echo "<input type='submit' value='Login'>";
					echo "</form>";
				}
			}
		}
	?>
</body>
</html>
