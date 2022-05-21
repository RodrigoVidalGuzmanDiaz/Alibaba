/* Elementos del dom */
import {siguiente} from './login.js';
import {olvideMiContraseña} from './login.js'

export function olvide(){
    olvideMiContraseña.classList.add("activar");
}

export function administrador(){
    siguiente.classList.add("activar");
}
