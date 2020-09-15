import React from "react"
import "./style.styl"

export default function CotactForm() {
  return (
    <form action="" className="contact-form">
      <div className="row">
        <div className="col-6">
          <input type="text" name="" id="" placeholder="Nombre"  className="mt-4"/>
        </div>
        <div className="col-6">
          <input type="text" name="" id="" placeholder="Asunto"  className="mt-4"/>
        </div>
        <div className="col-12">
          <input type="email" name="" id="" placeholder="Email"  className="mt-4"/>
        </div>
        <div className="col-12">
          <textarea
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Mensaje" 
            className="mt-4"
          ></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-dark-gray btn-medium mt-3">Enviar</button>
        </div>
      </div>
    </form>
  )
}