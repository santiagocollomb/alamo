import React from 'react'
import Steel from '../../assets/icons/steel.svg'
import Oven from "../../assets/icons/oven.svg"
import Surface from "../../assets/icons/surface.svg"
import Chart from "../../assets/icons/chart.svg"
import './style.styl'

export default function ServiceIcons() {

  const serviceList = [
    { text: "Alivio de tensiones", icon: <Surface /> },
    { text: "Normalizado", icon: <Chart /> },
    { text: "Recocido", icon: <Oven /> },
    { text: "Temple y revenido", icon: <Steel /> },
  ]

  const services = serviceList.map((service) => (
    <div className="service-icon" key={service.text}>
      <p>{service.text}</p>
      <div className="icon">
        {service.icon}
      </div>
    </div>
  ))

  return (
    <div className="service-icon-list">
      {services}
    </div>
  )
}