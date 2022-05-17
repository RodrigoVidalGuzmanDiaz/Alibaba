
import {login} from "./login.js"

function verificación(o) {
    o.preventDefault();

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    //Programa login
    login(email,password);
}

// Acción del boton
var bt_entrar = document.querySelector("#log");
bt_entrar.addEventListener('submit',verificación);
