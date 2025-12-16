import { useEffect, useState } from 'react';
import './style.scss'

/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 09:43:19
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-04 20:39:36
 * @FilePath: /micro-platform/apps/finance-app/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function Finance({ store }: any) {
  const [state, setState] = useState(store.getState());

  if (!window.location.pathname.startsWith('/mall')) {
    return null;
  }

  useEffect(() => {
    const fn = store.subscribe(setState);
    console.log(store, 'in mall');

    return fn;
  }, []);

  return (
    <div className='container'>
      <h2 onClick={() => store.dispatch({ user: 'totm' })}>mall app</h2>
      <p>this is user {state.user}</p>
    </div>
  );
}

export function Mall() {
  return <div>this is dev mall</div>;
}
