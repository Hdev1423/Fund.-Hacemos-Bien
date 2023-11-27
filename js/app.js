function almacenarUsuario() {
    // Captura los datos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("password").value;
    var genero = document.getElementById("genero").value;

    // Crea un objeto con los datos del usuario
    var data = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        contraseña: contraseña,
        genero: genero
    };

    // Convierte el objeto en una cadena JSON
    var dataJSON = JSON.stringify(data);

    // Guarda los datos del usuario en el localStorage
    localStorage.setItem('usuario', dataJSON);

    // Guarda el nombre del usuario en localStorage para usarlo en la barra de navegación
    localStorage.setItem('nombreUsuario', nombre);

    // Redirige al usuario a la página de inicio de sesión
    window.location.href = "Login.html";
}

function iniciarSesion() {
    
    var correo = document.getElementById("correo").value;
    var password = document.getElementById("password").value;
  
    
    var usuarioJSON = localStorage.getItem('usuario');
  
    if (usuarioJSON) {
     
        var usuario = JSON.parse(usuarioJSON);
  
        
        if (correo === usuario.correo && password === usuario.contraseña) {
            alert("Inicio exitoso")
            window.location.href = 'index.html';
        } else {
            
            alert('Cuenta no registrada o datos incorrectos.');
        }
    } else {
        
        alert('Cuenta no registrada o datos incorrectos.');
    }
  }

  