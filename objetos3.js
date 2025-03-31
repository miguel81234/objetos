let filaEspera = {
    clientes: [],
    capacidad: 7,

    agregar: function (nombre, edad, id, servicio) {
        if (filaEspera.clientes.length < filaEspera.capacidad) {
            let cliente = { 
                nombre, 
                edad, 
                id, 
                servicio 
            };
            filaEspera.clientes.push(cliente);
            console.log(`${nombre} ha sido agregado a la cola.`);
        } else {
            console.log("La cola está llena.");
        }
    },

    atender: function () {
        if (filaEspera.clientes.length > 0) {
            let atendido = filaEspera.clientes.shift();
            console.log(`${atendido.nombre} (ID: ${atendido.id}) ha sido atendido para ${atendido.servicio}.`);
        } else {
            console.log("No hay clientes en la cola.");
        }
    },

    mostrarClientes: function () {
        if (filaEspera.clientes.length > 0) {
            console.log("Clientes en la cola:");
            for (let i = 0; i < filaEspera.clientes.length; i++) {
                let c = filaEspera.clientes[i];
                console.log(`${i + 1}. ${c.nombre} (Edad: ${c.edad}, ID: ${c.id}, Servicio: ${c.servicio})`);
            }
        } else {
            console.log("La cola está vacía.");
        }
    }
};

// Pruebas
filaEspera.agregar("Juan", 25, 101, "Consulta médica");
filaEspera.agregar("Maria", 30, 102, "Trámite bancario");
filaEspera.agregar("Carlos", 28, 103, "Renovación de licencia");
filaEspera.agregar("Jose", 22, 104, "Entrega de documentos");
filaEspera.agregar("Marina", 35, 105, "Asesoría legal");
filaEspera.agregar("Eduar", 27, 106, "Revisión técnica");
filaEspera.agregar("El Gey", 40, 107, "Pago de servicios");
filaEspera.atender();
filaEspera.mostrarClientes();
