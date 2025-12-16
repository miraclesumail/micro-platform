/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 20:40:23
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-03 20:40:46
 * @FilePath: /micro-platform/host-shell/src/components/PublicRoute.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ children, restricted = false, redirectTo = '/dashboard' }: any) => {
    const isAuth = !!localStorage.getItem('auth');

  if (isAuth && restricted) {
    return <Navigate to={redirectTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default PublicRoute;
