import React from "react"
import Helmet from "react-helmet"
import Layout from "../components/Layout/index"
import SectionHome from "../components/SectionHome/index"
import SectionAbout from "../components/SectionAbout/index"
import SectionServices from "../components/SectionServices/index"
import SectionConsulting from "../components/SectionConsulting/index"
import SectionContact from "../components/SectionContact/index"

import Map from "../components/Map/index.jsx"

export default function Home() {
  return (
    <>
      <Layout>
        <Helmet>
          <title>Alamo ingeniería</title>
          <meta name="title" content="Alamo ingeniería" />
          <meta
            name="description"
            content="Somos specialistas en tratamientos térmicos, del Alto Valle de Río Negro y Neuquén"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://alamoingenieria.com.ar/" />
          <meta property="og:title" content="Alamo ingeniería" />
          <meta
            property="og:description"
            content="Somos specialistas en tratamientos térmicos, del Alto Valle de Río Negro y Neuquén"
          />
          <meta
            property="og:image"
            content="https://alamoingenieria.com.ar/og-image.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://alamoingenieria.com.ar/"
          />
          <meta property="twitter:title" content="Alamo ingeniería" />
          <meta
            property="twitter:description"
            content="Somos specialistas en tratamientos térmicos, del Alto Valle de Río Negro y Neuquén"
          />
          <meta
            property="twitter:image"
            content="https://alamoingenieria.com.ar/og-image.jpg"
          ></meta>
        </Helmet>
        <SectionHome />
        <SectionAbout />
        <SectionServices />
        <SectionConsulting />
        <SectionContact />

        <section className="section-half pt-0 pb-0">
          <Map />
        </section>
      </Layout>
    </>
  )
}
