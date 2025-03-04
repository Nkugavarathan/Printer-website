import React, { useState } from "react"
import { Card, Button, Modal } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style.css" // Ensure custom styles are included

const projects = [
  {
    id: 1,
    title: "Project 1",
    image: "project1.jpg",
    description: "Detailed description of Project 1.",
  },
  {
    id: 2,
    title: "Project 2",
    image: "project2.jpg",
    description: "Detailed description of Project 2.",
  },
  {
    id: 3,
    title: "Project 3",
    image: "project3.jpg",
    description: "Detailed description of Project 3.",
  },
  {
    id: 4,
    title: "Project 4",
    image: "project4.jpg",
    description: "Detailed description of Project 4.",
  },
  {
    id: 5,
    title: "Project 5",
    image: "project5.jpg",
    description: "Detailed description of Project 5.",
  },
  {
    id: 6,
    title: "Project 6",
    image: "project6.jpg",
    description: "Detailed description of Project 6.",
  },
  {
    id: 7,
    title: "Project 7",
    image: "project7.jpg",
    description: "Detailed description of Project 7.",
  },
  {
    id: 8,
    title: "Project 8",
    image: "project8.jpg",
    description: "Detailed description of Project 8.",
  },
]

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  const handleClose = () => setSelectedProject(null)

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-3" key={project.id}>
            <Card className="project-card">
              <Card.Img
                variant="top"
                src={project.image}
                className="project-image"
              />
              <Card.Body className="text-center">
                <Card.Title>{project.title}</Card.Title>
                <Button
                  variant="primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedProject(project)}
                >
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={selectedProject !== null} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedProject?.image}
            alt={selectedProject?.title}
            className="img-fluid mb-3"
          />
          <p>{selectedProject?.description}</p>
        </Modal.Body>
      </Modal>
    </div>
  )
}
