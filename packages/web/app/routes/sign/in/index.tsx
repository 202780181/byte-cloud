import type { LinksFunction } from "@remix-run/node";
import signStyle from '~/styles/sign/index.css';
export default function signIn() {
  return (
    <div className={'home app'}>
      这是首页内容
    </div>
  );
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: signStyle }
  ]
}
