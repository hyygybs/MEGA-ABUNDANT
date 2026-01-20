ServerEvents.recipes(event => {
        event.shaped('gobber2:gobber2_ingot',[
            'JJJ',
            'J J',
            'JJJ'
        ], {
            J: 'mysticalagriculture:gobber_essence'
        })

        event.shaped('gobber2:gobber2_ingot_nether',[
            'JJJ',
            'J J',
            'JJJ'
        ], {
            J: 'mysticalagriculture:gobber_nether_essence'
        })

        event.shaped('gobber2:gobber2_ingot_end',[
            'JJJ',
            'J J',
            'JJJ'
        ], {
            J: 'mysticalagriculture:gobber_end_essence'
        })
})