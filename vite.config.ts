/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const config = {
  docs: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  dist: {
    emptyOutDir: true,
    lib: {
      entry: 'src/lib/index.ts',
      name: 'Headless Wizard',
      fileName: (format: string[]) => `HeadlessWizard.${format}.js`,
    },
  },
}

const currentConfig = config[process.env.BUILD ?? '']

// https://vitejs.dev/config/
export default defineConfig({
  base: '/headless-wizard/',
  server: {
    port: 5432,
  },
  build: {
    ...currentConfig,
  },
  plugins: [react()],
  test: {
    coverage: {
      include: ['src/**/*.ts'],
      exclude: [
        'src/types',
        'src/**/*.d.ts',
        'src/**/*.atom.ts',
        'src/**/*.test.ts',
      ],
      all: true,
    },
  },
})
