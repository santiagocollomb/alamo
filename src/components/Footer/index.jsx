import React from 'react'
import LogoWhite from "../../assets/logo-white.svg"
import './style.styl'

import ByDigit from '../ByDigit/index'

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container">
        <div className="row">
          <div className="col-12 flex">
            <LogoWhite style={{width: '30%'}}/>
            <ByDigit />
          </div>
        </div>
      </div>
    </footer>
  )
}