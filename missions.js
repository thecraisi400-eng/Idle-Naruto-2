const MissionSystem = {
    // Listado de misiones disponibles
    availableMissions: [
        {
            id: 1,
            title: "Infiltración en la Aldea de la Lluvia",
            desc: "Derrota a los subordinados de Pain para desbloquear recompensas de rango S.",
            difficulty: "Media",
            baseGold: 1000,
            baseExp: 500,
            duration: 60 // segundos
        },
        {
            id: 2,
            title: "Escolta al Constructor de Puentes",
            desc: "Protege a Tazuna de los hermanos demonio en el camino al País de las Olas.",
            difficulty: "Fácil",
            baseGold: 500,
            baseExp: 200,
            duration: 30
        }
    ],

    // Función para mostrar una misión en pantalla
    displayMission(missionId) {
        const mission = this.availableMissions.find(m => m.id === missionId);
        if (mission) {
            document.getElementById('mission-name').innerText = `"${mission.title}"`;
            document.getElementById('mission-desc').innerText = `Objetivo: ${mission.desc}`;
            console.log(`Misión cargada: ${mission.title}`);
        }
    },

    // Calcular recompensa final con bonus de evento
    calculateReward(baseAmount) {
        return Math.floor(baseAmount * CONFIG.GOLD_MULTIPLIER);
    }
};

// Cargamos la primera misión por defecto
MissionSystem.displayMission(1);