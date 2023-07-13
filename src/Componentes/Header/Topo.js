import React from "react";
import "./Topo.css";
import Categorias from "./Principais_Categorias/Categorias.js";

function Header() {
  return (
    <div className="Header">
      <h1>TendTudo</h1>
      <div className="container">
        <div className="Entrar">
          <label form="Login">Login</label>
          <button className="Botao" id="Login"></button>
        </div>
        <div className="Borda"></div>
        <div className="Entrar">
          <label form="Cadastrar">Cadastrar</label>
          <button className="Botao" id="Login"></button>
        </div>
      </div>
      <div className="Pesquisa">
        <input type="text" placeholder="Buscar aqui" id="Pesquisa"></input>
        <label form="Pesquisa">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_1280.png"
            alt=""
            id="Lupa"
          ></img>
        </label>
      </div>
      <Categorias></Categorias>
    </div>
  );
}

export default Header;
