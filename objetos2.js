let hotel = {
    habitaciones: {
        1: { ocupada: true },
        2: { ocupada: false },
        3: { ocupada: true },
        4: { ocupada: false },
        5: { ocupada: true }
    },

    mostrarEstado: function () {
        console.clear();

        let disponibles = [];
        let ocupadas = [];

        let habitaciones = hotel.habitaciones; // Referencia directa a hotel.habitaciones

        for (let num in habitaciones) {
            if (habitaciones[num].ocupada) {
                ocupadas.push(`Habitación ${num}`);
            } else {
                disponibles.push(`Habitación ${num}`);
            }
        }

        console.log("** Estado de las habitaciones **");
        console.log("Disponibles:");
        disponibles.length ? disponibles.forEach(h => console.log(h)) : console.log("Ninguna");

        console.log("Ocupadas:");
        ocupadas.length ? ocupadas.forEach(h => console.log(h)) : console.log("Ninguna");
    }
};

hotel.mostrarEstado();
