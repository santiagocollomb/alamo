import React from 'react'
import content from "../../content/data.json"

import './style.styl'

export default function ConsultingList({lang}) {



  return (
    <div className="consulting-list">
      {content[lang].consulting.consultingItems.map(item => (
        <div className="consulting-item mt-4" key={item.title}>
          <div className="consulting-item-decoration">
            <div className="circle"></div>
            <div className="line"></div>
          </div>
          <div className="consulting-item-text">
            <h2 className="title mb-0">{item.title}</h2>
            <p className="mt-0">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
} 