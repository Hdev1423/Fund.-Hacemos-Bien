const form = document.getElementById("box_form");
let emailInput = document.getElementById("correo");
let passwordInput = document.getElementById("password");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const storedEmail = localStorage.getItem("Email");
  const storedPassword = localStorage.getItem("Password");

  if (emailInput === "" || passwordInput === "") {
    alert('Por favor, completa todos los campos.');
    return;
  }

  if (emailInput === storedEmail && passwordInput === storedPassword) {
    alert('Inicio de sesión exitoso!');
    window.location.href = "index.html";
  } else {
    alert('Las credenciales son incorrectas. Por favor, verifica tus datos.');
  }
});