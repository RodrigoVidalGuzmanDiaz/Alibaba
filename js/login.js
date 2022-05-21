export var siguiente = document.getElementById("siguiente");
export var olvideMiContraseña = document.getElementById('olvideMiContraseña')
export var botonVer = document.getElementById("botonVer");
export var inputPassword = document.getElementById("password")

botonVer.addEventListener('click', verContraseña)

export function verContraseña(){
    if(inputPassword.type == "password"){
        inputPassword.type = "text"
        botonVer.src = "https://tinyurl.com/2p8pm2yx";
    }else{
        inputPassword.type = "password"
        botonVer.src = "https://tinyurl.com/2dzcdfec";
    }
}

import {user} from "./user.js";
import {administrador} from "./administrador.js";
import {olvide} from "./administrador.js";

export function login(username,password){

    for(let i = 0; i<=7;i++){
        if(username === user[i][1] || username === user[i][5]){
            if(password === user[i][2]){
                console.log("Contraseña correcta");
                administrador();
            }else{
                console.log('Constraseña incorrecta');
                olvide();
            }
        }else {
            console.log("Verificar Campos");
            olvide();
        }
    }

}


