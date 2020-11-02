import React, { useState, useLayoutEffect } from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import Logo from '../../assets/logo.svg'
import Media from "react-media"
import classnames from "classnames"
import content from "../../content/data.json"

import './style.styl'

function Navbar(props,deps) {
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
      className="navbar"
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
                      <button onClick={() => scrollTo("#conocenos")}>
                        {content[props.lang].nav.about}
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollTo("#servicios")}>
                        {content[props.lang].nav.services}
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollTo("#consultoria")}>
                        {content[props.lang].nav.consulting}
                      </button>
                    </li>
                    <li>
                      <button onClick={() => scrollTo("#contacto")}>
                        {content[props.lang].nav.contact}
                      </button>
                    </li>
                    <li className="language-li">
                      {props.lang === "es" ? (
                        <Link
                          to="/en"
                          activeStyle={{ color: "red" }}
                          className="language-btn"
                        >
                          En
                        </Link>
                      ) : (
                        <Link
                          to="/"
                          activeStyle={{ color: "red" }}
                          className="language-btn"
                        >
                          Es
                        </Link>
                      )}
                    </li>
                  </ul>
                )}
              />

              <Media
                query="(max-width: 599px)"
                render={() => (
                  <div className="language-li">
                    {props.lang === "es" ? (
                      <Link
                        to="/en"
                        activeStyle={{ color: "red" }}
                        className="language-btn"
                      >
                        En
                      </Link>
                    ) : (
                      <Link
                        to="/"
                        activeStyle={{ color: "red" }}
                        className="language-btn"
                      >
                        Es
                      </Link>
                    )}
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