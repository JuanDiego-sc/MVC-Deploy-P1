import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskList = ({ tasks }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Task Description</th>
          <th>Start Date</th>
          <th>Estimated Time (days)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={task.id_Tarea}>
            <td>{index + 1}</td>
            <td>{task.descripcion_Tarea}</td>
            <td>{task.fecha_Inicio_Tarea}</td>
            <td>{task.tiempo_Estimado_Tarea}</td>
            <td>{task.estado_Tarea}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TaskList;
