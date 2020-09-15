import React from 'react'
import Logo from '../../assets/logo.svg'
import './style.styl'

function Navbar () {

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="logo">
              <Logo />
            </div>
            <div className="menu-icon">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )

}

export default Navbar