document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".agregar");
  const listaCarrito = document.getElementById("lista-carrito");
  const totalElemento = document.getElementById("total");
  const finalizarBtn = document.getElementById("finalizar");

  let carrito = [];

  // Agregar plan al carrito
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const plan = boton.getAttribute("data-plan");
      const precio = parseInt(boton.getAttribute("data-precio"));

      carrito = [{ plan, precio }];
      renderCarrito();
    });
  });

  // Mostrar carrito
  function renderCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
      total += item.precio;

      const li = document.createElement("li");
      li.textContent = `${item.plan} - $${item.precio}`;
      
      // Botón eliminar
      const btnEliminar = document.createElement("button");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.style.marginLeft = "10px";
      btnEliminar.addEventListener("click", () => {
        carrito.splice(index, 1);
        renderCarrito();
      });

      li.appendChild(btnEliminar);
      listaCarrito.appendChild(li);
    });

    totalElemento.textContent = total;
  }

  // Finalizar compra
  finalizarBtn.addEventListener("click", () => {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío ");
      return;
    }

    
    carrito = [];
    renderCarrito();
  });
});

function finalizarCompra() {
  alert("✅ ¡Gracias por tu compra! Ahora serás redirigido...");

  window.location.href = "../logeadoP.html";
}

