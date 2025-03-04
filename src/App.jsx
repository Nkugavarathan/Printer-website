import React from "react"
import NavbarContainer from "./components/NavbarContainer"
import { Row, Col } from "react-bootstrap"
// import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css"
export default function App() {
  return (
    <>
      <NavbarContainer />
      {/* <Hero /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
