// Show / Hide Password
const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

toggle.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        toggle.innerHTML = "🙈";
    } else {
        password.type = "password";
        toggle.innerHTML = "👁️";
    }

});

// Login Form
const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.querySelector("input[type='email']").value;
    const pass = password.value;

    if (email === "" || pass === "") {
        alert("Please fill all the fields.");
    } else {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    }

});