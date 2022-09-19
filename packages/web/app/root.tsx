import type { MetaFunction } from '@remix-run/node'
import antd from 'antd/dist/antd.css'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import { LinksFunction } from '@remix-run/node'
import globalStyle from '~/styles/global/global.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: '1024云盘',
  'apple-mobile-web-app-capable': 'yes',
  'apple-touch-fullscreen': 'yes',
  'App-Config': 'fullscreen=yes,useHistoryState=yes,transition=yes',
  'format-detection': 'telephone=no',
  'apple-mobile-web-app-status-bar-style': 'black',
  'data-spm': '1024drive',
  viewport: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover'
})

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStyle },
    { rel: 'stylesheet', href: antd }
  ]
}

export const ErrorBoundary = ({ error }: any) => {
  return (
    <html>
    <head>
      <title>Oh no!</title>
      <Meta />
      <Links />
    </head>
    <body>
    {/* add the UI you want your users to see */}
    <Scripts />
    </body>
    </html>
  )
}

export default function App() {
  return (
    <html lang='en'>
    <head>
      <Meta />
      <Links />
    </head>
    <body>
    <Outlet />
    <ScrollRestoration />
    <Scripts />
    <LiveReload />
    </body>
    </html>
  )
}
