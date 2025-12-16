/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 18:16:14
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-03 18:27:19
 * @FilePath: /micro-platform/host-shell/src/layout/main.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './layout.css';

const MainLayout = () => {
  return (
    <div className='main-layout'>
      <Header />
      <div className='layout-content'>
        <Sidebar />
        <main className='main-content'>
          <div className='content-wrapper'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
