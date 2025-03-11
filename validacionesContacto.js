/*
Validaciones del formulario de contacto
*/

function validaciones(event) {
  //Obtenemos el nombre del formulario para realizar validciones
  let nombreInput = document.getElementById("name");
  //Limpiamos el nombre en caso de que tenga espacios
  let valorNombre = nombreInput.value.trim();

  let errores = []; //Para acumular los mensajes de las validaciones y presentarlas al usuario

  //Validamos que el campo no este vacio
  if (valorNombre === "") {
    errores.push("Captura tu nombre");
  }
  //Validamos que tenga una longitud minima de 5 caracteres
  if (valorNombre.length < 5) {
    errores.push("El nombre es muy corto");
  }
  //Validamos que contenga un espacio invitando a que se captura el apeyido
  if (!valorNombre.includes(" ")) {
    errores.push("Por favor captura tu apellido");
  }

  //Obtenemos el numeor del movil para validarlo.
  telefonoInput = document.getElementById("movil");
  //Limpoamos el telefono en caso de que tenga espacio
  valorTelefono = telefonoInput.value.trim();
  //Validamos el dato del telefono movil
  if (valorTelefono === "") {
    errores.push("No capturaste tu numero de mobvil");
  } else if (valorTelefono.length < 10) {
    errores.push("EL número de movil no es valido, por favor revisalo.");
  }

  if(errores.length > 0){
    event.preventDefault();
    alert(errores.join("\n"));
  }


}

document.addEventListener("DOMContentLoaded", function () {
  //let buttonSubmit = document.getElementById("submitButton");
  //buttonSubmit.onclick = vlidaciones;
   let formulario = document.querySelector("form");

   formulario.addEventListener("submit", validaciones);
});
