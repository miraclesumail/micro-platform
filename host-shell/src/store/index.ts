/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-04 13:59:52
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-04 14:12:06
 * @FilePath: /micro-platform/host-shell/src/store/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { create } from 'zustand';
import type { User } from '../pages/Login';

type State = {
  currentUser: User;
  loginTime: string;
};

type Action = {
  setinfo: (state: State) => void;
};

const initState: State = {
  currentUser: {} as User,
  loginTime: '',
};

export const useTeststore = create<State & Action>((set, get) => ({
  ...initState,
  setinfo: (newState) => set((state) => ({ ...state, ...newState })),

  //   increase: () => set((state) => ({ ...state, age: state.age + 1 })),
  //   changeName: (name: string) => {
  //     console.log(get().age);
  //     set({ name });
  //   },
}));

// useTeststore.subscribe((state, prev) => {
//   console.log('now is', state);
//   console.log('prev is', prev);
// });
