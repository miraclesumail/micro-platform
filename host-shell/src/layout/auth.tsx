/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 18:17:30
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-03 18:17:40
 * @FilePath: /micro-platform/host-shell/src/layout/auth.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='auth-layout'>
      <div className='auth-container'>
        this is auth layout
        <div className='auth-content'>
          <Outlet />
        </div>
        <div className='auth-background'>
          <div className='auth-overlay'></div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
