import React from "react"
import "./style.styl"

import ContactForm from "../ContactForm/index"
import EmailIcons from "../EmailIcons/index"

export default function SectionHome() {
  return (
    <section className="section-half bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-6" data-sal="slide-up" data-sal-easing="ease">
            <h1 className="title mt-0 mb-0 text-white">Ponete en contacto</h1>
            <h2 className="subtitle mt-0 mb-5 text-light-gray text-regular">
              Te vamos a responder lo antes posible
            </h2>
            <EmailIcons direction="column" isWhite={true} />
          </div>
          <div className="col-6" data-sal="slide-up" data-sal-easing="ease">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}