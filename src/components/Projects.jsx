import React, { useState } from "react"
// import "../styles.css"

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "This is project one description.",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is project two description.",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is project three description.",
  },
  {
    id: 4,
    title: "Project Four",
    description: "This is project four description.",
  },
  {
    id: 5,
    title: "Project Five",
    description: "This is project five description.",
  },
  {
    id: 6,
    title: "Project Six",
    description: "This is project six description.",
  },
  {
    id: 7,
    title: "Project Seven",
    description: "This is project seven description.",
  },
  {
    id: 8,
    title: "Project Eight",
    description: "This is project eight description.",
  },
]

function ProjectCard({ project, onClick }) {
  return (
    <div className="card" onClick={() => onClick(project)}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  )
}

function Modal({ project, onClose }) {
  if (!project) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>
      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
