/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 09:49:07
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-04 19:47:08
 * @FilePath: /micro-platform/apps/finance-app/src/micro-entry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ReactDOM from 'react-dom/client';
import App from './App';

// let root: any = null;

// window.mall = {
//   bootstrap() {
//     console.log('app mall bootsrap');
//   },
//   mount(container, props) {
//     root = ReactDOM.createRoot(container);
//     root.render(<App user={props.user} store={props.store} />);
//   },
//   unmount() {
//     root?.unmount();
//   },
// };

let root: any = null;

window.travel = {
  bootstrap() {
    console.log('app travel bootsrap');
  },
  mount(container, props) {
    if (root) {
      root.render(<App user={props.user} store={props.store} />);
      return;
    }
    root = ReactDOM.createRoot(container);
    root.render(<App user={props.user} store={props.store} />);
  },
  unmount() {
    root?.unmount();
    root = null;
  },
};

export default {
  appName: 'travel'
}
