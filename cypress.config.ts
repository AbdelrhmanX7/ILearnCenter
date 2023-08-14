import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'd74iae',
  e2e: {
    baseUrl: "http://localhost:3000",
    defaultCommandTimeout: 60000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
