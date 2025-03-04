import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style.css" // Ensure your custom styles are imported

const projects = [
  {
    id: 1,
    title: "Project One",
    image: "/images/project1.jpg",
    description: "This is a short description of project one.",
    details:
      "Full details about project one, its features, and technologies used.",
  },
  {
    id: 2,
    title: "Project Two",
    image: "/images/project2.jpg",
    description: "This is a short description of project two.",
    details:
      "Full details about project two, its features, and technologies used.",
  },
  {
    id: 3,
    title: "Project Three",
    image: "/images/project3.jpg",
    description: "This is a short description of project three.",
    details:
      "Full details about project three, its features, and technologies used.",
  },
  {
    id: 4,
    title: "Project Four",
    image: "/images/project4.jpg",
    description: "This is a short description of project four.",
    details:
      "Full details about project four, its features, and technologies used.",
  },
  {
    id: 5,
    title: "Project Five",
    image: "/images/project5.jpg",
    description: "This is a short description of project five.",
    details:
      "Full details about project five, its features, and technologies used.",
  },
  {
    id: 6,
    title: "Project Six",
    image: "/images/project6.jpg",
    description: "This is a short description of project six.",
    details:
      "Full details about project six, its features, and technologies used.",
  },
  {
    id: 7,
    title: "Project Seven",
    image: "/images/project7.jpg",
    description: "This is a short description of project seven.",
    details:
      "Full details about project seven, its features, and technologies used.",
  },
  {
    id: 8,
    title: "Project Eight",
    image: "/images/project8.jpg",
    description: "This is a short description of project eight.",
    details:
      "Full details about project eight, its features, and technologies used.",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-3" key={project.id}>
            <div
              className="card project-card shadow-sm"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProject.title}</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedProject(null)}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedProject.image}
                  className="img-fluid mb-3"
                  alt={selectedProject.title}
                />
                <p>{selectedProject.details}</p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
