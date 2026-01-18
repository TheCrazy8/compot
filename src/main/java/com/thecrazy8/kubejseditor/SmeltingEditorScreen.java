package com.thecrazy8.kubejseditor;

import net.minecraft.client.gui.components.Button;
import net.minecraft.client.gui.components.EditBox;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class SmeltingEditorScreen extends Screen {
    private final Screen parent;
    private EditBox outputItemBox;
    private EditBox inputItemBox;
    private EditBox experienceBox;
    private EditBox cookingTimeBox;
    private String recipeType = "smelting"; // default
    
    public SmeltingEditorScreen(Screen parent) {
        super(Component.literal("Smelting Recipe Editor"));
        this.parent = parent;
    }
    
    @Override
    protected void init() {
        super.init();
        
        int leftMargin = 20;
        int topMargin = 60;
        int fieldWidth = this.width - 40;
        int fieldHeight = 20;
        int spacing = 30;
        
        // Recipe type buttons
        int btnWidth = 80;
        int btnSpacing = 85;
        this.addRenderableWidget(Button.builder(
            Component.literal("Furnace"),
            button -> recipeType = "smelting"
        ).bounds(leftMargin, topMargin - 30, btnWidth, fieldHeight).build());
        
        this.addRenderableWidget(Button.builder(
            Component.literal("Blast"),
            button -> recipeType = "blasting"
        ).bounds(leftMargin + btnSpacing, topMargin - 30, btnWidth, fieldHeight).build());
        
        this.addRenderableWidget(Button.builder(
            Component.literal("Smoker"),
            button -> recipeType = "smoking"
        ).bounds(leftMargin + btnSpacing * 2, topMargin - 30, btnWidth, fieldHeight).build());
        
        this.addRenderableWidget(Button.builder(
            Component.literal("Campfire"),
            button -> recipeType = "campfire_cooking"
        ).bounds(leftMargin + btnSpacing * 3, topMargin - 30, btnWidth, fieldHeight).build());
        
        // Input Item
        this.addRenderableWidget(Button.builder(
            Component.literal("Input Item:"),
            button -> {}
        ).bounds(leftMargin, topMargin, 100, fieldHeight).build()).active = false;
        
        inputItemBox = new EditBox(this.font, leftMargin + 110, topMargin, fieldWidth - 110, fieldHeight, Component.literal("Input Item"));
        inputItemBox.setHint(Component.literal("e.g., minecraft:iron_ore"));
        this.addRenderableWidget(inputItemBox);
        
        // Output Item
        this.addRenderableWidget(Button.builder(
            Component.literal("Output Item:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing, 100, fieldHeight).build()).active = false;
        
        outputItemBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing, fieldWidth - 110, fieldHeight, Component.literal("Output Item"));
        outputItemBox.setHint(Component.literal("e.g., minecraft:iron_ingot"));
        this.addRenderableWidget(outputItemBox);
        
        // Experience
        this.addRenderableWidget(Button.builder(
            Component.literal("Experience:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing * 2, 100, fieldHeight).build()).active = false;
        
        experienceBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing * 2, fieldWidth - 110, fieldHeight, Component.literal("Experience"));
        experienceBox.setHint(Component.literal("e.g., 0.7"));
        experienceBox.setValue("0.0");
        this.addRenderableWidget(experienceBox);
        
        // Cooking Time
        this.addRenderableWidget(Button.builder(
            Component.literal("Cook Time:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing * 3, 100, fieldHeight).build()).active = false;
        
        cookingTimeBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing * 3, fieldWidth - 110, fieldHeight, Component.literal("Cooking Time"));
        cookingTimeBox.setHint(Component.literal("e.g., 200 (ticks, default 200)"));
        cookingTimeBox.setValue("200");
        this.addRenderableWidget(cookingTimeBox);
        
        // Save button
        this.addRenderableWidget(Button.builder(
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
            String inputItem = inputItemBox.getValue().trim();
            String outputItem = outputItemBox.getValue().trim();
            String experience = experienceBox.getValue().trim();
            String cookTime = cookingTimeBox.getValue().trim();
            
            if (inputItem.isEmpty() || outputItem.isEmpty()) {
                return;
            }
            
            StringBuilder script = new StringBuilder();
            script.append("// Smelting Recipe (").append(recipeType).append(")\n");
            script.append("// Generated by KubeJS GUI Editor\n\n");
            script.append("ServerEvents.recipes(event => {\n");
            script.append("    event.").append(recipeType).append("(\n");
            script.append("        '").append(outputItem).append("',\n");
            script.append("        '").append(inputItem).append("'");
            
            if (!experience.isEmpty() && !experience.equals("0.0")) {
                script.append(",\n        ").append(experience);
            }
            
            script.append("\n    )");
            
            if (!cookTime.isEmpty() && !cookTime.equals("200")) {
                script.append(".cookingTime(").append(cookTime).append(")");
            }
            
            script.append(";\n");
            script.append("});\n");
            
            File minecraftDir = this.minecraft.gameDirectory;
            File kubejsDir = new File(minecraftDir, "kubejs/server_scripts");
            kubejsDir.mkdirs();
            
            File scriptFile = new File(kubejsDir, recipeType + "_custom.js");
            try (FileWriter writer = new FileWriter(scriptFile)) {
                writer.write(script.toString());
            }
            
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
        
        guiGraphics.drawString(this.font, "Current Type: " + recipeType, 20, 45, 0xFFFF00);
        guiGraphics.drawString(this.font, "200 ticks = 10 seconds", 20, this.height - 65, 0xAAAAAA);
    }
    
    @Override
    public boolean isPauseScreen() {
        return false;
    }
}
