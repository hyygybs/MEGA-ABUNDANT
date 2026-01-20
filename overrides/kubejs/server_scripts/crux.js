ServerEvents.recipes(event => {
        event.shaped('kubejs:allthemodium_crux',[
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'mysticalagriculture:supremium_essence',
            B: 'allthemodium:allthemodium_ingot',
            C: 'minecraft:diamond_block'
        })

        event.shaped('kubejs:vibranium_crux',[
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'mysticalagriculture:supremium_essence',
            B: 'allthemodium:vibranium_ingot',
            C: 'minecraft:diamond_block'
        })

        event.shaped('kubejs:unobtainium_crux',[
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'mysticalagriculture:supremium_essence',
            B: 'allthemodium:unobtainium_ingot',
            C: 'minecraft:diamond_block'
        })

        event.shaped('allthemodium:allthemodium_nugget',[
            'SSS',
            'SSS',
            'SSS'
        ], {
            S: 'mysticalagriculture:allthemodium_essence'
        })

        event.shaped('allthemodium:vibranium_nugget',[
            'TTT',
            'TTT',
            'TTT'
        ], {
            T: 'mysticalagriculture:vibranium_essence'
        })

        event.shaped('allthemodium:unobtainium_nugget',[
            'UUU',
            'UUU',
            'UUU'
        ], {
            U: 'mysticalagriculture:unobtainium_essence'
        })
})