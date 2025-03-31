let maquinaExpendedora = {
    productos: [
        { nombre: "Chocolate", cantidad: 2 },
        { nombre: "Galletas", cantidad: 3 },
        { nombre: "Refresco", cantidad: 1 },
        { nombre: "Caramelos", cantidad: 0 },
        { nombre: "Papas Fritas", cantidad: 4 }
    ],

    mostrarInventario: function () {
        console.log("Inventario de la máquina:");
        let productos = maquinaExpendedora.productos;

        for (let i = 0; i < productos.length; i++) {
            console.log(`${i}. ${productos[i].nombre} - Cantidad: ${productos[i].cantidad}`);
        }
    },

    comprarProducto: function (codigo) {
        let productos = maquinaExpendedora.productos;

        if (codigo < 0 || codigo >= productos.length) {
            console.log("Código inválido. Intente de nuevo.");
            return;
        }

        let producto = productos[codigo];

        if (producto.cantidad > 0) {
            console.log(`Producto entregado: ${producto.nombre}`);
            producto.cantidad--;
        } else {
            console.log(`El producto "${producto.nombre}" está agotado.`);
            maquinaExpendedora.sugerirProducto();
        }
    },

    sugerirProducto: function () {
        let productos = maquinaExpendedora.productos;
        let sugerencia = null;

        for (let i = 0; i < productos.length; i++) {
            if (productos[i].cantidad > 0) {
                sugerencia = productos[i];
                break;
            }
        }

        if (sugerencia) {
            console.log(`Sugerencia: Puede comprar ${sugerencia.nombre}`);
        } else {
            console.log("Lo sentimos, no hay productos disponibles.");
        }
    }
};

// Pruebas
maquinaExpendedora.mostrarInventario();
maquinaExpendedora.comprarProducto(2);
maquinaExpendedora.comprarProducto(2);
maquinaExpendedora.comprarProducto(3);
maquinaExpendedora.comprarProducto(1);
maquinaExpendedora.mostrarInventario();
