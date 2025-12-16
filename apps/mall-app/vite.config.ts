/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 09:43:19
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-03 10:58:45
 * @FilePath: /micro-platform/apps/finance-app/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/micro-entry.tsx',
      formats: ['umd'],
      name: 'mallApp',
      fileName: () => 'entry.js',
    },
  },
  server: {
    cors: true,
  },
});
