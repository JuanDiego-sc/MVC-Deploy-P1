import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectList = ({ projects }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre del Proyecto</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project, index) => (
          <tr key={project.id_Proyecto}>
            <td>{index + 1}</td>
            <td>{project.nombre_Proyecto}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProjectList;
