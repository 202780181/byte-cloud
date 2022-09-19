import { LinksFunction } from '@remix-run/node'
import homeStyle from '~/styles/home/home.css'

const Index =() => {
  return (
    <div className=''>这是首页</div>
  )
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: homeStyle }
  ]
}

export default Index;
