
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

toggle.addEventListener("click", function() {
    if (password.type === "password") {
        password.type = "text";
        toggle.textContent = "Hide";
    } else {
        password.type = "password";
        toggle.textContent = "Show";
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = password.value;

    if (pass.length < 6) {
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters!";
        return;
    }

    message.style.color = "green";
    message.textContent = "Frontend validation successful!";
});

document.getElementById("forgotPassword")
.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Password recovery feature coming soon!");
});
