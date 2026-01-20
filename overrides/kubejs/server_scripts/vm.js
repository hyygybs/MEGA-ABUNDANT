ServerEvents.recipes(event => {
        event.shaped('vm:vending_machine', [
                'GGG',
                'GAG',
                'G G'
          ], {
                A: 'minecraft:emerald_block',
                G: 'minecraft:iron_block'
          })

})