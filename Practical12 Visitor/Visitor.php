<!DOCTYPE html>
<html>
<head>
	<title>Visitor Counter</title>
</head>
<body>
	<?php
		// Check if the visitor has a valid cookie
		if (isset($_COOKIE["visits"])) {
			$visits = $_COOKIE["visits"] + 1;
			setcookie("visits", $visits, time() + (86400 * 30), "/");
			echo "<h2>Welcome back! You have visited this page $visits times.</h2>";
		} else {
			$visits = 1;
			setcookie("visits", $visits, time() + (86400 * 30), "/");
			echo "<h2>Welcome! This is your first time visiting this page.</h2>";
		}
	?>
</body>
</html>
