
import {login} from "./login.js"
import {verContraseña} from "./login.js"


function verificación(o) {
    o.preventDefault();

    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    //Programa login
    login(username,password);
}

// Acción del boton
var bt_entrar = document.querySelector("#log");
bt_entrar.addEventListener('submit',verificación);
