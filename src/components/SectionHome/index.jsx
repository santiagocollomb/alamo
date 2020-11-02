import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import A from "../../assets/a.svg"
import Media from "react-media"
import content from '../../content/data.json'


import "./style.styl"

import ContactIcons from "../ContactIcons/index"

export default function SectionHome({lang}) {

  return (
    <section id="inicio" className="section-full pb-0">
      <A className="logo-bg" />
      <div className="container h-100">
        <div className="row h-100 home-content">
          <div className="col-12 h-100 flex-column">
            <h1
              data-sal="slide-up"
              data-sal-easing="ease"
              className="title mb-0 mt-4 title-home"
            >
              {content[lang].home.title}
            </h1>
            <button
              onClick={() => scrollTo("#conocenos")}
              data-sal="slide-up"
              data-sal-easing="ease"
              className="btn btn-primary mt-5"
            >
              {content[lang].home.button}
            </button>
            <Media
              query="(min-width: 1120px)"
              render={() => <ContactIcons />}
            />
          </div>
        </div>
      </div>

      <div className="scrollDown"></div>
      <div className="social-info"></div>
    </section>
  )
}