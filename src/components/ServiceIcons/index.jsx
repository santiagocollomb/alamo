import React from 'react'
import Steel from '../../assets/icons/steel.svg'
import Oven from "../../assets/icons/oven.svg"
import Surface from "../../assets/icons/surface.svg"
import Chart from "../../assets/icons/chart.svg"
import content from "../../content/data.json"

import './style.styl'

export default function ServiceIcons({lang}) {

  const serviceList = [
    { text: content[lang].services.service1, icon: <Surface />, style:""},
    { text: content[lang].services.service2, icon: <Chart />, style:""},
    { text: content[lang].services.service3, icon: <Oven />, style:"space-down" },
    { text: content[lang].services.service4, icon: <Steel />, style:""},
  ]

  return (
    <div className="service-icon-list">
      {serviceList.map(service => (
        <div className="service-icon" key={service.text}>
          <p className={lang === 'en' ? service.style : ''}>{service.text}</p>
          <div className="icon">{service.icon}</div>
        </div>
      ))}
    </div>
  )
}