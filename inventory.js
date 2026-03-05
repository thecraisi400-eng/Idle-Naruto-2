const InventorySystem = {
    items: [
        { id: 1, name: "Poción de Chakra", type: "consumable", amount: 5, effect: 500 },
        { id: 2, name: "Pergamino de Rango S", type: "material", amount: 1, effect: 0 }
    ],

    // Añadir objeto al inventario
    addItem(itemId, qty = 1) {
        const item = this.items.find(i => i.id === itemId);
        if (item) {
            item.amount += qty;
        } else {
            // Lógica para añadir item nuevo si no existe
            console.log("Nuevo objeto obtenido.");
        }
        console.log(`Inventario actualizado: +${qty} unidades.`);
    },

    // Usar un objeto
    useItem(itemId) {
        const item = this.items.find(i => i.id === itemId);
        if (item && item.amount > 0) {
            if (item.id === 1) { // Poción de Chakra
                Player.mp = Math.min(Player.maxMp, Player.mp + item.effect);
                item.amount--;
                Player.updateUI();
                console.log("Has usado una poción.");
            }
        }
    }
};

console.log("Inventario sincronizado.");