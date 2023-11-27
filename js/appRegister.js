var form = document.getElementById("box_form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var email = document.getElementById("correo").value;
    var name = document.getElementById("nombre").value;
    var password = document.getElementById("password").value;
    var lastname = document.getElementById("apellido").value;
    var genero = document.getElementById("genero").value;


    var formData = {
        email: email ,
        nombre: name ,
        genero: genero,
        apellido: lastname,
        password: password
    };

    var formDataJson = JSON.stringify(formData);

    localStorage.setItem("formData", formDataJson);

    window.location.href = "Login.html";

});