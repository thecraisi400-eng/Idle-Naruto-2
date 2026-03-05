const SummonSystem = {
    summonCost: 5000,
    
    // Probabilidades: 70% Común, 25% Raro, 5% Legendario
    pool: [
        { name: "Rana Pequeña (Gamatatsu)", rarity: "Común", power: 1.1 },
        { name: "Sapo Guerrero (Gamaken)", rarity: "Raro", power: 1.5 },
        { name: "Jefe Sapo (Gamabunta)", rarity: "Legendario", power: 2.5 }
    ],

    performSummon() {
        if (Player.gold < this.summonCost) {
            alert("¡No tienes suficiente Oro para la invocación!");
            return;
        }

        Player.gold -= this.summonCost;
        const rand = Math.random() * 100;
        let result;

        if (rand < 70) result = this.pool[0];
        else if (rand < 95) result = this.pool[1];
        else result = this.pool[2];

        Player.updateUI();
        alert(`¡Contrato de Sangre exitoso! Has invocado a: ${result.name} (${result.rarity})`);
        console.log(`Bonus de daño obtenido: x${result.power}`);
        
        // Aquí podrías aplicar el bonus de daño al Player.atk de forma permanente
    }
};

console.log("Cámara de Invocaciones lista.");