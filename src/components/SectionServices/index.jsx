import React from "react"
import ServiceIcons from "../ServiceIcons/index" 
import content from "../../content/data.json"


import "./style.styl"

export default function SectionHome({lang}) {
  return (
    <section id="servicios" className="section-half bg-white">
      <div className="container"></div>
      <div className="container">
        <div className="row">
          <div
            className="col-6"
            data-sal="slide-up"
            data-sal-easing="ease"
          >
            <span className="page-label">{content[lang].services.span}</span>
            <h2 className="title mt-0 mb-0">{content[lang].services.title} </h2>
            <hr className="red-line" />
          </div>
          <div
            className="col-6 mb-5 paragraph"
            data-sal="slide-up"
            data-sal-easing="ease"
          >
            <p>{content[lang].services.text}</p>
          </div>
          <div
            className="col-12 mt-5 w-90"
            data-sal="slide-up"
            data-sal-easing="ease"
          >
            <ServiceIcons lang={lang} />
          </div>
        </div>

      </div>
    </section>
  )
}

