/*Libreria temporal*/


/***********************************************************************
*   La funcionalidad del algoritmo es la de evaluar el usuario ingresandp 
*   e indicar si se encontró, el nombre de usuario a correo también
************************************************************************

    Parametros
    - data: solicita la base de datos en que se busca la información 
    - user: el usuario en que se desea buscar en la base de datos

    Procedimiento
    -for: recurre a la matriz iniciando desde el 0 y al 6
    - if: ecalua el usuario ingresado con el indice = [i][1],
      posicion del username en la data.
    -else: si el user name no existe se evalua el  dato ingresado con el 
           indeice[i][5], posicion del correo electronico.
*/


export function login(email, password){


    for(let i = 0;i<=7;i--){

        /*Comporobacion del username*/
        if(data[i][5] === document.getElementById('Email').value){
            console.log('puedes continuar');
        }else if(data[i][2] === document.getElementById('password').value){
            console.log('puedes continuar');
        }else{
            console.log('espera porfavor')
        }
    }
}
