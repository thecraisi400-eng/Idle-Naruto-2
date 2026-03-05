const JutsuSystem = {
    // Lista de técnicas disponibles
    library: [
        { name: "Rasengan", cost: 500, power: 1200, levelReq: 10 },
        { name: "Chidori", cost: 450, power: 1100, levelReq: 12 },
        { name: "Kage Bunshin", cost: 200, power: 500, levelReq: 5 },
        { name: "Modo Sabio", cost: 1500, power: 3000, levelReq: 50 }
    ],

    // Función para ejecutar un Jutsu
    castJutsu(jutsuName) {
        const jutsu = this.library.find(j => j.name === jutsuName);
        
        if (!jutsu) return "Jutsu no encontrado";
        
        if (Player.level < jutsu.levelReq) {
            console.log("Nivel insuficiente para usar " + jutsuName);
            return false;
        }

        if (Player.useChakra(jutsu.cost)) {
            console.log(`¡${jutsu.name} ejecutado! Daño: ${jutsu.power}`);
            // Aquí llamaríamos a la función de daño en el enemigo
            return jutsu.power;
        } else {
            alert("¡No tienes suficiente Chakra!");
            return false;
        }
    }
};

console.log("Librería de Jutsus cargada.");