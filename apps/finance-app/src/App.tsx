/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 09:43:19
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-04 23:11:13
 * @FilePath: /micro-platform/apps/finance-app/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Settings from './pages/Setting';
import { useEffect, useState } from 'react';
import RouteSync from './components/RouteSync';
import './style.scss';

export default function App({ store }: any) {
  const [state, setState] = useState(store.getState());

  // 🛡️ 核心修复代码：哨兵检查
  // 浏览器 URL 已经变成 /mall 了，但 React 还没来得及卸载这个组件
  // 此时直接返回 null，防止 Router 尝试去匹配不属于它的 URL
  if (!window.location.pathname.startsWith('/finance')) {
    return null;
  }

  useEffect(() => {
    const fn = store.subscribe(setState);
    console.log(store, 'in mall');

    return fn;
  }, []);

  return (
    <Router basename='/finance'>
      <div>
        <h2 onClick={() => store.dispatch({ user: 'finannan' })} className='finance'>
          💰 Finance App
        </h2>
        <p className='user' style={{ color: 'var(--text-color)' }}>
          User111: {state.user}
        </p>
        <nav style={{ marginBottom: 20 }}>
          <Link to='/'>Dashboard</Link>
          <Link to='/reports'>Reports</Link>
          <Link to='/settings'>Settings</Link>
        </nav>
        <RouteSync basename={'/finance'} />
        <Routes>
          <Route path='/' element={<Dashboard />} index />
          <Route path='/reports' element={<Reports />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}
