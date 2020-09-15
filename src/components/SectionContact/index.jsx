import React from "react"
import "./style.styl"

import ContactForm from "../ContactForm/index"
import EmailIcons from "../EmailIcons/index"

export default function SectionHome() {
  return (
    <section className="section-half bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="title mt-0 mb-0 text-white">Ponete en contacto</h1>
            <h2 className="subtitle mt-0 mb-5 text-light-gray text-regular">
              De la patagónia a todo el país
            </h2>
            <EmailIcons direction="column" isWhite={true} />
          </div>
          <div className="col-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}