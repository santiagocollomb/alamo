import React from "react"
import "./style.styl"

export default function SectionHome() {
  return (
    <section className="section-full pt-sm-0">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-6 h-100 flex-column justify-center align-center">
            <span className="page-label">CONOCENOS</span>
            <h2 className="title mt-0 mb-0"> Somos Alamo </h2>
            <h3 className="subtitle mt-0 mb-5">
              De la patagónia a todo el país
            </h3>
            <p>
              Somos una empresa joven radicada en el alto valle de Río Negro.
              Nuestro principal objetivo es acompañarte en el mejoramiento de la
              calidad de tus productos, enfocándonos siempre en favorecer un
              entorno de desarrollo mutuo junto con clientes y proveedores.
            </p>
            <button className="btn btn-primary mb-6"> Hablemos </button>
          </div>
          <div className="col-6 bg-work"></div>
        </div>
      </div>
    </section>
  )
}