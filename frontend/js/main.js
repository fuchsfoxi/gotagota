// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/clientes')
        .then(response => response.json())
        .then(data => {

            const elemento = document.getElementById("table-cliente")

            for (let i = 0; i < data.length ; i++){
                
            }
        })
});
