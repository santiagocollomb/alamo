import React, { useState } from "react"
import axios from 'axios'
import content from "../../content/data.json"
import BounceLoader from "react-spinners/BounceLoader"

import "./style.styl"

export default function CotactForm({lang}) {

  const [form, setForm] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
  })
  const [loading, setLoading] = useState(false)
  const [formResponse, setFormResponse] = useState()

  function handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value
    });

  }

  function sendMail() {

    setLoading(true)
    
    axios
      .post(
        "https://us-central1-digit-729ef.cloudfunctions.net/sendMailAlamoIngenieria",
        form
      )
      .then(response => {
        if (response.status === 200) {
          // Mensaje enviado
          setFormResponse(content[lang].contactform.messageSent)
          setLoading(false)
        } else {
          // Mensaje no enviado
          setFormResponse(content[lang].contactform.messageNotSent)
          setLoading(false)
        }
        window.setTimeout(() => setFormResponse(""), 10000)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })
  }

  return (
    <form
      className="contact-form"
    >
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            id="name"
            placeholder={content[lang].contactform.name}
            className="mt-4"
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={handleInputChange}
            placeholder={content[lang].contactform.subject}
            className="mt-4"
          />
        </div>
        <div className="col-12">
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleInputChange}
            placeholder={content[lang].contactform.email}
            className="mt-4"
          />
        </div>
        <div className="col-12">
          <textarea
            name="message"
            id="message"
            onChange={handleInputChange}
            cols="30"
            rows="2"
            placeholder={content[lang].contactform.message}
            className="mt-4"
          ></textarea>
        </div>
        <div className="col-12">
          <BounceLoader size={30} color={"#fff"} loading={loading} />
          {formResponse && <span> {formResponse} </span>}
          <button
            type="button"
            className="btn btn-dark-gray btn-medium mt-3"
            onClick={() => sendMail()}
          >
            {content[lang].contactform.button}
          </button>
        </div>
      </div>
    </form>
  )
}