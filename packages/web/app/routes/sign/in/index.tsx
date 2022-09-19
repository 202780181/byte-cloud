import type { LinksFunction } from '@remix-run/node'
import signStyle from '~/styles/sign/sign.css'
import { Input, Checkbox } from 'antd'
import { useState, useEffect, useContext, FC } from 'react'
import MyContext from '~/lib/context'

const LoginType: FC<{ type: Number, func: Function }> = (props: any) => {
  const { type, func } = props
  const changeType = (type: number) => {
    func(type)
  }
  return (
    <div className='login-blocks block0'>
      <label className={type === 0 ? 'sms-login-link' : 'sms-login-title'}
             onClick={() => changeType(0)}>短信登录</label>
      <label className={type === 1 ? 'sms-login-link' : 'sms-login-title'}
             onClick={() => changeType(1)}>账号登录</label>
      <label className={type === 2 ? 'sms-login-link' : 'sms-login-title'}
             onClick={() => changeType(2)}>扫码登录</label>
    </div>
  )
}
const QrcodeComp: FC<{ type: Number, func: Function }> = (props) => {
  const { type, func } = props
  return (
    <div className='qrcode-login' style={{textAlign: 'center'}}>
      扫码服务暂未开放
    </div>
  )
}
const LoginViewSms = () => {
  return (
    <div className='login-sms'>
      <form id='login-form' className='login-form'>
        <div className='fm-field fm-field-mobile'>
          <Input placeholder='请输入手手机号' className='fm-text'/>
        </div>
        <div className='fm-field fm-field-sms'>
          <Input placeholder='请输入验证码' className='fm-text'/>
          <div className='send-btn'>
            <div className="send-btn-link">获取验证码</div>
          </div>
        </div>
        <div className='fm-btn'>
          <button type='submit' className='fm-button fm-submit password-login'>登录
          </button>
        </div>
      </form>
      <div data-tab='password' className='adrive-action-container'>
        <div className='remember-login'>
          <Checkbox>下次自动登录</Checkbox>
        </div>
      </div>
    </div>
  )
}

const LoginViewPassword = () => {
  return (
    <div className='login-password'>
      <form id='login-form' className='login-form'>
        <div className='fm-field'>
          <Input placeholder='请输入手手机号' className='fm-text' />
        </div>
        <div className='fm-field'>
          <Input type='password' placeholder='登录密码' className='fm-text' />
        </div>
        <div className='fm-btn'>
          <button type='submit' className='fm-button fm-submit password-login'>登录
          </button>
        </div>
      </form>
      <div data-tab='password' className='adrive-action-container'>
        <div className='remember-login'>
          <Checkbox>下次自动登录</Checkbox>
        </div>
        <div className='forgot-password'>忘记密码？</div>
      </div>
    </div>
  )
}
export default function signIn() {
  const { isLoggedIn, setUser } = useContext(MyContext)
  // 0: 短信登录 1:账号登录  2:扫码登录
  const [loginType, setLoginType] = useState<number>(0)
  useEffect(() => {
    console.log(loginType)
  }, [loginType])
  return (
    <div className='home' data-with-download='true'>
      <div className='download'>
        <img src='https://oss.yun1024.com/website/7001-2-tps-2186-1376.png'
             className='desktop-img' />
        <div className='desc'>下载桌面端，上传下载更方便</div>
        <a href='https://yunpan.aliyun.com/downloads/apps/desktop/aDrive.dmg' className='download-action'>
          <div>立即下载</div>
          <img src='https://img.alicdn.com/imgextra/i1/O1CN01eHrJvD1MOEh0mJUTS_!!6000000001424-2-tps-21-35.png'
               width='4.5' height='9' />
        </a>
      </div>
      <div className='login'>
        <img src='https://gw.alicdn.com/imgextra/i2/O1CN012zI3pB1XLS21rJ9Je_!!6000000002907-55-tps-108-24.svg'
             width='216' />
        <div className='main'>
          <div className='login-frame'>
            <div id='login' className='width-vertical login-label-text login-view-sms web'>
              <div className='login-content nc-outer-box'>
                <LoginType type={loginType} func={setLoginType} />
                {loginType === 0 && <LoginViewSms />}
                {loginType === 1 && <LoginViewPassword />}
                {loginType === 2 && <QrcodeComp type={loginType} func={setLoginType} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: signStyle }
  ]
}
