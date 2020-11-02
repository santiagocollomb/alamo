import React from "react"
import ContactForm from "../ContactForm/index"
import EmailIcons from "../EmailIcons/index"
import content from "../../content/data.json"

import "./style.styl"

export default function SectionHome({lang}) {
  return (
    <section id="contacto" className="section-half bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-6" data-sal="slide-up" data-sal-easing="ease">
            <h1 className="title mt-0 mb-0 text-white">
              {content[lang].contact.title}
            </h1>
            <h2 className="subtitle mt-0 mb-5 text-light-gray text-regular">
              {content[lang].contact.subtitle}
            </h2>
            <EmailIcons direction="column" isWhite={true} lang={lang} />
          </div>
          <div className="col-6" data-sal="slide-up" data-sal-easing="ease">
            <ContactForm lang={lang} />
          </div>
        </div>
      </div>
    </section>
  )
}