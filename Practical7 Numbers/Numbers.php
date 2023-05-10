<!DOCTYPE html>
<html>
<head>
	<title>Number Operations</title>
</head>
<body>
	<h2>Enter a Number:</h2>
	<form method="post" >
		<input type="number" name="number" required>
		<input type="submit" value="Submit">
	</form>
</body>
</html>


	<?php
		function isArmstrong($number) {
			$temp = $number;
			$sum = 0;
			while ($temp != 0) {
				$remainder = $temp % 10;
				$sum += pow($remainder, strlen((string)$number));
				$temp = (int)($temp / 10);
			}
			return ($sum == $number);
		}

		function isPerfect($number) {
			$sum = 0;
			for ($i = 1; $i <= ($number / 2); $i++) {
				if ($number % $i == 0) {
					$sum += $i;
				}
			}
			return ($sum == $number);
		}

		function isPalindrome($number) {
			$reverse = 0;
			$temp = $number;
			while ($temp != 0) {
				$remainder = $temp % 10;
				$reverse = ($reverse * 10) + $remainder;
				$temp = (int)($temp / 10);
			}
			return ($reverse == $number);
		}

		if ($_POST) {
			$number = $_POST["number"];
			if (isArmstrong($number)) {
				echo "$number is an Armstrong number.<br>";
			} else {
				echo "$number is not an Armstrong number.<br>";
			}
			if (isPerfect($number)) {
				echo "$number is a Perfect number.<br>";
			} else {
				echo "$number is not a Perfect number.<br>";
			}
			if (isPalindrome($number)) {
				echo "$number is a Palindrome number.<br>";
			} else {
				echo "$number is not a Palindrome number.<br>";
			}
		}
	?>

