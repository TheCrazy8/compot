package com.thecrazy8.kubejseditor;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.minecraft.client.gui.components.Button;
import net.minecraft.client.gui.components.EditBox;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class BotanyPotsCropEditorScreen extends Screen {
    private final Screen parent;
    private EditBox seedItemBox;
    private EditBox categoriesBox;
    private EditBox growthTicksBox;
    private EditBox displayBlockBox;
    private EditBox resultsBox;
    private Button saveButton;
    
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
    
    public BotanyPotsCropEditorScreen(Screen parent) {
        super(Component.literal("Botany Pots Crop Editor"));
        this.parent = parent;
    }
    
    @Override
    protected void init() {
        super.init();
        
        int leftMargin = 20;
        int topMargin = 40;
        int fieldWidth = this.width - 40;
        int fieldHeight = 20;
        int spacing = 30;
        
        // Seed Item
        this.addRenderableWidget(Button.builder(
            Component.literal("Seed Item:"),
            button -> {}
        ).bounds(leftMargin, topMargin, 100, fieldHeight).build()).active = false;
        
        seedItemBox = new EditBox(this.font, leftMargin + 110, topMargin, fieldWidth - 110, fieldHeight, Component.literal("Seed Item"));
        seedItemBox.setHint(Component.literal("e.g., minecraft:wheat_seeds"));
        this.addRenderableWidget(seedItemBox);
        
        // Categories
        this.addRenderableWidget(Button.builder(
            Component.literal("Categories:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing, 100, fieldHeight).build()).active = false;
        
        categoriesBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing, fieldWidth - 110, fieldHeight, Component.literal("Categories"));
        categoriesBox.setHint(Component.literal("e.g., dirt,sand (comma-separated)"));
        this.addRenderableWidget(categoriesBox);
        
        // Growth Ticks
        this.addRenderableWidget(Button.builder(
            Component.literal("Growth Ticks:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing * 2, 100, fieldHeight).build()).active = false;
        
        growthTicksBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing * 2, fieldWidth - 110, fieldHeight, Component.literal("Growth Ticks"));
        growthTicksBox.setHint(Component.literal("e.g., 2400 (20 ticks = 1 second)"));
        this.addRenderableWidget(growthTicksBox);
        
        // Display Block
        this.addRenderableWidget(Button.builder(
            Component.literal("Display Block:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing * 3, 100, fieldHeight).build()).active = false;
        
        displayBlockBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing * 3, fieldWidth - 110, fieldHeight, Component.literal("Display Block"));
        displayBlockBox.setHint(Component.literal("e.g., minecraft:wheat"));
        this.addRenderableWidget(displayBlockBox);
        
        // Results (simplified as JSON string)
        this.addRenderableWidget(Button.builder(
            Component.literal("Results:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing * 4, 100, fieldHeight).build()).active = false;
        
        resultsBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing * 4, fieldWidth - 110, fieldHeight * 3, Component.literal("Results"));
        resultsBox.setHint(Component.literal("Format: item,chance,minRolls,maxRolls (one per line)"));
        this.addRenderableWidget(resultsBox);
        
        // Save button
        saveButton = this.addRenderableWidget(Button.builder(
            Component.literal("Generate & Download Script"),
            button -> generateAndDownloadScript()
        ).bounds(this.width / 2 - 100, this.height - 50, 200, 20).build());
        
        // Back button
        this.addRenderableWidget(Button.builder(
            Component.literal("Back"),
            button -> this.minecraft.setScreen(parent)
        ).bounds(this.width / 2 - 100, this.height - 28, 200, 20).build());
    }
    
    private void generateAndDownloadScript() {
        try {
            String seedItem = seedItemBox.getValue().trim();
            String categories = categoriesBox.getValue().trim();
            String growthTicks = growthTicksBox.getValue().trim();
            String displayBlock = displayBlockBox.getValue().trim();
            
            if (seedItem.isEmpty() || categories.isEmpty() || growthTicks.isEmpty()) {
                // Show error - simplified for now
                return;
            }
            
            // Build KubeJS script
            StringBuilder script = new StringBuilder();
            script.append("// Botany Pots Crop Recipe\n");
            script.append("// Generated by KubeJS GUI Editor\n\n");
            script.append("ServerEvents.recipes(event => {\n");
            script.append("    event.custom({\n");
            script.append("        type: 'botanypots:crop',\n");
            script.append("        seed: { item: '").append(seedItem).append("' },\n");
            
            // Categories
            script.append("        categories: [");
            String[] cats = categories.split(",");
            for (int i = 0; i < cats.length; i++) {
                script.append("'").append(cats[i].trim()).append("'");
                if (i < cats.length - 1) script.append(", ");
            }
            script.append("],\n");
            
            script.append("        growthTicks: ").append(growthTicks).append(",\n");
            
            if (!displayBlock.isEmpty()) {
                script.append("        display: { block: '").append(displayBlock).append("' },\n");
            }
            
            // Results - parse from text box
            script.append("        results: [\n");
            String resultsText = resultsBox.getValue().trim();
            if (!resultsText.isEmpty()) {
                String[] lines = resultsText.split("\n");
                for (int i = 0; i < lines.length; i++) {
                    String line = lines[i].trim();
                    if (!line.isEmpty()) {
                        String[] parts = line.split(",");
                        if (parts.length >= 4) {
                            script.append("            { chance: ").append(parts[1].trim())
                                  .append(", output: { item: '").append(parts[0].trim()).append("' }")
                                  .append(", minRolls: ").append(parts[2].trim())
                                  .append(", maxRolls: ").append(parts[3].trim())
                                  .append(" }");
                            if (i < lines.length - 1) script.append(",");
                            script.append("\n");
                        }
                    }
                }
            }
            script.append("        ]\n");
            script.append("    });\n");
            script.append("});\n");
            
            // Save to file
            File minecraftDir = this.minecraft.gameDirectory;
            File kubejsDir = new File(minecraftDir, "kubejs/server_scripts");
            kubejsDir.mkdirs();
            
            File scriptFile = new File(kubejsDir, "botanypots_custom_crop.js");
            try (FileWriter writer = new FileWriter(scriptFile)) {
                writer.write(script.toString());
            }
            
            // Notify user
            this.minecraft.player.sendSystemMessage(Component.literal("§aScript saved to: " + scriptFile.getAbsolutePath()));
            
        } catch (IOException e) {
            this.minecraft.player.sendSystemMessage(Component.literal("§cError saving script: " + e.getMessage()));
        }
    }
    
    @Override
    public void render(net.minecraft.client.gui.GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) {
        this.renderBackground(guiGraphics, mouseX, mouseY, partialTick);
        super.render(guiGraphics, mouseX, mouseY, partialTick);
        guiGraphics.drawCenteredString(this.font, this.title, this.width / 2, 15, 0xFFFFFF);
        
        // Draw help text
        guiGraphics.drawString(this.font, "Results format: item,chance,minRolls,maxRolls", 20, this.height - 75, 0xAAAAAA);
        guiGraphics.drawString(this.font, "Example: minecraft:wheat,1.0,2,4", 20, this.height - 65, 0xAAAAAA);
    }
    
    @Override
    public boolean isPauseScreen() {
        return false;
    }
}
