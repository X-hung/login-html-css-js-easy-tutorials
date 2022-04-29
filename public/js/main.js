let btnLogin = document.getElementById("login");
let btnRegister = document.getElementById("register");
let btnBg = document.getElementById("btn-bg")

function register() {
    btnLogin.style.left = "-400px";
    btnRegister.style.left = "50px";
    btnBg.style.left = "110px";
}

function login() {
    btnLogin.style.left = "50px";
    btnRegister.style.left = "450px";
    btnBg.style.left = "0";
}