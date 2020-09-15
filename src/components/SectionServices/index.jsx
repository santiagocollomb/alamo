import React from "react"
import "./style.styl"

import ServiceIcons from "../ServiceIcons/index" 

export default function SectionHome() {
  return (
    <section className="section-half">
      <div className="container"></div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <span className="page-label"> NUESTROS SERVICIOS</span>
            <h2 className="title mt-0 mb-0">
              Nos especializamos en tratamientos térmicos
            </h2>
          </div>
          <div className="col-6 mb-5">
            <p>
              Por medio de la aplicación de los tratamientos térmicos se logran
              los cambios deseados en la estructura y las propiedades de los
              aceros. Pueden emplearse varios tipos de tratamientos para cumplir
              con los requisitos de diseño de resistencia mecánica, corrosión,
              desgaste, etc.
            </p>
          </div>
          <div className="col-12 mt-5">
            <ServiceIcons />
          </div>
        </div>
      </div>
    </section>
  )
}