import React from "react"
import "./style.styl"

import ConsultingList from "../ConsultingList/index"

export default function SectionHome() {
  return (
    <section className="section-half bg-white">
      <div className="container">
        <div className="row">
          <div
            className="col-6"
            data-sal="slide-up"
            data-sal-easing="ease"
          >
            <span className="page-label">NUESTROS SERVICIOS</span>
            <h2 className="title text-medium text-regular mt-0 mb-0">
              Consultoría y capacitaciones
            </h2>
            <hr className="red-line" />
            <button className="btn btn-primary mt-5 mb-6">Conocé más</button>
          </div>
          <div
            className="col-6"
            data-sal="slide-up"
            data-sal-easing="ease"
          >
            <ConsultingList />
          </div>
        </div>
      </div>
    </section>
  )
}