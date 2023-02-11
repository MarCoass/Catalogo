const contenedor = document.getElementById("cuerpo");
let arrayNodos = [];
for (i = 0; i < array.length; i++) {
  if(array[i]["Disponible"]=='si'){

  
  let nombreEncode = encodeURIComponent(
    "Hola! Me interesa el set " +
      array[i]["Descripcion"] +
      " con forma " +
      array[i]["Forma"]
  );
  let urlMensaje = "https://wa.me/542994677550?text=" + nombreEncode;
  //crea una tarjeta por cada nodo
  let nodo = document.createElement("div");
  let card =
    '<div class="card m-2" style="width: 18rem">' +
    '<img src="http://drive.google.com/uc?export=view&id=' +
    array[i]["FileId"] +
    '" class="card-img-top" alt="..." />' +
    '<div class="card-body">' +
    '<h5 class="card-title">' +
    array[i]["Descripcion"] +
    "</h5>" +
    "</div>" +
    '<ul class="list-group list-group-flush">' +
    '<li class="list-group-item">Precio: $' +
    array[i]["Precio"] +
    "</li>" +
    '<li class="list-group-item">Largo aproximado: ' +
    array[i]["Largo"] +
    " cm</li>" +
    '<li class="list-group-item">Forma: ' +
    array[i]["Forma"] +
    "</li>" +
    "</ul> " +
    '<div class="d-grid gap-2 col-6 mx-auto"><a href="' +
    urlMensaje +
    '" class="btn btn-sm btn-outline-rosa"> <i class="bi bi-whatsapp" style="font-size: 1rem; " ></i>  Comprar</a></div>' +
    "</div>";
  nodo.innerHTML = card;
  arrayNodos.push(card);
  contenedor.appendChild(nodo);} 
}
console.log(arrayNodos);
