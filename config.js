// CONFIGURACIÓN GLOBAL DEL JUEGO
const CONFIG = {
    GAME_NAME: "Naruto Idle - Sennin Mode V2",
    VERSION: "2.0.0",
    MAX_LEVEL: 100,
    BASE_EXP_REQUIRED: 10000,
    SAVE_KEY: "naruto_idle_progreso", // Para el sistema No-Ads de guardado local
    
    // Multiplicadores de eventos
    GOLD_MULTIPLIER: 1,
    EXP_MULTIPLIER: 1,
    
    // Colores del sistema (coinciden con tu CSS)
    COLORS: {
        SENNIN_ORANGE: "#ff9100",
        HEALTH: "#ff3e3e",
        CHAKRA: "#2e86de"
    }
};

console.log("Configuración cargada correctamente.");

/* ----------------------------------------------------------- */
/* CONTROL ABSOLUTO DE POSICIÓN Y TAMAÑO (SECCIÓN HEROE)       */
/* Puedes cambiar los % para mover o escalar cada elemento     */
/* ----------------------------------------------------------- */

const HERO_LAYOUT = {
    // Foto del Personaje
    PHOTO: {
        top: "10%",
        left: "50%", // 50% para centrarla
        scale: "100%", // Tamaño (ej: 120% para agrandar)
        translate: "-50%" // Ayuda a centrar horizontalmente
    },
    
    // Nombre del Personaje (Arriba de la foto)
    NAME: {
        top: "5%",
        left: "50%",
        scale: "90%",
        translate: "-50%"
    },

    // Columna de Stats Izquierda (Nivel, HP, MP, ATK, DEF)
    STATS_LEFT: {
        top: "35%",
        left: "5%",
        scale: "100%"
    },

    // Columna de Stats Derecha (Velocidades, Evasión, Crit, Oro)
    STATS_RIGHT: {
        top: "35%",
        right: "5%",
        scale: "100%"
    },

    // Rango Actual (Debajo de la foto)
    RANK: {
        top: "65%",
        left: "50%",
        scale: "110%",
        translate: "-50%"
    },

    // Línea Divisoria Blanca
    DIVIDER: {
        top: "72%",
        left: "5%",
        width: "90%"
    },

    // Cuadrícula de Equipo (6 Ranuras)
    EQUIPMENT: {
        top: "75%",
        left: "0%",
        scale: "100%"
    }
};

console.log("Control de diseño Heroe cargado.");