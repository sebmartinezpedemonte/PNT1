function validacionContrasena(){
    var contrasena = document.getElementById('pwd').value;
    var repetir = document.getElementById('pwd-repeat').value;

    if (contrasena == repetir){
        return true;
    }else{
        alert('Las contraseñas deben ser iguales!!!');
        pwd-repeat.focus();
        return false;
    }
}