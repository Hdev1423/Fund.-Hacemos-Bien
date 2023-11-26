var form = document.getElementById("box_form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var email = document.getElementById("correo").value;
    var name = document.getElementById("nombre").value;
    var password = document.getElementById("password").value;

    var formData = {
        Email: email ,
        Nombre: name ,
        Password: password
    };

    var formDataJson = JSON.stringify(formData);

    localStorage.setItem("formData", formDataJson);

    window.location.href = 'Login.html';

});