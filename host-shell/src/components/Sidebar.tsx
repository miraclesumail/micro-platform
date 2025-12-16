/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 18:18:48
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-05 19:28:22
 * @FilePath: /micro-platform/host-shell/src/components/Sidebar.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useTeststore } from '../store';
import React, { Children, createContext, useEffect, useState, type ReactNode } from 'react';

export default function Sidebar() {
  const { currentUser } = useTeststore((state) => state);

  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    navigate(path);
    // 手动派发一个事件，通知子应用去检查 URL
    window.dispatchEvent(new Event('popstate'));
    // 或者派发自定义事件: window.dispatchEvent(new Event('micro_app_route_change'));
  };

  return (
    <aside className='sidebar'>
      {/* <Link to='/finance' >finance</Link>
      <Link to='/mall'>mall</Link>
      <Link to='/travel'>travel</Link> */}
      {currentUser.permissions?.map((permission) => (
        <div onClick={() => handleLinkClick(`/${permission}`)} key={permission}>
          {permission}
        </div>
      ))}
    </aside>
  );
}

const RouterProvider = createContext({});

const BS = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState({ pathname: window.location.pathname });

  const navigate = (to: string) => {};

  // 处理浏览器前进/后退按钮 (popstate 事件)
  useEffect(() => {
    const handlePopState = () => {
      setLocation({ pathname: window.location.pathname });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return <RouterProvider.Provider value={{ navigate, location }}></RouterProvider.Provider>;
};


