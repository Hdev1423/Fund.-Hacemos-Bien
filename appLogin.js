const form = document.getElementById('box_form');
const emailInput = document.getElementById('correo');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {

  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  const storedEmail = localStorage.getItem('Email');
  const storedPassword = localStorage.getItem('Password');

  if (emailValue === storedEmail && passwordValue === storedPassword) {
    alert('Inicio de sesión exitoso!');
  } else {
    alert('Las credenciales son incorrectas. Por favor, verifica tus datos.');
  }
});