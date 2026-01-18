// Botany Pots Crops Integration
// Adds support for Regions Unexplored, Atmospheric, Snowy Spirit, and Rustic Delight

ServerEvents.recipes(event => {
    
    // ========== REGIONS UNEXPLORED SAPLINGS ==========
    
    // Maple Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:maple_sapling',
        ['dirt'],
        { block: 'regions_unexplored:maple_sapling' },
        [
            Item.of('regions_unexplored:maple_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:maple_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:maple_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Baobab Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:baobab_sapling',
        ['dirt'],
        { block: 'regions_unexplored:baobab_sapling' },
        [
            Item.of('regions_unexplored:baobab_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:baobab_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:baobab_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        4200
    );
    
    // Willow Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:willow_sapling',
        ['dirt'],
        { block: 'regions_unexplored:willow_sapling' },
        [
            Item.of('regions_unexplored:willow_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:willow_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:willow_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Eucalyptus Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:eucalyptus_sapling',
        ['dirt'],
        { block: 'regions_unexplored:eucalyptus_sapling' },
        [
            Item.of('regions_unexplored:eucalyptus_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:eucalyptus_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:eucalyptus_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Silver Birch Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:silver_birch_sapling',
        ['dirt'],
        { block: 'regions_unexplored:silver_birch_sapling' },
        [
            Item.of('regions_unexplored:silver_birch_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:silver_birch_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:silver_birch_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Blackwood Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:blackwood_sapling',
        ['dirt'],
        { block: 'regions_unexplored:blackwood_sapling' },
        [
            Item.of('regions_unexplored:blackwood_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:blackwood_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:blackwood_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3800
    );
    
    // Joshua Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:joshua_sapling',
        ['dirt'],
        { block: 'regions_unexplored:joshua_sapling' },
        [
            Item.of('regions_unexplored:joshua_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:joshua_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:joshua_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        4000
    );
    
    // Magnolia Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:magnolia_sapling',
        ['dirt'],
        { block: 'regions_unexplored:magnolia_sapling' },
        [
            Item.of('regions_unexplored:magnolia_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:magnolia_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:magnolia_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Palm Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:palm_sapling',
        ['dirt'],
        { block: 'regions_unexplored:palm_sapling' },
        [
            Item.of('regions_unexplored:palm_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:palm_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:palm_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3800
    );
    
    // Cypress Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:cypress_sapling',
        ['dirt'],
        { block: 'regions_unexplored:cypress_sapling' },
        [
            Item.of('regions_unexplored:cypress_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:cypress_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:cypress_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Redwood Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:redwood_sapling',
        ['dirt'],
        { block: 'regions_unexplored:redwood_sapling' },
        [
            Item.of('regions_unexplored:redwood_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:redwood_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:redwood_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        4200
    );
    
    // Pine Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:pine_sapling',
        ['dirt'],
        { block: 'regions_unexplored:pine_sapling' },
        [
            Item.of('regions_unexplored:pine_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:pine_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:pine_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Cherry Oak Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:cherry_oak_sapling',
        ['dirt'],
        { block: 'regions_unexplored:cherry_oak_sapling' },
        [
            Item.of('regions_unexplored:cherry_oak_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:cherry_oak_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:cherry_oak_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Bamboo Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:bamboo_sapling',
        ['dirt'],
        { block: 'regions_unexplored:bamboo_sapling' },
        [
            Item.of('regions_unexplored:bamboo_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:bamboo_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:bamboo_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        2800
    );
    
    // Kapok Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:kapok_sapling',
        ['dirt'],
        { block: 'regions_unexplored:kapok_sapling' },
        [
            Item.of('regions_unexplored:kapok_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:kapok_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:kapok_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        4000
    );
    
    // Larch Sapling
    event.recipes.botanypots.crop(
        'regions_unexplored:larch_sapling',
        ['dirt'],
        { block: 'regions_unexplored:larch_sapling' },
        [
            Item.of('regions_unexplored:larch_log').withChance(100).withRolls(1, 4),
            Item.of('regions_unexplored:larch_leaves').withChance(100).withRolls(2, 4),
            Item.of('regions_unexplored:larch_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // ========== ATMOSPHERIC SAPLINGS AND CROPS ==========
    
    // Rosewood Sapling
    event.recipes.botanypots.crop(
        'atmospheric:rosewood_sapling',
        ['dirt'],
        { block: 'atmospheric:rosewood_sapling' },
        [
            Item.of('atmospheric:rosewood_log').withChance(100).withRolls(1, 4),
            Item.of('atmospheric:rosewood_leaves').withChance(100).withRolls(2, 4),
            Item.of('atmospheric:rosewood_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Aspen Sapling
    event.recipes.botanypots.crop(
        'atmospheric:aspen_sapling',
        ['dirt'],
        { block: 'atmospheric:aspen_sapling' },
        [
            Item.of('atmospheric:aspen_log').withChance(100).withRolls(1, 4),
            Item.of('atmospheric:aspen_leaves').withChance(100).withRolls(2, 4),
            Item.of('atmospheric:aspen_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Kousa Sapling
    event.recipes.botanypots.crop(
        'atmospheric:kousa_sapling',
        ['dirt'],
        { block: 'atmospheric:kousa_sapling' },
        [
            Item.of('atmospheric:kousa_log').withChance(100).withRolls(1, 4),
            Item.of('atmospheric:kousa_leaves').withChance(100).withRolls(2, 4),
            Item.of('atmospheric:kousa_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Morado Sapling
    event.recipes.botanypots.crop(
        'atmospheric:morado_sapling',
        ['dirt'],
        { block: 'atmospheric:morado_sapling' },
        [
            Item.of('atmospheric:morado_log').withChance(100).withRolls(1, 4),
            Item.of('atmospheric:morado_leaves').withChance(100).withRolls(2, 4),
            Item.of('atmospheric:morado_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Grimwood Sapling
    event.recipes.botanypots.crop(
        'atmospheric:grimwood_sapling',
        ['dirt'],
        { block: 'atmospheric:grimwood_sapling' },
        [
            Item.of('atmospheric:grimwood_log').withChance(100).withRolls(1, 4),
            Item.of('atmospheric:grimwood_leaves').withChance(100).withRolls(2, 4),
            Item.of('atmospheric:grimwood_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3800
    );
    
    // Laurel Sapling
    event.recipes.botanypots.crop(
        'atmospheric:laurel_sapling',
        ['dirt'],
        { block: 'atmospheric:laurel_sapling' },
        [
            Item.of('atmospheric:laurel_log').withChance(100).withRolls(1, 4),
            Item.of('atmospheric:laurel_leaves').withChance(100).withRolls(2, 4),
            Item.of('atmospheric:laurel_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3600
    );
    
    // Yucca Sapling
    event.recipes.botanypots.crop(
        'atmospheric:yucca_sapling',
        ['dirt'],
        { block: 'atmospheric:yucca_sapling' },
        [
            Item.of('atmospheric:yucca_log').withChance(100).withRolls(1, 4),
            Item.of('atmospheric:yucca_leaves').withChance(100).withRolls(2, 4),
            Item.of('atmospheric:yucca_sapling').withChance(15).withRolls(1, 2),
            Item.of('minecraft:stick').withChance(5).withRolls(1, 2)
        ],
        3800
    );
    
    // Aloe Vera
    event.recipes.botanypots.crop(
        'atmospheric:aloe_vera',
        ['dirt', 'sand'],
        { block: 'atmospheric:aloe_vera' },
        [
            Item.of('atmospheric:aloe_leaves').withChance(100).withRolls(2, 4),
            Item.of('atmospheric:aloe_gel_block').withChance(50).withRolls(1, 1),
            Item.of('atmospheric:aloe_vera').withChance(25).withRolls(1, 1)
        ],
        2400
    );
    
    // Passion Vine
    event.recipes.botanypots.crop(
        'atmospheric:passion_vine',
        ['dirt'],
        { block: 'atmospheric:passion_vine' },
        [
            Item.of('atmospheric:passionfruit').withChance(100).withRolls(1, 3),
            Item.of('atmospheric:passion_vine').withChance(15).withRolls(1, 2)
        ],
        2800
    );
    
    // ========== SNOWY SPIRIT CROPS ==========
    
    // Ginger
    event.recipes.botanypots.crop(
        'snowyspirit:ginger',
        ['dirt'],
        { block: 'snowyspirit:ginger_crop' },
        [
            Item.of('snowyspirit:ginger').withChance(100).withRolls(2, 4),
            Item.of('snowyspirit:ginger').withChance(15).withRolls(1, 2)
        ],
        2400
    );
    
    // ========== RUSTIC DELIGHT CROPS ==========
    
    // Bell Pepper
    event.recipes.botanypots.crop(
        'rusticdelight:bell_pepper_seeds',
        ['dirt'],
        { block: 'rusticdelight:bell_pepper_crop' },
        [
            Item.of('rusticdelight:red_bell_pepper').withChance(100).withRolls(1, 2),
            Item.of('rusticdelight:yellow_bell_pepper').withChance(80).withRolls(1, 2),
            Item.of('rusticdelight:green_bell_pepper').withChance(80).withRolls(1, 2),
            Item.of('rusticdelight:bell_pepper_seeds').withChance(20).withRolls(1, 2)
        ],
        2400
    );
    
    // Cotton
    event.recipes.botanypots.crop(
        'rusticdelight:cotton_seeds',
        ['dirt'],
        { block: 'rusticdelight:cotton_crop' },
        [
            Item.of('rusticdelight:cotton').withChance(100).withRolls(2, 4),
            Item.of('rusticdelight:cotton_seeds').withChance(25).withRolls(1, 2),
            Item.of('minecraft:string').withChance(10).withRolls(1, 1)
        ],
        2400
    );
    
    // Coffee
    event.recipes.botanypots.crop(
        'rusticdelight:coffee_beans',
        ['dirt'],
        { block: 'rusticdelight:coffee_crop' },
        [
            Item.of('rusticdelight:coffee_beans').withChance(100).withRolls(2, 4),
            Item.of('rusticdelight:coffee_beans').withChance(20).withRolls(1, 2)
        ],
        2800
    );
    
});
