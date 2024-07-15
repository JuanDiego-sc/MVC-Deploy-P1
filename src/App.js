// src/App.js
import React from "react";
import "./App.css";
import Catalogo from "./Catalogo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catálogo de Productos</h1>
      </header>
      <main>
        <Catalogo />
      </main>
    </div>
  );
}

export default App;
