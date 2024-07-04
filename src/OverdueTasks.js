import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const OverdueTasks = ({ overdueTasks }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Task Description</th>
            <th>Start Date</th>
            <th>Calculated End Date</th>
            <th>Days Overdue</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {overdueTasks.map((task, index) => (
            <tr key={index}>
              <td>
                {task.nombre_Empleado} {task.apellido_Empleado}
              </td>
              <td>{task.descripcion_Tarea}</td>
              <td>{task.fecha_Inicio_Tarea}</td>
              <td>{task.calculatedEndDate}</td>
              <td>{task.daysOverdue}</td>
              <td>{task.nombre_Proyecto}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OverdueTasks;
