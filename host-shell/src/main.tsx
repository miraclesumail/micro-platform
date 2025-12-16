/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 09:16:57
 * @LastEditors: sumail sumail@xyzzdev.com
import { registerMicroApp } from './microfe/register.ts'
 * @LastEditTime: 2025-12-04 20:10:20
 * @FilePath: /micro-platform/host-shell/src/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { registerMicroApp } from './microfe/register.ts';

// 注册子应用
registerMicroApp({
  name: 'finance',
  entry: 'http://localhost:4001/dist/entry.js',
  style: 'http://localhost:4001/dist/finance-app.css',
  route: '/finance/*',
});

registerMicroApp({
  name: 'mall',
  entry: 'http://localhost:4002/dist/entry.js',
  style: 'http://localhost:4002/dist/mall-app.css',
  route: '/mall/*',
});

registerMicroApp({
  name: 'travel',
  entry: 'http://localhost:4003/dist/entry.js',
  style: 'http://localhost:4003/dist/travel-app.css',
  route: '/travel/*',
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
