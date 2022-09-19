import { LinksFunction } from '@remix-run/node'
import driveStyle from '~/styles/drive/drive.css'
import React, {} from 'react'


export default function Drive() {
  return (
    <div className='layout'>
      <div className='sider' style={{width: '240px'}}>
        <div className='sider-wrapper'>
          <div className='scroll-container' data-direction="column" data-scrollbar="false">
            <div data-simplebar="init" className='simplebar'>

            </div>
          </div>
        </div>
      </div>
      <div className='content'>

      </div>
    </div>
  )
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: driveStyle }
  ]
}
