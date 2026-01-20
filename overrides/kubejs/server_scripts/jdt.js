ServerEvents.recipes(event => {
        event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"justdirethings:justdirethingsbook"}'), [
               'minecraft:emerald','minecraft:book'
          ])

        event.shapeless('justdirethings:eclipsealloy_paxel', [
               'justdirethings:eclipsealloy_pickaxe','justdirethings:eclipsealloy_shovel','justdirethings:eclipsealloy_axe'
          ])

        event.shapeless('justdirethings:celestigem_paxel', [
               'justdirethings:celestigem_pickaxe','justdirethings:celestigem_shovel','justdirethings:celestigem_axe'
          ])
})