<!DOCTYPE html>
<html>
<head>
	<title>String Operations</title>
</head>
<body>
	<?php
		if ($_POST) {
			$string = $_POST["string"];
			echo "Input String: $string<br><br>";
			echo "Uppercase String: " . strtoupper($string) . "<br>";
			echo "Lowercase String: " . strtolower($string) . "<br>";
			echo "Reverse String: " . strrev($string) . "<br>";
			echo "Number of Characters: " . strlen($string) . "<br>";
			echo "Number of Words: " . str_word_count($string) . "<br>";
		}
	?>
	
	<h2>Enter a String:</h2>
	<form method="post" >
		<input type="text" name="string" required>
		<input type="submit" value="Submit">
	</form>
	
</body>
</html>
