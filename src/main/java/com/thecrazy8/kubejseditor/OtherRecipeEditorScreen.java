package com.thecrazy8.kubejseditor;

import net.minecraft.client.gui.components.Button;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;

public class OtherRecipeEditorScreen extends Screen {
    private final Screen parent;
    
    public OtherRecipeEditorScreen(Screen parent) {
        super(Component.literal("Other Recipe Editors"));
        this.parent = parent;
    }
    
    @Override
    protected void init() {
        super.init();
        
        int buttonWidth = 200;
        int buttonHeight = 20;
        int spacing = 25;
        int startY = this.height / 2 - 100;
        
        // Create Mod Recipes
        this.addRenderableWidget(Button.builder(
            Component.literal("Create: Crushing"),
            button -> minecraft.setScreen(new CreateCrushingEditorScreen(this))
        ).bounds(this.width / 2 - buttonWidth / 2, startY, buttonWidth, buttonHeight).build());
        
        this.addRenderableWidget(Button.builder(
            Component.literal("Create: Mixing"),
            button -> minecraft.setScreen(new CreateMixingEditorScreen(this))
        ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing, buttonWidth, buttonHeight).build());
        
        this.addRenderableWidget(Button.builder(
            Component.literal("Create: Filling"),
            button -> minecraft.setScreen(new CreateFillingEditorScreen(this))
        ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing * 2, buttonWidth, buttonHeight).build());
        
        // Farmer's Delight Recipes
        this.addRenderableWidget(Button.builder(
            Component.literal("Farmer's Delight: Cooking Pot"),
            button -> minecraft.setScreen(new FDCookingPotEditorScreen(this))
        ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing * 3, buttonWidth, buttonHeight).build());
        
        this.addRenderableWidget(Button.builder(
            Component.literal("Farmer's Delight: Cutting Board"),
            button -> minecraft.setScreen(new FDCuttingBoardEditorScreen(this))
        ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing * 4, buttonWidth, buttonHeight).build());
        
        // Stonecutting and Smithing
        this.addRenderableWidget(Button.builder(
            Component.literal("Stonecutting"),
            button -> minecraft.setScreen(new StonecuttingEditorScreen(this))
        ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing * 5, buttonWidth, buttonHeight).build());
        
        this.addRenderableWidget(Button.builder(
            Component.literal("Smithing"),
            button -> minecraft.setScreen(new SmithingEditorScreen(this))
        ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing * 6, buttonWidth, buttonHeight).build());
        
        // Back button
        this.addRenderableWidget(Button.builder(
            Component.literal("Back"),
            button -> this.minecraft.setScreen(parent)
        ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing * 8, buttonWidth, buttonHeight).build());
    }
    
    @Override
    public void render(net.minecraft.client.gui.GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) {
        this.renderBackground(guiGraphics, mouseX, mouseY, partialTick);
        super.render(guiGraphics, mouseX, mouseY, partialTick);
        guiGraphics.drawCenteredString(this.font, this.title, this.width / 2, 20, 0xFFFFFF);
    }
    
    @Override
    public boolean isPauseScreen() {
        return false;
    }
}
