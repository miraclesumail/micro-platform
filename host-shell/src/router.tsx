/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 09:31:04
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-04 21:34:32
 * @FilePath: /micro-platform/host-shell/src/router.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import { loadMicroApp } from './microfe/loader';
import { getApps } from './microfe/register';
import AuthLayout from './layout/auth';
import MainLayout from './layout/main';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import PublicRoute from './components/PublicRoute';

const MicroWrapper = (props: any) => {
  const { app, store } = props;
  const ref: any = React.useRef(null);
  const containerId = `${app.name}-root`;

  React.useEffect(() => {
    // 1. 创建新的实际渲染容器
    // const microContainer = document.createElement('div');
    // microContainer.id = `${app.name}-root-${Date.now()}`;
    // console.log(ref.current, 'ref.currentref.current');
    // (ref.current as HTMLElement).appendChild(microContainer);

    loadMicroApp(app).then((micro) => {
      micro?.bootstrap();
      micro?.mount && micro.mount(ref.current, { user: 'admin', store });
    });

    return () => {
      console.log(app.name, 'app.nameapp.nameapp.name');
      (window[app.name] as any)?.unmount?.();
      document.querySelector(`#js_${app.name}`)?.remove();
      document.querySelector(`#css_${app.name}`)?.remove();
    };
  }, [app.name, containerId]);

  React.useEffect(() => {
    console.log('props changed');
  }, [props]);

  return <div ref={ref} id={containerId} />;
};

export default function Router() {
  const apps = getApps();

  return (
    <Routes>
      {/* <Route path='/' key='main' element={<h1>🏠 Host Shell</h1>} /> */}
      <Route element={<AuthLayout />}>
        <Route element={<PublicRoute restricted redirectTo={'/finance'} />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Route>

      <Route element={<MainLayout />}>
        <Route element={<ProtectedRoute />}>
          {apps.map((app) => (
            <Route
              key={app.name}
              path={app.route}
              element={<MicroWrapper app={app} key={app.name} store={globalStore} />}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  );
}

function createStore(initialState: any) {
  let state = initialState;
  const listeners = new Set();

  return {
    getState() {
      return state;
    },

    dispatch(partial: any) {
      state = { ...state, ...partial };
      listeners.forEach((fn) => (fn as Function)(state));
    },

    subscribe(fn: any) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
  };
}

// 单例 store
const globalStore = createStore({
  user: 'aaa',
  theme: 'light',
  notifications: [],
});
