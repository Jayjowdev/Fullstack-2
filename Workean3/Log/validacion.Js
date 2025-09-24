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
          window.location.href = "../logeado.html";
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

function finalizarCompra() {
  // Mostrar alerta
  alert(" ¡Logeado con exito! Ahora serás redirigido...");

  // Redirigir a otra página (ej: salida.html)
  window.location.href = "../logeado.html";
}