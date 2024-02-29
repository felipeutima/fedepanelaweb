import { connect } from "react-redux"
//import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import basenav from "assets/img/basenav.png"
import fedepng from "assets/img/FEDEPANELALOGO-04.png"
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

function NavigationBar() {

  const { scrollYProgress } = useScroll();

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);


  return (

    <>
       
  
       
       
        <a href="/"> <img src={fedepng} className="img-navbar"></img>  </a>


      <Navbar className="navbar-transparent position-absolute navbar-dark"
        expand="lg"
        style={{ borderTop: "solid 15px #FFCC28", zIndex:2, width:"100%",
         backgroundColor: 'rgba(49, 49, 54, 0.9)'    }}    >

        <div className="container">

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >


              <NavDropdown style={{ marginLeft: "320px" }} title="Nuestra Federación" id="navbarScrollingDropdown">

                <NavDropdown.Item href="/NuestraFederacion/quienessomos">Quiénes Somos</NavDropdown.Item>
                <NavDropdown.Item href="/NuestraFederacion/PlanEstrategico">Plan Estratégico</NavDropdown.Item>
                <NavDropdown.Item href="/NuestraFederacion/EstructuraFedepanela">Estructura Fedepanela</NavDropdown.Item>
                <NavDropdown.Item href="/NuestraFederacion/directorio">Directorio</NavDropdown.Item>
                <NavDropdown.Item href="/NuestraFederacion/estatutos">Estatutos</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="Fondo de Fomento" id="navbarScrollingDropdown">

                <NavDropdown.Item href="/FondodeFomento/QuienesSomos">Quiénes Somos</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/EstructuraOrganica">Estructura Orgánica</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/Servicios">Servicios</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/Programas">Programas</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/Normatividad">Normatividad</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/ProcesosRecaudo">Procesos de recaudo</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/AtencionCiudadano">Atención al ciudadano</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/CalendarioEventos">Calendario de eventos</NavDropdown.Item>
                <NavDropdown.Item href="/NuestraFederacion/directorio">Directorio</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Convocatorias</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Ofertas de empleo</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/QuejasReclamos">Quejas y reclamos</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Preguntas frecuentes</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="Normatividad" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/NuestraFederacion/estatutos">Estatutos</NavDropdown.Item>
                <NavDropdown.Item href="/Normatividad/Comercial">Comercial</NavDropdown.Item>
                <NavDropdown.Item href="/Normatividad/Ambiental">Ambiental</NavDropdown.Item>
                <NavDropdown.Item href="/Normatividad/Sanitarias">Sanitarias</NavDropdown.Item>
                <NavDropdown.Item href="/Normatividad/Laboral">Laboral</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Ley de Transparencia" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/LeyTransparencia/MecanismosContacto">Mecanismos de contacto</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Control">Control</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Informaciondeinteres">Información de interés</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Estructuraorgánicaytalentohumano">Estructura Orgánica y talento humano</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Normatividad">Normatividad</NavDropdown.Item>
                <NavDropdown.Item href="/">Presupuesto</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Planeacion">Planeación</NavDropdown.Item>
              </NavDropdown>



              <NavDropdown title="Convenios" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">AEXCID y La FHRE</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Finagro</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Nama Panela</NavDropdown.Item>

              </NavDropdown>

            </Nav>

          </Navbar.Collapse>

        </div>
      </Navbar>

    </>
  );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(NavigationBar)