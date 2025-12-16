/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 09:22:44
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-03 10:06:14
 * @FilePath: /micro-platform/host-shell/src/microfe/register.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const apps: Array<Record<string, any>> = [];

export function registerMicroApp(config: any) {
  apps.push(config);
}

export function getApps() {
  return apps;
}

