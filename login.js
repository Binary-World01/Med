function showLogin(role) {
    document.getElementById("doctor-login").style.display = role === "doctor" ? "block" : "none";
    document.getElementById("patient-login").style.display = role === "patient" ? "block" : "none";
}

// Login function
function loginUser(event, role) {
    event.preventDefault();

    let username = document.getElementById(`${role}-username`).value;
    let password = document.getElementById(`${role}-password`).value;
    let errorMessage = document.getElementById(`${role}-error`);

    /* 
    // Example code for database authentication (PHP + MySQL)
    fetch('database_connect.php', {
        method: 'POST',
        body: JSON.stringify({ role, username, password }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem("loggedIn", role);
            window.location.href = role === "doctor" ? "dash_doctor.html" : "dash_patient.html";
        } else {
            errorMessage.innerText = "Invalid username or password";
            errorMessage.style.display = "block";
        }
    });
    */

    // Simulated login (Remove after connecting database)
    if (username === "admin" && password === "password") {
        localStorage.setItem("loggedIn", role);
        window.location.href = role === "doctor" ? "dash_doctor.html" : "dash_patient.html";
    } else {
        errorMessage.innerText = "Invalid username or password";
        errorMessage.style.display = "block";
    }
}

// Check login status on dashboard pages (dash_doctor.html / dash_patient.html)
function checkLogin(role) {
    if (localStorage.getItem("loggedIn") !== role) {
        window.location.href = "login.html";
    }
}

function logoutUser() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}
