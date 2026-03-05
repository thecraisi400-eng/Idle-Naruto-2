/* player.js - Control del Personaje y Estadísticas */

const Player = {
    // Información Básica
    name: "Shinobi",
    level: 55,
    rank: "Chunin", // Aparecerá debajo de la foto
    gold: 1500,

    // Estadísticas de Combate (Columna Izquierda)
    hp: 500,
    maxHp: 500,
    mp: 200,
    maxMp: 200,
    atk: 125,
    def: 85,

    // Estadísticas Avanzadas (Columna Derecha)
    atkSpd: "1.2s",
    spd: 25,
    eva: "12%",
    crit: "15%",
    critDmg: "180%",

    // Sistema de Equipo (6 Ranuras)
    // Los niveles definen el color del borde según tu regla:
    // 1-5: Gris, 5-15: Verde, 15-25: Azul, 25-35: Morado, 35-50+: Rojo
    equipment: {
        head: { name: "Protector de Frente", level: 4, icon: "🪖" },
        chest: { name: "Chaleco Táctico", level: 12, icon: "🥋" },
        arms: { name: "Muñequeras de Cuero", level: 20, icon: "🧤" },
        legs: { name: "Sandalias Shinobi", level: 30, icon: "👞" },
        weapon: { name: "Kunai de Acero", level: 45, icon: "🗡️" },
        accessory: { name: "Anillo de Poder", level: 1, icon: "💍" }
    },

    // Función para actualizar estadísticas (útil para futuros eventos o equipo)
    refreshStats() {
        console.log("Estadísticas del jugador actualizadas.");
        // Aquí se pueden añadir lógicas de multiplicadores por eventos o clanes en el futuro.
    }
};

console.log("Datos del jugador cargados correctamente.");