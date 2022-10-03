function validarFormulario() {

    if (confirm("¿Está seguro de enviar el formulario?")) {

        if (ValidaLetra(document.getElementById('nombre'))) {
            if (ValidaLetra(document.getElementById('apellido'))) {
                if (ValidaEmail(document.getElementById('email'))) {
                    if (ValidaContrasena(document.getElementById('pwd'))) {
                        if (ValidaRepetir(document.getElementById('pwd'), document.getElementById('pwd-repeat'))) {
                            if (ValidaEdad(document.getElementById('birthday'))) {
                                if (ValidaTyC(document.getElementById('tyc'))) {
                                    alert('Datos enviados correctamente!');
                                    return true;
                                }
                            }
                        }
                    }
                }
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
        alert('Ingresaste un ' + texto.name + ' invalido!');
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

function ValidaContrasena(contrasena) {
    let cantCaracter = contrasena.value.length;

    if (cantCaracter >= 4 && cantCaracter <= 8) {
        return true;
    } else {
        alert('Las contraseña debe tener entre 4 y 8 caracteres!!!');
        contrasena.value = '';
        contrasena.focus();
        return false;
    }
}

function ValidaRepetir(contrasena, repetir) {

    if (contrasena.value == repetir.value) {
        return true;
    } else {
        alert('Las contraseñas deben ser iguales!!!');
        repetir.value = '';
        repetir.focus();
        return false;
    }
}

function ValidaEdad(fechaNacimiento) {
    let today = new Date().toISOString().slice(0, 10)

    const startDate = fechaNacimiento.value;
    const endDate = today;

    const diffInMs = new Date(endDate) - new Date(startDate)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    if (startDate != '') {
        if (diffInDays >= 12) {
            return true;
        } else {
            alert('La edad mínima para registrarse es 12 años!!!');
            fechaNacimiento.focus();
            return false;
        }
    } else {
        alert('Ingrese una fecha válida!!!');
        fechaNacimiento.focus();
        return false;
    }
}

function ValidaTyC(respuesta) {
    console.log(respuesta.checked);
    if (respuesta.checked) {
        return true;
    } else {
        alert('Debe aceptar los Términos y Condiciones!!!');
        document.getElementById('tyc').focus();
        return false;
    }
}
