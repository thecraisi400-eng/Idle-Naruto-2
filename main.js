// Este script inicializa todo el motor del juego
document.addEventListener('DOMContentLoaded', () => {
    console.log("Iniciando Naruto Idle - Sennin Mode V2...");

    // 1. Cargar datos guardados
    SaveSystem.loadGame();

    // 2. Iniciar el sistema de eventos (2-3 días)
    EventSystem.init();

    // 3. Activar los botones de la interfaz
    UIController.init();

    // 4. Actualizar la pantalla inicial
    Player.updateUI();

    // 5. Iniciar combate en segundo plano (Opcional al inicio)
    // CombatSystem.startAutoBattle();

    console.log("¡Juego listo para jugar!");
});