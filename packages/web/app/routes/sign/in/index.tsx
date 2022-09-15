import type { LinksFunction } from "@remix-run/node";
import signStyle from '~/styles/sign/index.css';
export default function signIn() {
  return (
    <div className="home" data-with-download="true">
      <div className="download">
        <img src="https://oss.yun1024.com/website/7001-2-tps-2186-1376.png?Expires=1663238339&OSSAccessKeyId=TMP.3KhGyvvLxZbC2K4osdKPvNYDBBg5a2qHUrK3DMkhXwyhGAjUUeKHoMQJfBopRC69kUwLTt6VmCefM8DLphuxqiUsHfv3o6&Signature=1EY%2FOksKizaVGSEJzsT7npkMA9E%3D"
             className="desktop-img"/>
        <div className="desc">下载桌面端，上传下载更方便</div>
        <a  href="https://yunpan.aliyun.com/downloads/apps/desktop/aDrive.dmg" className="download-action">
          <div>立即下载</div>
          <img src="https://img.alicdn.com/imgextra/i1/O1CN01eHrJvD1MOEh0mJUTS_!!6000000001424-2-tps-21-35.png"
               width="4.5" height="9"/>
        </a>
      </div>
      <div className="login">
        <img data-v-3e061979="" src="https://gw.alicdn.com/imgextra/i2/O1CN012zI3pB1XLS21rJ9Je_!!6000000002907-55-tps-108-24.svg" width="216"/>
        <div className="main">
          <div className="login-frame">

          </div>
        </div>
      </div>
    </div>
  );
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: signStyle }
  ]
}
