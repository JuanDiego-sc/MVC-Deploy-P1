import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import ProjectList from "./ProjectList";
import OverdueTasks from "./OverdueTasks";
import TaskList from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [overdueTasks, setOverdueTasks] = useState([]);

  useEffect(() => {
    // Fetch employees
    axios
      .get("https://www.testdeploy.somee.com/api/Empleado/GetEmpleados")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching employees: ", error));

    // Fetch projects
    axios
      .get("https://www.testdeploy.somee.com/api/Proyecto/GetProyectos")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects: ", error));

    // Fetch tasks
    axios
      .get("https://www.testdeploy.somee.com/api/Tarea/GetTareas")
      .then((response) => setTasks(response.data))
      .catch((error) =>
        console.error("Error fetching tasks: ", error + "+++++++++++")
      );
  }, []);

  const handleSearch = (startDate, endDate) => {
    // Fetch overdue tasks
    axios
      .get("https://www.testdeploy.somee.com/api/Tasks/overdue", {
        params: {
          startDate: startDate.toISOString().split("T")[0],
          endDate: endDate.toISOString().split("T")[0],
        },
      })
      .then((response) => setOverdueTasks(response.data))
      .catch((error) => console.error("Error fetching overdue tasks: ", error));
  };

  return (
    <div className="App-header">
      <h1>MiniCore Administrador Tareas</h1>
      <SearchForm onSearch={handleSearch} />

      <section>
        <h2>Empleados</h2>
        <EmployeeList employees={employees} />
      </section>

      <section>
        <h2>Proyectos</h2>
        <ProjectList projects={projects} />
      </section>

      <section>
        <h2>Todas las Tareas</h2>
        <TaskList tasks={tasks} />
      </section>

      <section>
        <h2>Tareas Pasadas</h2>
        <OverdueTasks overdueTasks={overdueTasks} />
      </section>
    </div>
  );
}

export default App;
