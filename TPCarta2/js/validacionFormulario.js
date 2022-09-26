function validarFormulario() {

    if (confirm("¿Está seguro de enviar el formulario?")) {

        let nombreValido = ValidaLetra(document.getElementById('nombre'));
        let apellidoValido = ValidaLetra(document.getElementById('apellido'));
        let emailValido = ValidaEmail(document.getElementById('email'));
        let contrasenaValida = ValidaContrasena(document.getElementById('pwd'), document.getElementById('pwd-repeat'));
        //let fechaValida = ValidaFecha(document.getElementById('birthday'));        

        if (nombreValido) {
            if (apellidoValido) {
                //if(fechaValida){
                if (emailValido) {
                    if (contrasenaValida) {
                        alert('Datos enviados correctamente!');
                        return true;
                    }
                }
                //}                
            }
        }
        return false;
    } else {
        return false;
    }
}

function ValidaLetra(texto) {
    var letras = /^[A-Za-z]+$/;

    if (texto.value.match(letras)) {
        return true;
    }
    else {
        alert('Ingresaste un caracter invalido!');
        texto.focus();
        return false;
    }
}

function ValidaEmail(email) {
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value.match(mail)) {
        return true;
    }
    else {
        alert("Ingresaste un email invalido! De ser de la forma nombre@dominio.com");
        email.focus();
        return false;
    }
}

function ValidaContrasena(contrasena, repetir) {

    if (contrasena.value == repetir.value) {
        return true;
    } else {
        alert('Las contraseñas deben ser iguales!!!');
        repetir.focus();
        return false;
    }
}