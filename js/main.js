/*Inicio de sesión*/


/* Libreria temporal*/
import {data} from "./user.js";

import {login} from "./login.js";


/*var user = document.getElementById('username').value;
var password = document.getElementById('password').value;*/
    let email = 'carol.campbell@aol.com';
    let password = "orange01";
   
    let entrar = document.getElementById('entrar').addEventListener("click", entra);

    function entra(){
    
    if(email = true, password = true){
        
        login(email, password);
        console.log('puedes continuar');
    }
}




/*Login del programa*/

