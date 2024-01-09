function validateForm() {
    // Add your validation logic here
    // For simplicity, let's assume the form is always valid for this example
    return true;
}

function signUp() {
    // Add your sign up logic here
    // For simplicity, we'll just show a pop-up message
    showPopup("Sign up successful!");
}

function signIn() {
    // For simplicity, let's assume valid username and password are "user" and "password"
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;

    if (enteredUsername === "user" && enteredPassword === "password") {
        // Successful login
        showPopup("Sign in successful!");
    } else {
        // Wrong username or password
        showPopup("Wrong username or password. Please try again.");
    }
}

function showPopup(message) {
    document.getElementById("popupMessage").innerHTML = message;
    document.getElementById("popup").style.display = "block";

    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
    }, 2000); // Hide the popup after 2 seconds (adjust as needed)
}
