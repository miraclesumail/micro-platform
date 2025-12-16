/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 10:44:12
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-04 13:23:13
 * @FilePath: /micro-platform/apps/mall-app/src/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE,
 */
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Mall } from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <Mall />
);
