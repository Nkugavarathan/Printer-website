import React from "react"
import { Typewriter } from "react-simple-typewriter"
import "bootstrap/dist/css/bootstrap.min.css" // Import Bootstrap CSS
import "../style.css"
export default function Hero() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <section id="hero" className="hero">
        <div className="background-animation"></div>
        <h1>Welcome to My Portfolio</h1>
        <h2>
          I'm a{" "}
          <span>
            <Typewriter
              words={[
                "Video Editor",
                "Creative Designer",
                "Motion Graphics Artist",
              ]}
              loop={true}
              cursor
            />
          </span>
        </h2>
      </section>
    </div>
  )
}
