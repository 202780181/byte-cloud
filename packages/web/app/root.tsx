import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

export const ErrorBoundary = ({ error }:any) => {
  console.error(error)
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
