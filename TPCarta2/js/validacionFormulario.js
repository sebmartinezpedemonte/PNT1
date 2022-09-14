function validacionContrasena(){
    var contrasena = document.getElementById('pwd');
    var repetir = document.getElementById('pwd-repeat');

    if (contrasena == repetir){
        return true;
    }else{
        alert('Las contraseñas deben ser iguales!!!');
        pwd-repeat.focus();
        return false;
    }
}