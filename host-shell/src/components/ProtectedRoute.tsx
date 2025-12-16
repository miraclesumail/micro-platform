/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 18:38:21
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-04 14:13:06
 * @FilePath: /micro-platform/host-shell/src/components/ProtectedRoute.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEo
 */
import type { PropsWithChildren } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useTeststore } from '../store';

const ProtectedRoute = ({ children, redirectTo = '/login' }: PropsWithChildren<{ redirectTo?: string }>) => {
  const { currentUser } = useTeststore((state) => state);

  const isAuth = !!currentUser.name || !!localStorage.getItem('auth');
  const location = useLocation();

  if (!isAuth) return <Navigate to={redirectTo} state={{ from: location }} replace />;

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
