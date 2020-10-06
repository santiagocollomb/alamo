import React from "react"
import A from "../../assets/a.svg"
import Media from "react-media"
import "./style.styl"

import ContactIcons from "../ContactIcons/index"

export default function SectionHome() {

  return (
    <section id="inicio" className="section-full pb-0">
      <A className="logo-bg" />
      <div className="container h-100">
        <div className="row h-100 home-content">
          <div className="col-12 h-100 flex-column">
            <h1
              data-sal="slide-up"
              data-sal-easing="ease"
              className="title mb-0 mt-5 title-home"
            >
              Especialistas en tratamientos térmicos
            </h1>
            <h2
              data-sal="slide-up"
              data-sal-easing="ease"
              data-sal-delay="100"
              className="subtitle"
            >
              Somos del Alto Valle de Río Negro y Neuquén
            </h2>
            <button
              data-sal="slide-up"
              data-sal-easing="ease"
              data-sal-delay="150"
              className="btn btn-primary mt-5"
            >
              Conocé más
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