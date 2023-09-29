
window.onload = function () {
    var isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {        
        showWelcomePage();
    }
};

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "Bella" && password === "qwe123") {        
        localStorage.setItem("isLoggedIn", "true");
        isLoggedIn = true;
        showWelcomePage();
    } else {
        alert("Fel användarnamn eller lösenord. Försök igen.");
    }

    return false;
}

function logout() {    
    localStorage.removeItem("isLoggedIn");
    isLoggedIn = false;
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.querySelector(".welcome-page").style.display = "none";
    document.querySelector(".login-page").style.display = "block";
}
