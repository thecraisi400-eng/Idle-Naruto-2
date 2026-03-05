const CombatSystem = {
    isFighting: false,
    currentEnemy: null,

    // Generador de enemigos ligeros
    generateEnemy() {
        return {
            name: "Ninja Renegado",
            hp: 5000 + (Player.level * 100),
            atk: 500 + (Player.level * 20),
            rewardGold: 200,
            rewardExp: 100
        };
    },

    // Bucle de combate automático
    startAutoBattle() {
        if (this.isFighting) return;
        this.isFighting = true;
        this.currentEnemy = this.generateEnemy();
        
        console.log(`¡Combate iniciado contra ${this.currentEnemy.name}!`);

        const battleInterval = setInterval(() => {
            if (!this.isFighting) {
                clearInterval(battleInterval);
                return;
            }

            // El jugador ataca (daño base + bonus de clan)
            const playerDamage = Player.atk * (1 + ClanSystem.buffs.atkBonus);
            this.currentEnemy.hp -= playerDamage;

            // El enemigo ataca
            const enemyDamage = Math.max(0, this.currentEnemy.atk - Player.def);
            Player.takeDamage(enemyDamage);

            // Verificar victoria
            if (this.currentEnemy.hp <= 0) {
                this.isFighting = false;
                clearInterval(battleInterval);
                this.winBattle();
            }

            // Verificar derrota
            if (Player.hp <= 0) {
                this.isFighting = false;
                clearInterval(battleInterval);
                alert("¡Has sido derrotado! Regresando a la aldea...");
                Player.hp = Player.maxHp / 2; // Recuperación parcial
                Player.updateUI();
            }
        }, 2000); // Ataque cada 2 segundos para ahorrar procesador
    },

    winBattle() {
        const finalGold = MissionSystem.calculateReward(this.currentEnemy.rewardGold);
        Player.gold += finalGold;
        Player.exp += this.currentEnemy.rewardExp;
        
        console.log(`¡Victoria! Ganaste ${finalGold} de Oro.`);
        Player.updateUI();
        
        // Siguiente enemigo tras un breve descanso
        setTimeout(() => this.startAutoBattle(), 3000);
    }
};

console.log("Motor de combate listo.");