let attempts = 0;

document.getElementById("loginForm").onsubmit = function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");


    // Account lockout

    // Secure
    if (attempts >= 3) {
        message.textContent = "Account locked!";
        return;
    }

    // Vulnerable
    // No account lockout


    // Input validation

    // Secure
    if (username == "" || password == "") {
        message.textContent = "All fields are required.";
        return;
    }

    // Vulnerable
    // No input validation


    // Password length

    // Secure
    if (password.length < 8) {
        message.textContent =
            "Password must contain at least 8 characters.";
        return;
    }

    // Vulnerable
    // No password length check


    // Login

    if (username == "admin" && password == "Admin@123") {

        attempts = 0;

        // Output encoding Vulnerable
        // message.innerHTML = "Login successful! as " + username;

        // Secure
        message.textContent = "Login successful! as " + username;

    } else {

        attempts++;

        // Output encoding Vulnerable
        // message.innerHTML = "Invalid username or password. Attempt " + attempts;

        // Secure
        message.textContent = "Invalid username or password. Attempt " + attempts;
    }
};