import React from 'react'
import './style.styl'

import ByDigit from '../ByDigit/index'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 flex">
            <ByDigit />
          </div>
        </div>
      </div>
    </footer>
  )
}