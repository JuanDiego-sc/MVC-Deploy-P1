import React from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";

function EmployeeList({ employees }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id_Empleado}>
            <td>{employee.id_Empleado}</td>
            <td>{employee.nombre_Empleado}</td>
            <td>{employee.apellido_Empleado}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default EmployeeList;
