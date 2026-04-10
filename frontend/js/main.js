document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/clientes')
        .then(response => response.json())
        .then(data => {

            const elemento = document.getElementById("table-cliente");

            for (let i = 0; i < data.length; i++) {
                // data[i], muestra  en forma de array
                let cliente = data[i]
                //alt + 96 para `, muestra en froma de array
                let fila = `
                        <tr>
                        <td>${cliente.ID}</td>
                        <td>${cliente.nombre}</td>
                        <td>${cliente.apellido}</td>
                        <td>${cliente.DNI}</td>
                        <td>${cliente.telefono}</td>
                        <td>${cliente.direccion}</td>

                        <td> 
                        <button class="btn btn-outline-primary btn-sm me-2">
                            <i class="fa fa-pencil"></i>
                        </button>

                        <button class="btn btn-outline-danger btn-sm">
                            <i class="fa fa-trash"></i>
                        </button> 
                        </td>
                           `
                elemento.innerHTML += fila
                //muestro los resultados en consola  
                //console.log(cliente)
                console.log(cliente)
            }
        });
});