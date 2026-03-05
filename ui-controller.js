const UIController = {
    // Vincula los botones del HTML con las funciones de los otros scripts
    init() {
        const buttons = document.querySelectorAll('.btn-action');
        
        // Asignamos funciones basadas en el texto del botón
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.innerText.split('\n')[1]; // Captura el texto (ej: "HEROE")
                this.handleMenu(action);
            });
        });
    },

    handleMenu(action) {
        console.log("Navegando a: " + action);
        
        switch(action) {
            case 'HEROE':
                // 1. Limpiar y borrar el contenido del cuadro principal para insertar la nueva interfaz
                const display = document.querySelector('.mission-display');
                
                // Extraemos el layout de CONFIG para facilitar la lectura
                const lay = HERO_LAYOUT;

                display.innerHTML = `
                    <div class="hero-container">
                        <div class="hero-name-label" style="top: ${lay.NAME.top}; left: ${lay.NAME.left}; transform: translateX(${lay.NAME.translate}) scale(${lay.NAME.scale});">
                            ${Player.name}
                        </div>

                        <div class="hero-main-photo" style="top: ${lay.PHOTO.top}; left: ${lay.PHOTO.left}; transform: translateX(${lay.PHOTO.translate}) scale(${lay.PHOTO.scale});">
                            <span style="font-size: 50px;">👤</span>
                        </div>
                        
                        <div class="hero-stats-row">
                            <div class="hero-col" style="top: ${lay.STATS_LEFT.top}; left: ${lay.STATS_LEFT.left}; transform: scale(${lay.STATS_LEFT.scale});">
                                <div>⭐ Nivel: ${Player.level}</div>
                                <div>❤️ HP</div>
                                <div class="hero-bar-bg"><div class="hero-bar-hp-fill" style="width: 100%;"></div></div>
                                <div>💙 MP</div>
                                <div class="hero-bar-bg"><div class="hero-bar-mp-fill" style="width: 100%;"></div></div>
                                <div>⚔️ Ataque: ${Player.atk}</div>
                                <div>🛡️ Defensa: ${Player.def || 0}</div>
                            </div>
                            
                            <div class="hero-col hero-col-right" style="top: ${lay.STATS_RIGHT.top}; right: ${lay.STATS_RIGHT.right}; transform: scale(${lay.STATS_RIGHT.scale});">
                                <div>🏹 Vel. Ataque: ${Player.atkSpd || '1.0'}</div>
                                <div>🏃 Velocidad: ${Player.spd || 10}</div>
                                <div>💨 Evasión: ${Player.eva || '5%'}</div>
                                <div>🎯 Crítico: ${Player.crit || '10%'}</div>
                                <div>💥 Daño Crit: ${Player.critDmg || '150%'}</div>
                                <div>💰 Oro: ${Player.gold}</div>
                            </div>
                        </div>

                        <div class="hero-rango" style="top: ${lay.RANK.top}; left: ${lay.RANK.left}; transform: translateX(${lay.RANK.translate}) scale(${lay.RANK.scale});">
                            🎖️ Rango Actual: ${Player.rank || 'Novato'}
                        </div>
                        
                        <div class="hero-divider" style="top: ${lay.DIVIDER.top}; left: ${lay.DIVIDER.left}; width: ${lay.DIVIDER.width};"></div>

                        <div class="equipment-grid" style="top: ${lay.EQUIPMENT.top}; left: ${lay.EQUIPMENT.left}; transform: scale(${lay.EQUIPMENT.scale});">
                            <div class="equip-slot rarity-1"><span>🪖</span><div class="equip-lvl">Lvl.1</div></div>
                            <div class="equip-slot rarity-2"><span>🥋</span><div class="equip-lvl">Lvl.6</div></div>
                            <div class="equip-slot rarity-3"><span>🧤</span><div class="equip-lvl">Lvl.16</div></div>
                            <div class="equip-slot rarity-4"><span>👞</span><div class="equip-lvl">Lvl.26</div></div>
                            <div class="equip-slot rarity-5"><span>🗡️</span><div class="equip-lvl">Lvl.36</div></div>
                            <div class="equip-slot rarity-1"><span>💍</span><div class="equip-lvl">Lvl.1</div></div>
                        </div>
                    </div>
                `;
                break;
            case 'MISIONES':
                MissionSystem.displayMission(2); // Cambia a la siguiente misión
                break;
            case 'CLANES':
                alert(`Clan: ${ClanSystem.clanName}\nObjetivo: ${ClanSystem.currentObjective.title}`);
                break;
            case 'EVENTOS':
                EventSystem.updateTimer();
                alert(EventSystem.activeEvent.description);
                break;
            case 'INVOCAR':
                SummonSystem.performSummon();
                break;
            case 'BATALLAS':
                CombatSystem.startAutoBattle();
                break;
            case 'AJUSTES':
                SaveSystem.resetGame();
                break;
            default:
                console.log("Función " + action + " en desarrollo.");
        }
    }
};

console.log("Controlador de interfaz listo.");