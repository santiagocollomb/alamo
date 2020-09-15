import React from "react"
import "./style.styl"

import ImgRoundbg from "../ImgRoundbg/index"
import ContactIcons from "../ContactIcons/index"

export default function SectionHome() {
  return (
    <section className="section-full pb-0">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 h-100 flex-column">
            <h1 className="title mb-0">El título más principal de todos</h1>
            <h2 className="subtitle">Este es un subtitulo</h2>
            <button className="btn btn-primary mt-5 btn-left">
              Conocé más
            </button>
            <div className="content-right">
              <ImgRoundbg>
                <img src="https://digitestudio.com/machine.png" alt="Horno" />
              </ImgRoundbg>
            </div>
            <ContactIcons />
          </div>
        </div>
      </div>

      <div className="scrollDown"></div>
      <div className="social-info"></div>
    </section>
  )
}