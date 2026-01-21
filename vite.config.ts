import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        greetingbot: resolve(__dirname, "greetingbot.html"),
        form: resolve(__dirname, "form.html"),
        list: resolve(__dirname, "list.html"),
        colorswitcher: resolve(__dirname, "colorswitcher.html"),
        activenavbar: resolve(__dirname, "activenavbar.html"),
        dynamicusermanager: resolve(__dirname, "dynamicusermanager.html"),
        textFormatter : resolve(__dirname,"textformatter.html"),
        passwordtoggle:resolve(__dirname,"passwordtoggle.html"),
        bulletpoint:resolve(__dirname,"bulletpoints.html"),
        cardcounter:resolve(__dirname,"cardcounter.html"),
        toggle:resolve(__dirname,"toggle.html"),
        textcounter:resolve(__dirname,"textcounter.html"),
      },
    },
  },
});
