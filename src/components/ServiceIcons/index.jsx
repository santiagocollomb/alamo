import React from 'react'
import Icon from '../../assets/icons/icon.svg'
import './style.styl'

export default function ServiceIcons() {

  const serviceList = [
    { text: "Alivio de tensiones", icon: <Icon /> },
    { text: "Normalizado", icon: <Icon /> },
    { text: "Recocido", icon: <Icon /> },
    { text: "Temple y revenido", icon: <Icon /> }
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