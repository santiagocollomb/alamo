import React from "react"
import "./style.styl"

import ServiceIcons from "../ServiceIcons/index" 

export default function SectionHome() {
  return (
    <section id="servicios" className="section-half bg-white">
      <div className="container"></div>
      <div className="container">
        <div className="row">
          <div
            className="col-6"
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-delay="300"
          >
            <span className="page-label"> NUESTROS SERVICIOS</span>
            <h2 className="title mt-0 mb-0">
              Tratamientos térmicos
            </h2>
            <hr className="red-line" />
          </div>
          <div
            className="col-6 mb-5 paragraph"
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-delay="300"
          >
            <p>
              Por medio de la aplicación de los tratamientos térmicos se logran
              los cambios deseados en la estructura y las propiedades de los
              aceros. Pueden emplearse varios tipos de tratamientos para cumplir
              con los requisitos de diseño de resistencia mecánica, corrosión,
              desgaste y más.
            </p>
          </div>
          <div
            className="col-12 mt-5 w-90"
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-delay="300"
          >
            <ServiceIcons />
          </div>
        </div>
      </div>
    </section>
  )
}