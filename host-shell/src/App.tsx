/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 09:16:57
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-16 13:48:55
 * @FilePath: /micro-platform/host-shell/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <div>
        <nav style={{ marginBottom: 20 }}>
          <Link to='/finance'>finance</Link>
          <Link to='/mall'>mall</Link>
        </nav> */}
      <Router />
    </BrowserRouter>
  );
}

export default App;
