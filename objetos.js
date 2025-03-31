let hotel = {
    habitaciones: {
        1: { ocupada: true },
        2: { ocupada: false },
        3: { ocupada: true },
        4: { ocupada: false },
        5: { ocupada: true }
    },

    mostrarEstado() {
        console.clear();

        let disponibles = [];
        let ocupadas = [];

        for (let num in hotel.habitaciones) {
            if (hotel.habitaciones[num].ocupada) {
                ocupadas.push(`Habitación ${num}`);
            } else {
                disponibles.push(`Habitación ${num}`);
            }
        }

        console.log("** Estado de las habitaciones **");
        console.log("Disponibles:");
        for (let habitacion of disponibles) {
            console.log(habitacion);
        }
        if (disponibles.length === 0) console.log("Ninguna");

        console.log("Ocupadas:");
        for (let habitacion of ocupadas) {
            console.log(habitacion);
        }
        if (ocupadas.length === 0) console.log("Ninguna");
    }
};

hotel.mostrarEstado();
