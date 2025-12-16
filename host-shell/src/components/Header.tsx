/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 18:19:01
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-04 21:17:47
 * @FilePath: /micro-platform/host-shell/src/components/Header.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { useTeststore } from '../store';
import useTheme from '../hooks/useTheme';

export default function Header() {
  const { setTheme } = useTheme();

  const { currentUser, loginTime } = useTeststore((state) => state);

  return (
    <header className='root-header'>
      this is header 🏠 Host Shell 当前用户{currentUser.name} 登录时间 {loginTime}
      <div style={{ marginTop: '20px', display: 'flex' }}>
        <button onClick={() => setTheme('white')}>白色主题 (White)</button>
        <button onClick={() => setTheme('black')}>黑色主题 (Black)</button>
        <button onClick={() => setTheme('gray')}>灰色主题 (Gray)</button>
      </div>
    </header>
  );
}
