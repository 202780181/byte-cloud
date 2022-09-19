import { LinksFunction } from '@remix-run/node'
import driveStyle from '~/styles/drive/drive.css'
import React, {} from 'react'


export function Drive() {
  return (
    <div>这是Drive</div>
  )
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: driveStyle }
  ]
}
