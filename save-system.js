const SaveSystem = {
    // Guarda los datos del objeto Player en la memoria del navegador
    saveGame() {
        const gameData = {
            level: Player.level,
            gold: Player.gold,
            exp: Player.exp,
            hp: Player.hp,
            mp: Player.mp,
            lastSave: new Date().getTime()
        };
        
        localStorage.setItem(CONFIG.SAVE_KEY, JSON.stringify(gameData));
        console.log("¡Progreso de Shinobi guardado automáticamente!");
    },

    // Carga los datos al iniciar el juego
    loadGame() {
        const savedData = localStorage.getItem(CONFIG.SAVE_KEY);
        if (savedData) {
            const data = JSON.parse(savedData);
            Player.level = data.level;
            Player.gold = data.gold;
            Player.exp = data.exp;
            Player.hp = data.hp;
            Player.mp = data.mp;
            
            Player.updateUI();
            console.log("Datos de guardado recuperados con éxito.");
        } else {
            console.log("No se encontró partida guardada. Iniciando nueva aventura.");
        }
    },

    // Borrar progreso (para ajustes)
    resetGame() {
        if (confirm("¿Seguro que quieres borrar tu camino ninja?")) {
            localStorage.removeItem(CONFIG.SAVE_KEY);
            location.reload();
        }
    }
};

// Auto-guardado cada 30 segundos para no afectar el rendimiento
setInterval(() => SaveSystem.saveGame(), 30000);

// Intentar cargar al iniciar
SaveSystem.loadGame();