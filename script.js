document.addEventListener("DOMContentLoaded", function () {

  const contenedor = document.getElementById("clienteFotoContainer");
  const imagen = document.getElementById("clienteFoto");

  // Ocultar foto por defecto hasta verificar si existe
  contenedor.style.display = "none";
  imagen.alt = "";

  // Si la imagen ya cargó antes de que el JS se ejecutara
  // (ocurre al previsualizar localmente en Web Code)
  if (imagen.complete && imagen.naturalWidth > 0) {
    contenedor.style.display = "block";
  }

  // Mostrar foto solo si carga correctamente
  imagen.onload = function () {
    contenedor.style.display = "block";
  };

  // Mantener oculto si la imagen no existe o falla
  imagen.onerror = function () {
    contenedor.style.display = "none";
  };

  // Ocultar secciones si están vacías
  ['nombre', 'mensaje'].forEach(id => {
    const el = document.getElementById(id);
    if (el && !el.innerText.trim()) {
      el.style.display = 'none';
    }
  });

});