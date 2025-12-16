/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 09:43:19
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-05 11:44:54
 * @FilePath: /micro-platform/apps/finance-app/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prefixer from 'postcss-prefix-selector';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/micro-entry.tsx',
      formats: ['es'],
      name: 'financeApp',
      fileName: () => 'entry.js',
    },
  },
  css: {
    postcss: {
      plugins: [
        prefixer({
          // 核心配置：将所有 CSS 选择器前加上 #finance-root
          prefix: '#finance-root',
          exclude: [/theme\.scss$/, /variables\.scss$/],

          // 忽略 html 和 body 标签，或者对它们做特殊转换
          // transform(prefix, selector, prefixedSelector) {
          //   if (selector === 'body' || selector === 'html') {
          //     return prefix; // 把 body 样式转换为 #finance-root
          //   }
          //   return prefixedSelector; // 其他选择器如 .btn -> #finance-root .btn
          // },

          transform(prefix, selector, prefixedSelector) {

            // 避免重复添加前缀
            if (selector.includes(prefix)) {
              return selector;
            }
            // ----------------------------------------------------
            // 情况 1: 处理主题变量定义 (核心修复)
            // ----------------------------------------------------
            // 匹配诸如: html[data-theme=white], :root, body[theme=dark]
            if (selector.match(/^(html|body)\[/) || selector === ':root') {
              // 逻辑: 不要把 prefix 加在前面，而是加在后面
              // 也就是利用 "后代选择器" 继承全局状态

              console.log(selector, prefix);
              // 例子: html[data-theme=white]  ->  html[data-theme=white] #finance-root
              return selector;
            }

            // ----------------------------------------------------
            // 情况 2: 处理纯标签选择器 (通常是 reset 样式)
            // ----------------------------------------------------
            // 例子: body { margin: 0 } -> #finance-root { margin: 0 }
            if (selector === 'html' || selector === 'body') {
              return prefix;
            }

            console.log(prefixedSelector, 'prefixedSelector');
            // ----------------------------------------------------
            // 情况 3: 其他所有普通选择器 (默认行为)
            // ----------------------------------------------------
            // 例子: .btn -> #finance-root .btn
            return prefixedSelector;
          },
        }),
      ],
    },
  },
  server: {
    cors: true,
  },
});
