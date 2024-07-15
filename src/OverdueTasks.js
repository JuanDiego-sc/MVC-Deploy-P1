import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

const OverdueTasks = ({ overdueTasks }) => {
  const overdueTaskCount = overdueTasks.length;

  return (
    <div>
      <p>Tienes {overdueTaskCount} tareas pasadas.</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Empleados</th>
            <th>Descripción Tarea</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin Calculada</th>
            <th>Días Pasados</th>
            <th>Proyecto</th>
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
