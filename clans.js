const ClanSystem = {
    clanName: "Akatsuki",
    userRank: "Miembro Elite",
    clanLevel: 10,
    
    // Objetivos del clan (se pueden actualizar cada 3 días)
    currentObjective: {
        title: "Caza de Jinchurikis",
        progress: 45,
        goal: 100,
        reward: "5,000 ORO y 1 Pergamino S"
    },

    // Beneficios por pertenecer al clan
    buffs: {
        atkBonus: 0.05, // +5% de ataque
        expBonus: 0.10  // +10% de experiencia
    },

    contribute() {
        console.log("Has contribuido al clan. ¡Progreso aumentado!");
        // Aquí iría la lógica para sumar puntos al clan
    },

    getRewards() {
        if (this.currentObjective.progress >= this.currentObjective.goal) {
            alert("¡Recompensas de clan reclamadas: " + this.currentObjective.reward + "!");
        } else {
            console.log("Objetivo de clan aún en progreso...");
        }
    }
};

console.log("Sistema de Clanes cargado: Clan " + ClanSystem.clanName);