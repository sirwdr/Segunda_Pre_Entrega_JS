
let carrito = [];
let total = 0;
let listaCarrito = document.getElementById("listaCarrito");
let totalHTML = document.getElementById("total");


function agregarProducto(id) {

  let producto = "Producto " + id;
  
  carrito.push(producto);
  
  actualizarCarrito();
  
  total += 10;
  totalHTML.innerHTML = total;
}

function actualizarCarrito() {
  
  listaCarrito.innerHTML = "";
  
  
  carrito.forEach(function(producto) {
    let li = document.createElement("li");
    li.innerHTML = producto;
    listaCarrito.appendChild(li);
  });
}


function vaciarCarrito() {
  
  carrito = [];
  actualizarCarrito();
  total = 0;
  totalHTML.innerHTML = total;
}

