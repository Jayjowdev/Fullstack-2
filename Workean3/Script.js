document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formSuscripcion");
    const mensaje = document.getElementById("mensaje");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita recargar la página
  
      let nombre = document.getElementById("nombre").value.trim();
      let email = document.getElementById("email").value.trim();
  
      // Validar nombre
      if (nombre.length < 2) {
        mensaje.className = "alert alert-danger mt-3";
        mensaje.textContent = " Ingresa un nombre válido.";
        mensaje.classList.remove("d-none");
        return;
      }
  
      // Validar email con expresión regular
      let regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!regexEmail.test(email)) {
        mensaje.className = "alert alert-danger mt-3";
        mensaje.textContent = " Ingresa un correo válido.";
        mensaje.classList.remove("d-none");
        return;
      }
  
      // Si pasa la validación
      mensaje.className = "alert alert-success mt-3";
      mensaje.textContent = " ¡Gracias por suscribirte!";
      mensaje.classList.remove("d-none");
  
      // Opcional: resetear formulario
      form.reset();
    });
  });