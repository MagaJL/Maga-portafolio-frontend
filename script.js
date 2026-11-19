// Busco TODOS los elementos con la clase "numero" y los guardo en una lista
var numeros = document.querySelectorAll(".numero");

// Esta variable recuerda si el contador ya empezó, para que no se repita
var yaEmpezo = false;

/* Función 1: Hace subir un número poco a poco */
function contar(elemento) {
  var meta = Number(elemento.dataset.meta); // el número final (15, 1 o 100)
  var actual = 0; // empieza en 0

  // setInterval repite el código de adentro cada 40 milisegundos
  var reloj = setInterval(function () {
    actual = actual + 1; // suma 1
    elemento.textContent = actual; // muestra el número en la página

    // Cuando llega a la meta, se detiene el reloj
    if (actual >= meta) {
      clearInterval(reloj);
    }
  }, 40);
}

/* Función 2: Revisa si ya se ven los números en la pantalla */
function revisarScroll() {
  // Si ya empezó, no hago nada
  if (yaEmpezo) return;

  // getBoundingClientRect().top = a cuántos píxeles del borde de arriba está el primer número
  var posicion = numeros[0].getBoundingClientRect().top;

  // Si está dentro de la altura de la pantalla, empieza el conteo
  if (posicion < window.innerHeight) {
    yaEmpezo = true;
    for (var i = 0; i < numeros.length; i++) {
      contar(numeros[i]);
    }
  }
}

// Cada vez que la persona hace scroll, se ejecuta revisarScroll()
window.addEventListener("scroll", revisarScroll);