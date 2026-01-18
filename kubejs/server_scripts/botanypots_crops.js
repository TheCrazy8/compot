// Botany Pots Crops Integration
// Adds support for Regions Unexplored, Atmospheric, Snowy Spirit, and Rustic Delight

ServerEvents.recipes(event => {
    
    // ========== REGIONS UNEXPLORED SAPLINGS ==========
    
    // Maple Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:maple_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'regions_unexplored:maple_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:maple_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:maple_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:maple_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Baobab Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:baobab_sapling' },
        categories: ['dirt'],
        growthTicks: 4200,
        display: { block: 'regions_unexplored:baobab_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:baobab_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:baobab_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:baobab_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Willow Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:willow_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'regions_unexplored:willow_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:willow_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:willow_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:willow_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Eucalyptus Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:eucalyptus_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'regions_unexplored:eucalyptus_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:eucalyptus_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:eucalyptus_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:eucalyptus_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Silver Birch Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:silver_birch_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'regions_unexplored:silver_birch_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:silver_birch_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:silver_birch_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:silver_birch_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Blackwood Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:blackwood_sapling' },
        categories: ['dirt'],
        growthTicks: 3800,
        display: { block: 'regions_unexplored:blackwood_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:blackwood_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:blackwood_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:blackwood_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Joshua Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:joshua_sapling' },
        categories: ['dirt'],
        growthTicks: 4000,
        display: { block: 'regions_unexplored:joshua_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:joshua_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:joshua_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:joshua_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Magnolia Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:magnolia_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'regions_unexplored:magnolia_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:magnolia_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:magnolia_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:magnolia_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Palm Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:palm_sapling' },
        categories: ['dirt', 'sand'],
        growthTicks: 3800,
        display: { block: 'regions_unexplored:palm_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:palm_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:palm_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:palm_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Cypress Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:cypress_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'regions_unexplored:cypress_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:cypress_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:cypress_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:cypress_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Redwood Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:redwood_sapling' },
        categories: ['dirt'],
        growthTicks: 4200,
        display: { block: 'regions_unexplored:redwood_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:redwood_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:redwood_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:redwood_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Pine Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:pine_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'regions_unexplored:pine_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:pine_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:pine_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:pine_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Cherry Oak Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:cherry_oak_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'regions_unexplored:cherry_oak_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:cherry_oak_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:cherry_oak_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:cherry_oak_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Bamboo Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:bamboo_sapling' },
        categories: ['dirt'],
        growthTicks: 2800,
        display: { block: 'regions_unexplored:bamboo_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:bamboo_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:bamboo_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:bamboo_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Kapok Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:kapok_sapling' },
        categories: ['dirt'],
        growthTicks: 4000,
        display: { block: 'regions_unexplored:kapok_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:kapok_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:kapok_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:kapok_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Larch Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'regions_unexplored:larch_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'regions_unexplored:larch_sapling' },
        results: [
            { chance: 1.0, output: { item: 'regions_unexplored:larch_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'regions_unexplored:larch_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'regions_unexplored:larch_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // ========== ATMOSPHERIC SAPLINGS ==========
    
    // Rosewood Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'atmospheric:rosewood_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'atmospheric:rosewood_sapling' },
        results: [
            { chance: 1.0, output: { item: 'atmospheric:rosewood_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'atmospheric:rosewood_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'atmospheric:rosewood_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Aspen Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'atmospheric:aspen_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'atmospheric:aspen_sapling' },
        results: [
            { chance: 1.0, output: { item: 'atmospheric:aspen_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'atmospheric:aspen_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'atmospheric:aspen_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Kousa Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'atmospheric:kousa_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'atmospheric:kousa_sapling' },
        results: [
            { chance: 1.0, output: { item: 'atmospheric:kousa_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'atmospheric:kousa_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'atmospheric:kousa_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Morado Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'atmospheric:morado_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'atmospheric:morado_sapling' },
        results: [
            { chance: 1.0, output: { item: 'atmospheric:morado_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'atmospheric:morado_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'atmospheric:morado_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Grimwood Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'atmospheric:grimwood_sapling' },
        categories: ['dirt'],
        growthTicks: 3800,
        display: { block: 'atmospheric:grimwood_sapling' },
        results: [
            { chance: 1.0, output: { item: 'atmospheric:grimwood_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'atmospheric:grimwood_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'atmospheric:grimwood_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Laurel Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'atmospheric:laurel_sapling' },
        categories: ['dirt'],
        growthTicks: 3600,
        display: { block: 'atmospheric:laurel_sapling' },
        results: [
            { chance: 1.0, output: { item: 'atmospheric:laurel_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'atmospheric:laurel_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'atmospheric:laurel_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Yucca Sapling
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'atmospheric:yucca_sapling' },
        categories: ['dirt'],
        growthTicks: 3800,
        display: { block: 'atmospheric:yucca_sapling' },
        results: [
            { chance: 1.0, output: { item: 'atmospheric:yucca_log' }, minRolls: 1, maxRolls: 4 },
            { chance: 1.0, output: { item: 'atmospheric:yucca_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'atmospheric:yucca_sapling' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.05, output: { item: 'minecraft:stick' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Aloe Vera
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'atmospheric:aloe_vera' },
        categories: ['dirt', 'sand'],
        growthTicks: 2400,
        display: { block: 'atmospheric:aloe_vera' },
        results: [
            { chance: 1.0, output: { item: 'atmospheric:aloe_leaves' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.5, output: { item: 'atmospheric:aloe_gel_block' }, minRolls: 1, maxRolls: 1 },
            { chance: 0.25, output: { item: 'atmospheric:aloe_vera' }, minRolls: 1, maxRolls: 1 }
        ]
    });
    
    // Passion Vine
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'atmospheric:passion_vine' },
        categories: ['dirt'],
        growthTicks: 2800,
        display: { block: 'atmospheric:passion_vine' },
        results: [
            { chance: 1.0, output: { item: 'atmospheric:passionfruit' }, minRolls: 1, maxRolls: 3 },
            { chance: 0.15, output: { item: 'atmospheric:passion_vine' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // ========== SNOWY SPIRIT CROPS ==========
    
    // Ginger
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'snowyspirit:ginger' },
        categories: ['dirt'],
        growthTicks: 2400,
        display: { block: 'snowyspirit:ginger_crop' },
        results: [
            { chance: 1.0, output: { item: 'snowyspirit:ginger' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.15, output: { item: 'snowyspirit:ginger' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // ========== RUSTIC DELIGHT CROPS ==========
    
    // Bell Pepper
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'rusticdelight:bell_pepper_seeds' },
        categories: ['dirt'],
        growthTicks: 2400,
        display: { block: 'rusticdelight:bell_pepper_crop' },
        results: [
            { chance: 1.0, output: { item: 'rusticdelight:red_bell_pepper' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.8, output: { item: 'rusticdelight:yellow_bell_pepper' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.8, output: { item: 'rusticdelight:green_bell_pepper' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.2, output: { item: 'rusticdelight:bell_pepper_seeds' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
    // Cotton
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'rusticdelight:cotton_seeds' },
        categories: ['dirt'],
        growthTicks: 2400,
        display: { block: 'rusticdelight:cotton_crop' },
        results: [
            { chance: 1.0, output: { item: 'rusticdelight:cotton' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.25, output: { item: 'rusticdelight:cotton_seeds' }, minRolls: 1, maxRolls: 2 },
            { chance: 0.1, output: { item: 'minecraft:string' }, minRolls: 1, maxRolls: 1 }
        ]
    });
    
    // Coffee Beans
    event.custom({
        type: 'botanypots:crop',
        seed: { item: 'rusticdelight:coffee_beans' },
        categories: ['dirt'],
        growthTicks: 2800,
        display: { block: 'rusticdelight:coffee_crop' },
        results: [
            { chance: 1.0, output: { item: 'rusticdelight:coffee_beans' }, minRolls: 2, maxRolls: 4 },
            { chance: 0.2, output: { item: 'rusticdelight:coffee_beans' }, minRolls: 1, maxRolls: 2 }
        ]
    });
    
});
