package com.thecrazy8.kubejseditor;

import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.components.Button;
import net.minecraft.client.gui.screens.Screen;
import net.minecraft.network.chat.Component;
import net.neoforged.api.distmarker.Dist;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.client.event.ClientTickEvent;
import net.neoforged.neoforge.client.event.RegisterKeyMappingsEvent;
import net.neoforged.neoforge.common.NeoForge;
import org.lwjgl.glfw.GLFW;

import com.mojang.blaze3d.platform.InputConstants;
import net.minecraft.client.KeyMapping;

@Mod("kubejseditor")
public class KubeJSEditorMod {
    
    public static final String MOD_ID = "kubejseditor";
    public static KeyMapping openEditorKey;
    
    public KubeJSEditorMod(IEventBus modEventBus) {
        // Register client events
        NeoForge.EVENT_BUS.register(ClientEvents.class);
    }
    
    @EventBusSubscriber(modid = MOD_ID, bus = EventBusSubscriber.Bus.MOD, value = Dist.CLIENT)
    public static class ModClientEvents {
        @SubscribeEvent
        public static void registerKeyMappings(RegisterKeyMappingsEvent event) {
            openEditorKey = new KeyMapping(
                "key.kubejseditor.open_editor",
                InputConstants.Type.KEYSYM,
                GLFW.GLFW_KEY_K,
                "key.categories.kubejseditor"
            );
            event.register(openEditorKey);
        }
    }
    
    @EventBusSubscriber(modid = MOD_ID, value = Dist.CLIENT)
    public static class ClientEvents {
        @SubscribeEvent
        public static void onClientTick(ClientTickEvent.Post event) {
            Minecraft minecraft = Minecraft.getInstance();
            if (openEditorKey != null && openEditorKey.consumeClick() && minecraft.screen == null) {
                minecraft.setScreen(new MainEditorScreen());
            }
        }
    }
    
    public static class MainEditorScreen extends Screen {
        
        public MainEditorScreen() {
            super(Component.literal("KubeJS Recipe Editor"));
        }
        
        @Override
        protected void init() {
            super.init();
            
            int buttonWidth = 200;
            int buttonHeight = 20;
            int spacing = 25;
            int startY = this.height / 2 - 100;
            
            // Botany Pots Editor
            this.addRenderableWidget(Button.builder(
                Component.literal("Botany Pots Crops"),
                button -> minecraft.setScreen(new BotanyPotsCropEditorScreen(this))
            ).bounds(this.width / 2 - buttonWidth / 2, startY, buttonWidth, buttonHeight).build());
            
            // Vanilla Crafting
            this.addRenderableWidget(Button.builder(
                Component.literal("Shaped Crafting"),
                button -> minecraft.setScreen(new ShapedCraftingEditorScreen(this))
            ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing, buttonWidth, buttonHeight).build());
            
            this.addRenderableWidget(Button.builder(
                Component.literal("Shapeless Crafting"),
                button -> minecraft.setScreen(new ShapelessCraftingEditorScreen(this))
            ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing * 2, buttonWidth, buttonHeight).build());
            
            this.addRenderableWidget(Button.builder(
                Component.literal("Smelting Recipes"),
                button -> minecraft.setScreen(new SmeltingEditorScreen(this))
            ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing * 3, buttonWidth, buttonHeight).build());
            
            this.addRenderableWidget(Button.builder(
                Component.literal("Other Recipes"),
                button -> minecraft.setScreen(new OtherRecipeEditorScreen(this))
            ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing * 4, buttonWidth, buttonHeight).build());
            
            // Close button
            this.addRenderableWidget(Button.builder(
                Component.literal("Close"),
                button -> this.onClose()
            ).bounds(this.width / 2 - buttonWidth / 2, startY + spacing * 6, buttonWidth, buttonHeight).build());
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
}
