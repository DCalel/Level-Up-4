const request = new XMLHttpRequest();
let offset = Math.floor(Math.random() * 900);
const url = "https://pokeapi.co/api/v2/pokemon?offset=" + offset + "&limit=6";

request.open("GET", url);

request.onload = function () {
  const data = JSON.parse(this.response);
  let index = offset + 1;
  console.log("Nombre/Offset: " + offset);
  console.log("Imagen/Index: " + index);
  offset = Math.floor(Math.random() * 1153);

  // Creamos una tarjeta
  const containertarjeta = document.createElement("div");
  containertarjeta.setAttribute("class", "d-flex flex-wrap text-center pl-5");

  //
  data.results.forEach((pokemon) => {
    // Creamos una tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "card d-flex flex-column ms-2");
    tarjeta.setAttribute("style", "margin-top: 10px; margin-right: 10px;");

    // Creamos el la cabecera y el cuerpo de la tarjeta
    const cabeceraTarjeta = document.createElement("div");
    cabeceraTarjeta.setAttribute("class", "card-header ");

    const cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.setAttribute("class", "card-body ");

    // Creamos el encabezado y le asignamos el título
    const titulo = document.createElement("h5");
    titulo.setAttribute("class", "card-title");
    let upper = pokemon.name.charAt(0).toUpperCase();
    titulo.textContent = upper + pokemon.name.slice(1);

    const descripcion = document.createElement("img");
    descripcion.setAttribute("class", "w-24 h-24");
    descripcion.setAttribute(
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
        index +
        ".png"
    );

    descripcion.setAttribute("alt", "");
    index++;

    contenedor.appendChild(containertarjeta);
    // Agregamos la tarjeta
    containertarjeta.appendChild(tarjeta);
    // Agregamos la cabecera y el cuerpo a la tarjeta
    tarjeta.appendChild(cabeceraTarjeta);
    tarjeta.appendChild(cuerpoTarjeta);

    // Agregamos el título a la cabecera
    cabeceraTarjeta.appendChild(titulo);

    // Agregamos la descripción al cuerpo
    cuerpoTarjeta.appendChild(descripcion);
  });
};

request.send();
