import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import work from "./work1.jpg"
import content from "../../content/data.json"

import "./style.styl"

export default function SectionHome({lang}) {
  return (
    <section id="conocenos" className="section-full bg-black section-shadow">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-6 h-100 flex-column justify-center align-center">
            <span className="page-label">{content[lang].about.span}</span>
            <h2 className="title mt-0 mb-0 text-white">
              {content[lang].about.title}
            </h2>
            <hr
              className="red-line"
              data-sal="slide-up"
              data-sal-easing="ease"
            />
            <p
              className="mb-5 text-white"
              data-sal="slide-up"
              data-sal-easing="ease"
            >
              {content[lang].about.text}
            </p>
            <button
              onClick={() => scrollTo("#contacto")}
              className="btn btn-primary mb-6"
              data-sal="slide-up"
              data-sal-easing="ease"
            >
              {content[lang].about.button}
            </button>
          </div>
          <div
            className="col-6 bg-work flex-column justify-center align-center"
            data-sal="slide-up"
            data-sal-easing="ease"
          >
            <img src={work} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}