// FOTO: se muestra si la imagen carga correctamente; también oculta el nombre o mensaje si están vacíos.
document.addEventListener("DOMContentLoaded", function () {

  const contenedor = document.getElementById("clienteFotoContainer");
  const imagen = document.getElementById("clienteFoto");

  contenedor.style.display = "none";
  imagen.alt = "";

  if (imagen.complete && imagen.naturalWidth > 0) {
    contenedor.style.display = "block";
  }

  imagen.onload = function () {
    contenedor.style.display = "block";
  };

  imagen.onerror = function () {
    contenedor.style.display = "none";
  };

  ['nombre', 'mensaje'].forEach(id => {
    const el = document.getElementById(id);
    if (el && !el.innerText.trim()) {
      el.style.display = 'none';
    }
  });

});