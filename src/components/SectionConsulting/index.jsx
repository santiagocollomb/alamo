import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import ConsultingList from "../ConsultingList/index"
import content from "../../content/data.json"

import "./style.styl"

export default function SectionHome({lang}) {
  return (
    <section id="consultoria" className="section-half bg-white">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <span className="page-label">{content[lang].consulting.span}</span>
            <h2 className="title text-medium text-regular mt-0 mb-0">
              {content[lang].consulting.title}
            </h2>
            <hr className="red-line" />
            <button 
              onClick={() => scrollTo("#contacto")} 
              className="btn btn-primary mt-5 mb-6"
            >
              {content[lang].consulting.button}
            </button>
          </div>
          <div className="col-6">
            <ConsultingList lang={lang} />
          </div>
        </div>
      </div>
    </section>
  )
}