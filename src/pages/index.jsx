import React from "react"
import Navbar from "../components/Navbar/index"

import SectionHome from "../components/SectionHome/index"
import SectionAbout from "../components/SectionAbout/index"
import SectionServices from "../components/SectionServices/index"
import SectionConsulting from "../components/SectionConsulting/index"
import SectionContact from "../components/SectionContact/index"

import Footer from '../components/Footer/index'
import Map from "../components/Map/index.jsx"

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionHome />
      <SectionAbout />
      <SectionServices />
      <SectionConsulting />
      <SectionContact />



      <section className="section-half pt-0 pb-0">
        <Map />
      </section>
      <Footer />
    </>
  )
}
