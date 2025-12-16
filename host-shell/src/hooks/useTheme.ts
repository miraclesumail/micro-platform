/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-04 20:43:46
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-04 20:43:50
 * @FilePath: /micro-platform/host-shell/src/hooks/useTheme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// hooks/useTheme.js
import { useState, useEffect } from 'react';

const useTheme = () => {
  // 默认主题设为 'white'，也可以从 localStorage 读取
  const [theme, setTheme] = useState('white');

  useEffect(() => {
    // 核心逻辑：修改 html 标签上的 data-theme 属性
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

export default useTheme;
