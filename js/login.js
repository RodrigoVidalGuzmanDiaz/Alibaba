export var siguiente = document.getElementById("siguiente");

import {user} from "./user.js";
import { administrador } from "./administrador.js";

export function login(username,password){

    for(let i = 0; i<=7;i++){
        if(username === user[i][1] || username === user[i][5]){
            if(password === user[i][2]){
                console.log("Contraseña correcta");
                administrador();
            }else{
                console.log('Constraseña incorrecta');
            }
        }else {
            console.log("Verificar Campos");
        }
    }

}