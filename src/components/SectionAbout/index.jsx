import React from "react"
import work from "./work1.jpg"
import "./style.styl"

export default function SectionHome() {
  return (
    <section id="conocenos" className="section-full bg-black section-shadow">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-6 h-100 flex-column justify-center align-center">
            <span className="page-label">CONOCENOS</span>
            <h2 className="title mt-0 mb-0 text-white"> Somos Alamo </h2>
            <h3
              className="subtitle mt-0 mb-1"
              data-sal="slide-up"
              data-sal-easing="ease"
            >
              Trabajamos para brindarte calidad y confianza
            </h3>
            <hr
              className="red-line"
              data-sal="slide-up"
              data-sal-easing="ease"
              data-sal-delay="100"
            />
            <p
              className="mb-5 text-white"
              data-sal="slide-up"
              data-sal-easing="ease"
              data-sal-delay="150"
            >
              Nuestro principal objetivo es acompañarte en el mejoramiento de la
              calidad de tus productos, enfocándonos siempre en favorecer un
              entorno de desarrollo mutuo junto con clientes y proveedores.
            </p>
            <button
              className="btn btn-primary mb-6"
              data-sal="slide-up"
              data-sal-easing="ease"
              data-sal-delay="200"
            >
              Hablemos
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