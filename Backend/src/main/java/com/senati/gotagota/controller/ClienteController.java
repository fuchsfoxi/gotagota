package com.senati.gotagota.controller;


import com.senati.gotagota.entity.Cliente;
import com.senati.gotagota.service.ClienteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.ResponseEntity.ok;

// 3 ANOTACIONES
@RestController
// Define la URL Base de todos los END-POINT de esta clase
@RequestMapping("api/clientes")
// Esta anotacion permite que el font-end pueda llamar a API
// Si no ponemos esto, el navegador bloquea las peticiones por politicas CORS
@CrossOrigin(origins = "*")


public class ClienteController {
    //DECLARAMOS UNA VARIABLE COSTANTE
    private final ClienteService clienteService;
    private ResponseEntity<Object> ResponseEntinity;

    public ClienteController(ClienteService clienteService){
        this.clienteService = clienteService;
    }
    //GET /api/clientes -> devuelve  todos los clientes en formato JSON
    @GetMapping
    public List<Cliente> listar() {return clienteService.listarTodos();}
//POST /api8clientes -> para guardar un cliente
// cundo hay un void significa que no va a retonar ningun valor
    @PostMapping
    public ResponseEntity<Cliente> crear(@RequestBody Cliente cliente){
        return ResponseEntity.ok(clienteService.crearCliente(cliente));
    }


    // se esta creando la api de eleminar clientes
//DELETE /api/clientes /{id} -> elemina un cliente por su ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eleminar(@PathVariable long id){

        clienteService.eliminarCliente(id);
        return  ResponseEntity.noContent().build();

    }
}



