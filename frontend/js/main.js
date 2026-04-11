// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)
document.addEventListener("DOMContentLoaded", () => {
 fetch("http://localhost:8080/api/clientes")
  .then((response) => response.json())
  .then((data) => {
   //DOM --> <tbody id="table-cliente">
   const elemento = document.getElementById("table-cliente");
   for (let i = 0; i < data.length; i++) {
    //data[i], muestra en forma array
    let cliente = data[i];
    //alt + 96
    let fila = `
          <tr>
              <td>${cliente.id}</td>
              <td>${cliente.nombre}</td>
              <td>${cliente.apelllido}</td>
              <td>${cliente.dni}</td>
              <td>${cliente.telefono}</td>
              <td>${cliente.direccion}</td> 
              <td>
                <!-- Botón Editar (Azul) -->

               <button type="button" class="btn btn-outline-primary">
                <i class="fa-solid fa-pen-to-square"> </i> 
               </button>|


               <!-- Botón Eliminar (Rojo) -->
                <button id="btnEliminar" type="button" class="btn btn-outline-danger">
                   <i class="fa-solid fa-trash"> </i> 
                </button>
              </tr>

              

              `;

    //Etoquetas
    elemento.innerHTML += fila;
    //console.log(Cliente)
   }
  });
});



// EVENTO DE CLICK EN JAVASC
// Creamos una variable que almacene el DOM de ese elemento del boton

const btnDelete = document.getElementById("btnEliminar");
btnDelete.addEventListener("click", function () {
 alert("Eliminando....");

});


