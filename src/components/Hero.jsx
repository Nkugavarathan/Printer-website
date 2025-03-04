import React, { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { Typewriter } from "react-simple-typewriter"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style.css"

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles.js is initializing...")
    await loadFull(engine)
  }, [])

  return (
    <>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#f8f9fa" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#3498db" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { random: true, value: 5 },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              outModes: { default: "bounce" },
            },
            links: {
              enable: true,
              color: "#3498db",
              distance: 150,
              opacity: 0.5,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Section */}
      <div className="hero-container">
        <section id="hero" className="hero text-center">
          <h1>Welcome to My Portfolio</h1>
          <h2>
            I'm a{" "}
            <span className="typewriter-text">
              <Typewriter
                words={[
                  "Video Editor",
                  "Creative Designer",
                  "Motion Graphics Artist",
                ]}
                loop
                cursor
                cursorStyle="|"
              />
            </span>
          </h2>
        </section>
      </div>
    </>
  )
}
