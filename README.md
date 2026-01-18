# Compot - Comprehensive Botany Pots Integration

A Minecraft 1.21.1 datapack that integrates **Snowy Spirit**, **Regions Unexplored**, **Atmospheric**, and **Rustic Delight** mods with Botany Pots.

## Features

This datapack adds Botany Pots support for 29 different crops and saplings:

### Regions Unexplored (16 saplings)
- Maple, Baobab, Willow, Eucalyptus
- Silver Birch, Blackwood, Joshua, Magnolia
- Palm, Cypress, Redwood, Pine
- Cherry Oak, Bamboo, Kapok, Larch

### Atmospheric (7 saplings + 2 crops)
- **Saplings:** Rosewood, Aspen, Kousa, Morado, Grimwood, Laurel, Yucca
- **Crops:** Aloe Vera, Passion Vine

### Snowy Spirit (1 crop)
- Ginger

### Rustic Delight (3 crops)
- Bell Peppers (produces red, yellow, and green varieties)
- Cotton
- Coffee

## Installation

### Method 1: Download from Releases (Recommended)
1. Go to the [Releases page](https://github.com/TheCrazy8/compot/releases)
2. Download the latest `compot.zip` file
3. Place the downloaded zip file directly in your world's `datapacks` folder
4. Reload datapacks with `/reload` or restart the server/world

### Method 2: Clone the Repository
1. Clone or download this repository
2. **Important:** Copy the **contents** of the repository folder (not the folder itself) into your world's `datapacks` folder, OR rename the folder to `compot` and place it in your `datapacks` folder
   - Your datapacks folder should contain: `pack.mcmeta` and `data` folder at the same level
   - Correct structure: `datapacks/compot/pack.mcmeta` and `datapacks/compot/data/`
   - ❌ Incorrect: `datapacks/compot-main/compot/pack.mcmeta`
3. Reload datapacks with `/reload` or restart the server/world

### Method 3: Manual Zip
1. Download the repository as a ZIP from GitHub
2. Extract the contents
3. Create a new zip file containing ONLY the `pack.mcmeta` file and `data` folder (not the parent folder)
4. Place this zip file in your world's `datapacks` folder
5. Reload datapacks with `/reload` or restart the server/world

### Verifying Installation
After installation, you can verify the datapack is loaded by running:
```
/datapack list
```
You should see `[file/compot]` in the enabled datapacks list.

## Requirements

- Minecraft 1.21.1
- Botany Pots mod
- At least one of the supported mods:
  - Regions Unexplored
  - Atmospheric
  - Snowy Spirit
  - Rustic Delight

## Compatibility

This datapack is designed for Minecraft 1.21.1 (pack format 48). All crop definitions use standard Botany Pots JSON format with appropriate growth times, categories, and output items.

## Troubleshooting

### Datapack not loading?
1. **Check the folder structure**: Make sure `pack.mcmeta` and the `data` folder are at the same level inside your datapack folder/zip
2. **Verify pack format**: This datapack requires Minecraft 1.21.1 (pack format 48)
3. **Check console/logs**: Look for any error messages related to "compot" datapack
4. **Ensure Botany Pots is installed**: This datapack requires the Botany Pots mod to be installed
5. **Verify mod presence**: Make sure at least one of the supported mods (Regions Unexplored, Atmospheric, Snowy Spirit, or Rustic Delight) is installed

### Crops not appearing in Botany Pots?
- Ensure you have the seed items from the supported mods
- Verify you're using the correct soil type (most crops use "dirt" category)
- Make sure the required mod for that crop is installed

## Credits

Created for integration between multiple popular Minecraft mods and the Botany Pots automation system.