package com.thecrazy8.kubejseditor;

import net.minecraft.client.gui.components.Button;
import net.minecraft.client.gui.components.EditBox;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class FDCookingPotEditorScreen extends Screen {
    private final Screen parent;
    private EditBox outputItemBox;
    private EditBox outputCountBox;
    private EditBox ingredientsBox;
    private EditBox cookingTimeBox;
    private EditBox experienceBox;
    private EditBox containerBox;
    
    public FDCookingPotEditorScreen(Screen parent) {
        super(Component.literal("Farmer's Delight: Cooking Pot Editor"));
        this.parent = parent;
    }
    
    @Override
    protected void init() {
        super.init();
        
        int leftMargin = 20;
        int topMargin = 40;
        int fieldWidth = this.width - 40;
        int fieldHeight = 20;
        int spacing = 25;
        
        // Output Item
        this.addRenderableWidget(Button.builder(
            Component.literal("Output Item:"),
            button -> {}
        ).bounds(leftMargin, topMargin, 100, fieldHeight).build()).active = false;
        
        outputItemBox = new EditBox(this.font, leftMargin + 110, topMargin, fieldWidth - 110, fieldHeight, Component.literal("Output Item"));
        outputItemBox.setHint(Component.literal("e.g., minecraft:mushroom_stew"));
        this.addRenderableWidget(outputItemBox);
        
        // Output Count
        this.addRenderableWidget(Button.builder(
            Component.literal("Count:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing, 100, fieldHeight).build()).active = false;
        
        outputCountBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing, fieldWidth - 110, fieldHeight, Component.literal("Output Count"));
        outputCountBox.setHint(Component.literal("e.g., 1"));
        outputCountBox.setValue("1");
        this.addRenderableWidget(outputCountBox);
        
        // Ingredients
        this.addRenderableWidget(Button.builder(
            Component.literal("Ingredients:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing * 2, 100, fieldHeight).build()).active = false;
        
        ingredientsBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing * 2, fieldWidth - 110, fieldHeight * 2, Component.literal("Ingredients"));
        ingredientsBox.setHint(Component.literal("One per line:\nminecraft:brown_mushroom\nminecraft:red_mushroom"));
        this.addRenderableWidget(ingredientsBox);
        
        // Cooking Time
        this.addRenderableWidget(Button.builder(
            Component.literal("Cook Time:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing * 4 + 20, 100, fieldHeight).build()).active = false;
        
        cookingTimeBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing * 4 + 20, fieldWidth - 110, fieldHeight, Component.literal("Cooking Time"));
        cookingTimeBox.setHint(Component.literal("e.g., 200 (ticks)"));
        cookingTimeBox.setValue("200");
        this.addRenderableWidget(cookingTimeBox);
        
        // Experience
        this.addRenderableWidget(Button.builder(
            Component.literal("Experience:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing * 5 + 20, 100, fieldHeight).build()).active = false;
        
        experienceBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing * 5 + 20, fieldWidth - 110, fieldHeight, Component.literal("Experience"));
        experienceBox.setHint(Component.literal("e.g., 0.35"));
        experienceBox.setValue("0.0");
        this.addRenderableWidget(experienceBox);
        
        // Container
        this.addRenderableWidget(Button.builder(
            Component.literal("Container:"),
            button -> {}
        ).bounds(leftMargin, topMargin + spacing * 6 + 20, 100, fieldHeight).build()).active = false;
        
        containerBox = new EditBox(this.font, leftMargin + 110, topMargin + spacing * 6 + 20, fieldWidth - 110, fieldHeight, Component.literal("Container"));
        containerBox.setHint(Component.literal("e.g., minecraft:bowl (optional)"));
        this.addRenderableWidget(containerBox);
        
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
            String outputItem = outputItemBox.getValue().trim();
            String outputCount = outputCountBox.getValue().trim();
            String ingredients = ingredientsBox.getValue().trim();
            String cookTime = cookingTimeBox.getValue().trim();
            String experience = experienceBox.getValue().trim();
            String container = containerBox.getValue().trim();
            
            if (outputItem.isEmpty() || ingredients.isEmpty()) {
                return;
            }
            
            StringBuilder script = new StringBuilder();
            script.append("// Farmer's Delight: Cooking Pot Recipe\n");
            script.append("// Generated by KubeJS GUI Editor\n\n");
            script.append("ServerEvents.recipes(event => {\n");
            script.append("    event.recipes.farmersdelight.cooking([\n");
            script.append("        Item.of('").append(outputItem).append("', ")
                  .append(outputCount.isEmpty() ? "1" : outputCount).append("),\n");
            script.append("        1\n");
            script.append("    ], [\n");
            
            String[] items = ingredients.split("\n");
            for (int i = 0; i < items.length; i++) {
                String item = items[i].trim();
                if (!item.isEmpty()) {
                    script.append("        '").append(item).append("'");
                    if (i < items.length - 1) script.append(",");
                    script.append("\n");
                }
            }
            
            script.append("    ])\n");
            script.append("    .cookingTime(").append(cookTime.isEmpty() ? "200" : cookTime).append(")\n");
            script.append("    .experience(").append(experience.isEmpty() ? "0.0" : experience).append(")");
            
            if (!container.isEmpty()) {
                script.append("\n    .container('").append(container).append("')");
            }
            
            script.append(";\n");
            script.append("});\n");
            
            File minecraftDir = this.minecraft.gameDirectory;
            File kubejsDir = new File(minecraftDir, "kubejs/server_scripts");
            kubejsDir.mkdirs();
            
            File scriptFile = new File(kubejsDir, "farmersdelight_cooking_pot_custom.js");
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
    }
    
    @Override
    public boolean isPauseScreen() {
        return false;
    }
}
