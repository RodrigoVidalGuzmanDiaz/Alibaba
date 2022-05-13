/*Inicio de sesión*/


/* Libreria temporal*/
import {user} from "./user.js";

import {login} from "./login.js";


var entrar = document.getElementById('entrar')




function entra(){
    entrar.classList.add('entra');
    let user_input = 'carol.campbell@aol.com';
    let pass = "1234";

    login(user, user_input);
}
if(entrar = true){
    console.log('funcionoooo');
}