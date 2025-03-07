/*
Validaciones del formulario de contacto
*/

function vlidaciones(){
    let nombreInput = document.getElementById("name");
    let valorNombre = nombreInput.value.trim();

    let errores = []; //Para acumular los mensajes de las validaciones y presentarlas al usuario

    //Validamos que el campo no este vacio
    if(valorNombre === ""){
        errores.push("Captura tu nombre");
    }
    //Validamos que tenga una longitud minima de 5 caracteres
    if(valorNombre.length < 5){
        errores.push("El nombre es muy corto");
    }
    //Validamos que contenga un espacio invitando a que se captura el apeyido
    if(!valorNombre.includes(" ")){
        errores.push("Por favor captura tu apellido");
        alert(errores.join("\n"));
    }
}

let buttonSubmit = document.getElementById("submitButton");

buttonSubmit.onclick = vlidaciones;
