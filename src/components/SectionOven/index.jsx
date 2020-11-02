import React from "react"
import ImgRoundbg from "../ImgRoundbg/index"
import horno from "./horno.png"
import content from "../../content/data.json"

import "./style.styl"

export default function SectionOven({lang}) {
  return (
    <section id="oven" className="section-half bg-white">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 className="title mt-0 mb-0">{content[lang].oven.title} </h2>
            <hr className="red-line" />
            <ul>
              {
                content[lang].oven.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))
              }
              <li className="link" ><a href="http://alamoingenieria.com.ar/certificado-horno.pdf" target="_blank" rel="noopener noreferrer">Ver certificado</a></li>
            </ul>
          </div>
          <div className="col-5">
            <ImgRoundbg>
              <img src={horno} alt="" />
            </ImgRoundbg>
          </div>
        </div>
      </div>
    </section>
  )
}