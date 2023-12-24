"use strict";

window.onload = function()
{
    var emulator = window.emulator = new V86Starter({
        wasm_path: "./mp3_demo/v86.wasm",
        memory_size: 32 * 1024 * 1024,
        vga_memory_size: 4 * 1024,
        screen_container: document.getElementById("screen_container"),
        bios: {
            url: "./mp3_demo/seabios.bin",
        },
        vga_bios: {
            url: "./mp3_demo/vgabios.bin",
        },
        hda: {
            url: "./mp3_demo/mp3.img",
        },
        autostart: true,
    });
}