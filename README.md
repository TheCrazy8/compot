# Compot - Comprehensive Botany Pots Integration + KubeJS GUI Editor

A Minecraft 1.21.1 KubeJS script pack that integrates **Snowy Spirit**, **Regions Unexplored**, **Atmospheric**, and **Rustic Delight** mods with Botany Pots, plus a GUI editor mod for creating KubeJS recipes.

## 🆕 NEW: KubeJS GUI Editor Mod

We've added a powerful in-game GUI editor that makes creating KubeJS recipes easy! No more manually editing script files.

### Features
- **In-game GUI** - Press `K` (configurable) to open the recipe editor
- **Multiple Recipe Types Supported:**
  - Botany Pots (crops, soils, fertilizers)
  - Vanilla Crafting (shaped, shapeless, smelting, smoking, blasting, campfire)
  - Stonecutting & Smithing
  - Create Mod (crushing, mixing, filling, and more)
  - Farmer's Delight (cooking pot, cutting board)
- **Auto-generate Scripts** - Creates properly formatted KubeJS scripts
- **Save to File** - Scripts are automatically saved to `kubejs/server_scripts/` folder

### Installation (GUI Editor Mod)
1. Download the latest `.jar` file from [Releases](https://github.com/TheCrazy8/compot/releases)
2. Place it in your `mods` folder alongside KubeJS
3. Launch Minecraft 1.21.1 with NeoForge
4. Press `K` in-game to open the editor
5. Create recipes using the GUI forms
6. Click "Generate & Download Script" to save

### Building from Source
```bash
git clone https://github.com/TheCrazy8/compot.git
cd compot
./gradlew build
# JAR will be in build/libs/
```

---

## KubeJS Script Pack (Original Feature)

## Quick Start

**Just want to use the scripts?** 
1. Download this repository as a ZIP
2. Extract it
3. Copy the `kubejs` folder to your Minecraft instance folder (where your `mods` folder is located)
4. Done! Restart your game or run `/kubejs reload server_scripts`

## Features

This KubeJS script adds Botany Pots support for 29 different crops and saplings:

> **Note:** This repository now uses KubeJS for better compatibility and reliability. The old datapack format has been replaced with KubeJS scripts. If you need the legacy datapack version, it's still available in the `compot/` folder, but KubeJS is the recommended method.

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

**Repository Structure:**
```
compot-main/          (downloaded folder)
└── kubejs/           (← Copy this folder to your instance!)
    └── server_scripts/
        └── botanypots_crops.js
```

### Method 1: Download and Use Immediately (Easiest)
1. Click the green **Code** button at the top of this page
2. Select **Download ZIP**
3. Extract the downloaded ZIP file
4. Copy the **`kubejs`** folder from inside the extracted folder to your Minecraft instance folder
   - The path should be: `YourMinecraftInstance/kubejs/`
   - Your instance folder is typically where your `mods`, `config`, and `saves` folders are located
5. Restart your game or run `/kubejs reload server_scripts` in-game

### Method 2: Clone the Repository
1. Clone this repository:
   ```bash
   git clone https://github.com/TheCrazy8/compot.git
   ```
2. Copy the **`kubejs`** folder to your Minecraft instance folder
3. Restart your game or run `/kubejs reload server_scripts` in-game

### Method 3: Download from Releases
1. Go to the [Releases page](https://github.com/TheCrazy8/compot/releases)
2. Download the latest `compot.zip` file
3. Extract and copy the `kubejs` folder to your Minecraft instance folder
4. Restart your game or run `/kubejs reload server_scripts` in-game

### Verifying Installation
After installation, you can verify the script is loaded by:
1. Checking the logs for KubeJS script loading messages
2. Running `/kubejs reload server_scripts` and checking for errors
3. Looking for the crops in Botany Pots using the seed items from the supported mods

## Requirements

### For KubeJS Scripts:
- Minecraft 1.21.1
- **KubeJS mod** (required to run the scripts)
- Botany Pots mod
- At least one of the supported mods:
  - Regions Unexplored
  - Atmospheric
  - Snowy Spirit
  - Rustic Delight

### For GUI Editor Mod:
- Minecraft 1.21.1
- **NeoForge** (21.1.x or higher)
- **KubeJS mod** (optional but recommended)

## Compatibility

This script is designed for Minecraft 1.21.1 with KubeJS. All crop definitions use the KubeJS Botany Pots integration with appropriate growth times, categories, and output items.

## Troubleshooting

### Scripts not loading?
1. **Ensure KubeJS is installed**: This integration requires the KubeJS mod to be installed in your mods folder
2. **Check the folder structure**: Make sure you copied the `kubejs` folder to your instance folder (where your `mods` folder is)
   - ✅ Correct: `YourInstance/kubejs/server_scripts/botanypots_crops.js`
   - ❌ Incorrect: `YourInstance/kubejs/kubejs/server_scripts/botanypots_crops.js`
   - ❌ Incorrect: `YourWorld/datapacks/kubejs/...`
3. **Check console/logs**: Look for any KubeJS error messages during startup
4. **Verify mod compatibility**: This script requires KubeJS 1.21.1 and Botany Pots
5. **Reload scripts**: Try running `/kubejs reload server_scripts` in-game
6. **Ensure Botany Pots is installed**: This script requires the Botany Pots mod to be installed
7. **Verify mod presence**: Make sure at least one of the supported mods (Regions Unexplored, Atmospheric, Snowy Spirit, or Rustic Delight) is installed

### Crops not appearing in Botany Pots?
- Ensure you have the seed items from the supported mods
- Verify you're using the correct soil type (most crops use "dirt" category)
- Make sure the required mod for that crop is installed
- Try reloading scripts with `/kubejs reload server_scripts`
- Check the latest.log for any KubeJS or Botany Pots errors

## Credits

Created for integration between multiple popular Minecraft mods and the Botany Pots automation system.

### GUI Editor
- Supports KubeJS recipe generation for multiple mods
- Open source - contributions welcome!

## License

MIT License - See LICENSE file for details