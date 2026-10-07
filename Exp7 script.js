let attempts = 0;
const maxAttempts = 3;
let logs = [];

function logEvent(level, event) {
    const time = new Date().toISOString();

    logs.push({
        time: time,
        level: level,
        event: event
    });

    document.getElementById("logs").textContent =
        JSON.stringify(logs, null, 2);
}

function showError(message) {
    document.getElementById("message").textContent = message;
}

document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();

    try {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (attempts >= maxAttempts) {
            showError("Account temporarily locked.");
            logEvent("WARNING", "Login attempt after account lock");
            return;
        }

        if (username === "admin" && password === "Secure@123") {
            attempts = 0;
            showError("Login successful.");
            logEvent("INFO", "Successful login");
        } else {
            attempts++;

            showError("Invalid username or password.");
            logEvent("WARNING", "Failed login attempt");

            if (attempts >= maxAttempts) {
                logEvent("WARNING", "Account locked after repeated failures");
            }
        }
    } catch (error) {
        showError("An unexpected error occurred.");
        logEvent("ERROR", "Unexpected application error");
    }
};