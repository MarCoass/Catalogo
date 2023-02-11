const contenedor = document.getElementById("cuerpo");
let arrayNodos = [];
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
  //crea una tarjeta por cada nodo
  let nodo = document.createElement("div");
  let card =
    '<div class="card m-2" style="width: 18rem">' +
    '<img src="http://drive.google.com/uc?export=view&id='+array[i]["FileId"]+'" class="card-img-top" alt="..." />' +
    '<div class="card-body">' +
    '<h5 class="card-title">'+array[i]["Descripcion"]+'</h5>' +
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
    "</ul>" +
    "</div>";
  nodo.innerHTML= card;
  arrayNodos.push(card);
  contenedor.appendChild(nodo);
}
console.log(arrayNodos);
