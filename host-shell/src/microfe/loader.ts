/*
 * @Author: sumail sumail@xyzzdev.com
 * @Date: 2025-12-03 09:25:55
 * @LastEditors: sumail sumail@xyzzdev.com
 * @LastEditTime: 2025-12-05 11:51:55
 * @FilePath: /micro-platform/host-shell/src/microfe/loader.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export async function loadMicroApp({ name, entry, style }: any) {
  //   if (window[name]) return window[name];

  const remote = await import(/* @vite-ignore */ entry);
  console.log(remote.default, 'remoteremoteremote');
  await loadScript(entry, name);
  await loadStyle(style, name);

  return window[name] as any;
}

function loadScript(src: string, name: string) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = src;
    script.setAttribute('id', `js_${name}`);
    script.type = 'module';
    script.onload = () => {
      window._MICRO_APP_ENV = true;
      resolve(1);
    };
    script.onerror = reject;
    document.body.appendChild(script);
  });
}

async function loadStyle(src: string, name: string) {
//   const css = await fetch(src).then((r) => r.text());

  return new Promise((resolve, reject) => {
    if (document.querySelector(`link[href="${src}"]`)) {
      resolve(true);
      return;
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = src;
    link.setAttribute('id', `css_${name}`);

    link.onerror = reject;
    //   document.body.appendChild(link);
    document.head.appendChild(link);
  });
}

// async function loadStyle1(src: string, name: string) {
//   const css = await fetch(src).then((r) => r.text());

//   console.log(css, 'csscsscsscss')

//   const id = `css_${name}`;
//   let style = document.querySelector(`#${id}`);

//   if (!style) {
//     style = document.createElement('style');
//     style.id = id;
//     style.textContent = css;
//     document.head.appendChild(style);
//   }
// }


/**
 * 获取 CSS 文件内容并以 <style> 标签形式插入
 * @param {string} url - CSS 文件的绝对路径
 * @param {string} appId - 子应用 ID (用于给 style 标签加 id，方便管理)
 */
async function loadStyle1(url: string, appId: string) {
    try {
      // 1. 请求 CSS 文件的文本内容
      // 注意：主应用和子应用必须配置 CORS 允许跨域
      const cssText = await fetch(url).then(res => {
        if (!res.ok) throw new Error(`Failed to load CSS: ${res.statusText}`);
        return res.text();
      });
  
      // 2. ⚠️ 关键修正：处理 CSS 内部的相对路径资源 (图片/字体)
      // 如果 CSS 里有 background: url(./logo.png)，插入主应用后路径会错乱
      // 我们需要把相对路径替换为绝对路径
      const baseUrl = url.substring(0, url.lastIndexOf('/') + 1);
      const fixedCssText = cssText.replace(/url\(['"]?([^'")]+)['"]?\)/g, (match, assetPath) => {
        if (assetPath.startsWith('http') || assetPath.startsWith('data:')) {
          return match;
        }
        // 将 ./logo.png 替换为 http://localhost:3001/assets/logo.png
        return `url("${new URL(assetPath, baseUrl).href}")`;
      });
  
      // 3. 创建 style 标签
      const style = document.createElement('style');
      style.setAttribute('data-micro-app', appId); // 标记来源
      style.textContent = fixedCssText;
  
      // 4. 插入到 head
      document.head.appendChild(style);
  
      return style;
    } catch (e) {
      console.error(`[MicroApp] CSS load failed: ${url}`, e);
    }
  }

  function loadCssAsScript(url: string) {
    return new Promise((resolve, reject) => {
      // 检查是否已存在
      if (document.querySelector(`script[src="${url}"]`)) {
        resolve(1);
        return;
      }
  
      const script = document.createElement('script');
      script.type = 'module'; // 👈 关键：Vite 的 CSS 在 dev 模式下是 ESM 模块
      script.src = url;
      script.onload = () => resolve(1);
      script.onerror = (e) => {
        console.error(`CSS(JS) Load Failed: ${url}`, e);
        reject(e);
      };
      document.head.appendChild(script);
    });
  }
  