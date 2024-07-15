// src/components/Catalogo.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const Catalogo = () => {
  const [catalogo, setCatalogo] = useState([]);
  const [filteredCatalogo, setFilteredCatalogo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCatalogo = async () => {
      try {
        const { data } = await axios.get("http://localhost:8000/api/catalogo");
        const catalogoWithIngredients = await Promise.all(
          data.catalogo.map(async (producto) => {
            const ingredientes = await fetchIngredientNames(
              producto.id_ingredientes
            );
            return { ...producto, ingredientes };
          })
        );
        setCatalogo(catalogoWithIngredients);
        setFilteredCatalogo(catalogoWithIngredients);
      } catch (error) {
        console.error("Error fetching catalogo:", error);
      }
    };

    fetchCatalogo();
  }, []);

  const fetchIngredientNames = async (id_ingredientes) => {
    return await Promise.all(
      id_ingredientes.map(async (ingrediente) => {
        const response = await fetch(
          `http://localhost:8000/api/ingredientes/${ingrediente}`
        );
        const data = await response.json();
        return data.name;
      })
    );
  };

  useEffect(() => {
    const results = catalogo.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCatalogo(results);
  }, [searchTerm, catalogo]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="catalogo">
      <SearchBar searchTerm={searchTerm} onChange={handleSearchChange} />
      <div className="catalogo-list">
        {filteredCatalogo.map((producto) => (
          <div key={producto.id} className="product">
            <img
              className="imgproducto"
              src={producto.imagen}
              alt={producto.nombre}
            />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>
              <strong>Precio:</strong> ${producto.precio.toFixed(2)}
            </p>
            <p>
              <strong>Stock:</strong> {producto.stock}
            </p>
            <p>
              <strong>Ingredientes:</strong> {producto.ingredientes.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;
