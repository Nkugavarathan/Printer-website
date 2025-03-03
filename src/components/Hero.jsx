import React from "react"
import { Typewriter } from "react-simple-typewriter"
// import "../styles.css"

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="background-animation"></div>
      <h1>Welcome to My Portfolio</h1>
      <h2>
        <Typewriter
          words={[
            "Video Editor",
            "Creative Designer",
            "Motion Graphics Artist",
          ]}
          loop={true}
          cursor
        />
      </h2>
    </section>
  )
}
