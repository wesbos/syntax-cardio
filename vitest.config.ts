import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: false,
    include: ["**/*.test.ts"],
    exclude: ["**/cardio.test.ts"],
    printConsoleTrace: true,
  },
});
