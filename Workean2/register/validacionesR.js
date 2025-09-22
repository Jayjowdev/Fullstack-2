document.addEventListener('DOMContentLoaded', function () {
  const form            = document.getElementById('registerform');
  const nombreCompleto  = document.getElementById('nombreR');
  const correoElectronico = document.getElementById('correoR');
  const nombreUsuario   = document.getElementById('usuarioR');
  const contraseña      = document.getElementById('contrasenaR');
  const concontra       = document.getElementById('contrasenaR2');
  const telefono        = document.getElementById('telefonoR');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    let valido = true;

    // Limpio errores previos
    document.querySelectorAll(".mensajeError").forEach(e => e.innerHTML = "");

    if (!nombreCompleto.value.trim()) {
      mostrarError("nombreR", "Por favor ingresa tu nombre");
      valido = false;
    }

    if (!correoElectronico.value.trim()) {
      mostrarError("correoR", "Por favor ingresa tu correo electrónico.");
      valido = false;
    }

    if (!nombreUsuario.value.trim()) {
      mostrarError("usuarioR", "Por favor ingresa un nombre de usuario");
      valido = false;
    }

    if (!contraseña.value.trim()) {
      mostrarError("contrasenaR", "La contraseña no puede estar vacía");
      valido = false;
    } else if (contraseña.value.length < 8) {
      mostrarError("contrasenaR", "La contraseña debe tener mínimo 8 caracteres");
      valido = false;
    }

    if (concontra.value !== contraseña.value) {
      mostrarError("contrasenaR2", "Las contraseñas no coinciden");
      valido = false;
    }

    if (telefono.value.trim() && !/^\d{8,12}$/.test(telefono.value)) {
      mostrarError("telefonoR", "El teléfono debe tener entre 8 y 12 dígitos");
      valido = false;
    }

    // 👉 Solo redirige si todo es válido
    if (valido) {
      alert("Usuario Resgistrado.");
      window.location.href = "pagina_principal.html"; // ⬅️ aquí pones tu página destino
    }
  });

  function mostrarError(claseInput, mensaje) {
    let elemento = document.querySelector(`.${claseInput} .mensajeError`);
    if (elemento) elemento.innerHTML = mensaje;
  }
});
