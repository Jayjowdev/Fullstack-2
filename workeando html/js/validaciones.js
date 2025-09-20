document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('loginForm');
  const usuario = document.getElementById('usuario');
  const password = document.getElementById('password');
  const listInputs = document.querySelectorAll(".form-input");

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // limpiar mensajes previos
    listInputs.forEach(el => el.lastElementChild.innerHTML = "");

    let valido = true;

    if (!usuario.value.trim()) {
      mostrarError("usuario", "Por favor ingresa el usuario");
      valido = false;
    }

    if (!password.value.trim()) {
      mostrarError("password", "Por favor ingresa la contraseña");
      valido = false;
    }

    // simulamos login válido con usuario "admin" y pass "1234"
    if (valido) {
      if (usuario.value === "admin" && password.value === "1234") {
       
        // redirigir a otra página
        window.location.href = "../indexin.html";
      } else {
        mostrarError("password", "Usuario o contraseña incorrectos");
      }
    }
  });

  function mostrarError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
  }  

  
});

function cerrarSesion() {
            // Ejecutar el código JavaScript
            alert("Mensaje de Alerta ¡¡¡");
            console.log("Este es un mensaje de consola ¡¡¡");
            document.write("Programacion WEB");
            
            // Redirigir después de ejecutar el script
            window.location.href = "index.html";
        }


document.addEventListener('DOMContentLoaded',function(){

  const nombreCompleto    = document.getElementById('nombre');
  const correoElectronico = document.getElementById('correo');
  const telefono          = document.getElementById('telefono');
  const asunto            = document.getElementById('asunto');
  const mensaje           = document.getElementById('mensaje');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let valido = true

    if (!nombreCompleto.value.trim()) {
      mostrarError("usuario", "Por favor ingresa el usuario");
      valido = false;
    } else if (nombreCompleto.value.length/**lenght es el minimo */ < 2 || nombreCompleto.value.length/** este el es el maximo */ > 50){
      mostrarError("nombre", " debe estar entre los 2 caracteres y con el meximo de 50");
      valido = false;

    }else if (!/^[A-Za-z\s]+$/.test(nombreCompleto.value)){
      mostrarError("nombre", "solo puede contener letras y espacios");
      valido = false;
    }


    // Validación del correo electrónico
    if (!correoElectronico.value.trim()) {
       mostrarError("correo", "Por favor ingresa tu correo electrónico.");
      valido = false;
    }else if (correoElectronico.value.length >100){
      mostrarError("supero el maximo de caracteres")
      valido=false
    }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correoElectronico.value)) {
      mostrarError("correo", "Por favor ingresa un correo válido (ej. usuario@dominio.com).");
      valido = false;
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // Validación del teléfono
    



    // Validación del asunto
    if (!asunto.value.trim()) {
      mostrarError("asunto", "Por favor ingresa el asunto.");
      valido = false;
    }else if(asunto.value.length < 3 || asunto.value.length >100){
      mostrarError("su minimo es de 3 y el maximo de caracteres es 100")
      valido=false
    }

    // Validación del mensaje
    if (!mensaje.value.trim()) {
      mostrarError("mensaje", "Por favor ingresa un mensaje.");
      valido = false;
    }else if(mensaje.value.length <10 || mensaje.value.length >500){
      mostrarError("10 caracteres minimo y 500 max")

    }

    
  });

  function mostrarError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
  }  

});

document.addEventListener('DOMContentLoaded',function(){

  const nombreCompleto    = document.getElementById('nombreR');
  const correoElectronico = document.getElementById('correoR');
  const nombreUsuario     = document.getElementById('usuarioR');
  const contraseña        = document.getElementById('contrasenaR');
  const concontra         = document.getElementById('2contrasenaR');
  const telefono          = document.getElementById('telefonoR');
  const termYcondi        = document.getElementById('terminosycondicionesR');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!nombreCompleto.value.trim()) {
      mostrarError("usuario", "Por favor ingresa el usuario");
      valido = false;
    } else if (nombreCompleto.value.length/**lenght es el minimo */ < 2 || nombreCompleto.value.length/** este el es el maximo */ > 50){
      mostrarError("nombre", " debe estar entre los 2 caracteres y con el meximo de 50");
      valido = false;

    }else if (!/^[A-Za-z\s]+$/.test(nombreCompleto.value)){
      mostrarError("nombre", "solo puede contener letras y espacios");
      valido = false;
    }

    if (!correoElectronico.value.trim()) {
       mostrarError("correo", "Por favor ingresa tu correo electrónico.");
      valido = false;
    }else if (correoElectronico.value.length >100){
      mostrarError("supero el maximo de caracteres");
      valido=false
    }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correoElectronico.value)) {
      mostrarError("correo", "Por favor ingresa un correo válido (ej. usuario@dominio.com).");
      valido = false;
    }

    if (!nombreUsuario.value.trim()){

      mostrarError("Debe poner algo aqui");
      valido = false;

    }else if (nombreUsuario.value.length <4 || nombreUsuario.value.length >20){
      mostrarError("Debe estar entre las 4 y 20 letras");
      valido = false;
    }

    if (!contraseña.value.trim()){
      mostrarError("Vacio")
      valido = false;
    }else if(contraseña.value.length <8){
      mostrarError("su contra debe ser de minimo 8 caracteres")
      valido = false;
    }

    if (concontra.value !== contraseña.value){
      mostrarError("No concuerda la contraseña")
      valido = false

    }

    if (telefono.value.trim() && !/^\d{8,12}$/.test(telefono.value)) {
        mostrarError("telefono", "El teléfono debe tener entre 8 y 12 dígitos y solo contener números.");
        valido = false;
      }


    

    
  });
  function mostrarError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput}`);
    elemento.lastElementChild.innerHTML = mensaje;
  }  

});

