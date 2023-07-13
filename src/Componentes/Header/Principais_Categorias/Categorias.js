import React from "react";
import "./Categorias.css";

function Categorias() {
  return (
    <div className="Container">
      <label form="Todos">Todos</label>
      <button className="Botao" id="Todos"></button>
      <div className="Borda"></div>
      <label form="Roupas">Roupas</label>
      <button className="Botao" id="Roupas"></button>
      <div className="Borda"></div>
      <label form="Eletrônicos">Eletrônicos</label>
      <button className="Botao" id="Eletrônicos"></button>
      <div className="Borda"></div>
      <label form="Livros">Livros</label>
      <button className="Botao" id="Livros"></button>
      <div className="Borda"></div>
      <label form="Calçados">Calçados</label>
      <button className="Botao" id="Calçados"></button>
    </div>
  );
}

export default Categorias;
