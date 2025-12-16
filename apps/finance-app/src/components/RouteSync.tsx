/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 20:06:28
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-03 20:25:31
 * @FilePath: /micro-platform/apps/finance-app/src/components/RouteSync.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// 1. 创建一个用于同步路由的组件
const RouteSync = ({ basename }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.pathname, 'RouteSyncRouteSyncRouteSync')

  useEffect(() => {
    // 定义检查函数
    const checkPath = () => {
      const globalPath = window.location.pathname;
      console.log(globalPath, 'current globalPathglobalPath');
      // 如果当前 URL 是以 basename 开头 (例如 /finance)
      if (globalPath.startsWith(basename)) {
        // 计算出子应用的内部路径 (例如 /finance/settings -> /settings)
        // 如果是 /finance，则剩下空字符串，对应 /
        const targetPath = globalPath.slice(basename.length) || '/';

        // 如果当前子应用不在这个路径，就跳过去
        if (location.pathname !== targetPath) {
          console.log(targetPath, location.pathname, '跳了');
          navigate(targetPath, { replace: true });
        }
      }
    };

    // 2. 监听 popstate (处理浏览器后退按钮)
    window.addEventListener('popstate', checkPath);

    return () => {
      window.removeEventListener('popstate', checkPath);
    };
  }, [location, navigate, basename]);

  return null;
};

export default RouteSync;
