import React, { useState, useLayoutEffect } from "react"
import Logo from '../../assets/logo.svg'
import Media from "react-media"
import classnames from "classnames"
import './style.styl'

function Navbar(deps) {
  const [, setScrollPosition] = useState(0)
  const [visible, setVisible] = useState(true)
  let previousScrollTop = 0

  const handleScroll = (e) => {

    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body

      currentScrollTop < previousScrollTop
        ? setVisible(true)
        : setVisible(false)

          setScrollPosition(previousPosition => {
            previousScrollTop = previousPosition
            return currentScrollTop
          })

  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", e => handleScroll(e))

    return () => window.removeEventListener("scroll", e => handleScroll(e))
  }, deps)

  return (
    <nav
      className={classnames("navbar", {
        "navbar-hidden": !visible,
      })}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="logo">
              <a href="/">
                <Logo />
              </a>
            </div>
            <div className="nav-content-right">
              <Media
                query="(min-width: 599px)"
                render={() => (
                  <ul>
                    <li>
                      <a href="#conocenos">Conocenos</a>
                    </li>
                    <li>
                      <a href="#servicios">Servicios</a>
                    </li>
                    <li>
                      <a href="#consultoria">Consultoría</a>
                    </li>
                    <li>
                      <a href="#contacto">Contacto</a>
                    </li>
                  </ul>
                )}
              />

              <Media
                query="(max-width: 599px)"
                render={() => (
                  <div className="menu-icon">
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar