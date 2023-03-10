import React from "react";
import "./styles.css";
import "./img/logo.jpg"


const Navbar = ({children}) => {
    return(
        <header>
        <nav class="navbar navbar-expand-lg light colorHeader">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"
            ><img src="./img/logo.jpg" class="img-fluid" width="100px" alt="logo"
          /></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
              <a class="nav-link" href="htmlpages/productos.html">Productos</a>
              <a class="nav-link" href="htmlpages/nosotros.html">Sobre nosotros</a>
              <a class="nav-link" href="htmlpages/locales.html">Locales</a>
              <a class="nav-link" href="htmlpages/contactos.html">Contactos </a>
            </div>
          </div>
        </div>
      </nav>
      </header>

    )
}

export default Navbar; 