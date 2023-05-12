function validation() {
  // Retrieve the form inputs
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var pinInput = document.getElementById("pin");
  var cardTypeInput = document.getElementById("card_type");
  var cardNumberInput = document.getElementById("card_Number");
  var expDateInput = document.getElementById("exp_Date");
  var cvvInput = document.getElementById("cvv");

  // Perform validation
  var isValid = true;

  // Validate Name
  if (nameInput.value.trim() === "") {
    alert("Please enter your name.");
    isValid = false;
  }

  // Validate Email
  if (emailInput.value.trim() === "") {
    alert("Please enter your email.");
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    alert("Please enter a valid email address.");
    isValid = false;
  }

  // Validate Pincode
  if (pinInput.value.trim() === "") {
    alert("Please enter your pincode.");
    isValid = false;
  } else if (pinInput.value.length !== 6) {
    alert("Please enter a valid 6-digit pincode.");
    isValid = false;
  }

  // Validate Card Type
  if (cardTypeInput.value.trim() === "") {
    alert("Please select a card type.");
    isValid = false;
  }

  // Validate Card Number
  if (cardNumberInput.value.trim() === "") {
    alert("Please enter your card number.");
    isValid = false;
  }

  // Validate Expiration Date
  if (expDateInput.value.trim() === "") {
    alert("Please enter the expiration date.");
    isValid = false;
  }

  // Validate CVV
  if (cvvInput.value.trim() === "") {
    alert("Please enter the CVV.");
    isValid = false;
  } else if (cvvInput.value.length !== 3) {
    alert("Please enter a valid 3-digit CVV.");
    isValid = false;
  }

  // Submit the form if all inputs are valid
  if (isValid) {
    document.querySelector("form").submit();
  }
}

// Helper function to validate email format
function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
