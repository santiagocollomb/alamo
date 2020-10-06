import React from 'react'
import './style.styl'

export default function ConsultingList() {

  const items = [
    {
      title: "Caracterización de aceros",
      text:
        "Por medio de determinación de composición química y ensayos mecánicos. Buscamos determinar el tipo y grado del material, ya sea para verificar su conformidad con una especificación o norma específica; o bien en el contexto de una re-ingeniería de componente.",
    },
    {
      title: "Asesoramiento en rediseño de piezas",
      text:
        "Análisis de condiciones de operación del componente, relevamiento dimensional, análisis de tensiones, caracterización de materiales y estudio de fallas.",
    },
    { title: "Cursos de capacitación", text: "Ofrecemos una serie de cursos de capacitación sobre temas relacionados a los aceros, propiedades mecánicas y mecánica de fractura. El alcance y temario de los mismos se adapta al alcance y disponibilidad horaria que el cliente requiera." }
  ]

  const consultingItems = items.map(item => (
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
  ))

  return (
    <div className="consulting-list">
      {consultingItems}
    </div>
  )
} 