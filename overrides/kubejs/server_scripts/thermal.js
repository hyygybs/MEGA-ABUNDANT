ServerEvents.recipes(event => {
        event.custom({
            type:'thermal:bottler',
            ingredients:[{item:'minecraft:glowstone_dust'}, {fluid:'thermal:redstone', amount:200}],
            result:[{item:'minecraft:blaze_powder'}]
        });
        event.custom({
            type:'thermal:bottler',
            ingredients:[{item:'minecraft:snowball'}, {fluid:'thermal:redstone', amount:200}],
            result:[{item:'thermal:blizz_powder'}]
        });
        event.custom({
            type:'thermal:bottler',
            ingredients:[{item:'minecraft:sand'}, {fluid:'thermal:redstone', amount:200}],
            result:[{item:'thermal:blitz_powder'}]
        });
        event.custom({
            type:'thermal:bottler',
            ingredients:[{item:'create:powdered_obsidian'}, {fluid:'thermal:redstone', amount:200}],
            result:[{item:'thermal:basalz_powder'}]
        });
})