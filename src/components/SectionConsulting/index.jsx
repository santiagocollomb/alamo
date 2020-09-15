import React from "react"
import "./style.styl"

import ConsultingList from "../ConsultingList/index"

export default function SectionHome() {
  return (
    <section className="section-half">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <span className="page-label">CONSULTORÍA</span>
            <h2 className="title text-medium text-regular mt-0 mb-0">
              Pueden emplearse varios tipos de tratamientos para cumplir con los
            </h2>
            <button className="btn btn-primary mt-5 mb-6">Conocé más</button>
          </div>
          <div className="col-6">
            <ConsultingList />
          </div>
        </div>
      </div>
    </section>
  )
}