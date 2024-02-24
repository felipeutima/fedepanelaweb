import { connect } from "react-redux"
//import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import basenav from "assets/img/basenav.png"
import fedepng from "assets/img/fedepng.png"
import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

function NavigationBar() {

  const { scrollYProgress } = useScroll();

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) { // Cambia 100 al valor deseado de desplazamiento
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <>
    
      <header style={{ position: 'fixed', top: 0, left: -10, zIndex: 2 }}>


        ${isNavbarFixed ?
          <motion.div
            animate={{ y: -100 }}
            transition={{ duration:0.2, ease: "easeOut" }}
          >
            <img
              src={basenav}
              width={"400px"}
              height={"150px"}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </motion.div> :
          <img
            src={basenav}
            width={"400px"}
            height={"150px"}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            style={{ position: 'fixed', top: 0, left: -10, zIndex: 2 }}
          />}



      </header>
      <Navbar    bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary shadow-lg">

        <div className="container">

          <Navbar.Brand style={{ zIndex: 3, marginLeft: "110px", marginRight: "180px" }} href="/" >
            <img
              src={fedepng}
              width={120}
              style={{ marginTop: "-8px", position: "fixed"  }}
              className=""
              alt="Fedepanela"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />


        </div>
      </Navbar>
      




    

      <Navbar className="fixed-top py-4 "
        expand="lg"
        style={{ zIndex: 1, background:  'white', borderBottom: "solid 1px #C3460F" }}    >

        <div className="container">

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >


              <NavDropdown style={{ marginLeft: "320px"}}  title="Nuestra Federación" id="navbarScrollingDropdown">

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
                <NavDropdown.Item href="/">Información de interés</NavDropdown.Item>
                <NavDropdown.Item href="/">Estructura Orgánica y talento humano</NavDropdown.Item>
                <NavDropdown.Item href="/">Normatividad</NavDropdown.Item>
                <NavDropdown.Item href="/">Presupuesto</NavDropdown.Item>
                <NavDropdown.Item href="/">Planeación</NavDropdown.Item>
              </NavDropdown>




              {/*
              <NavDropdown title="Áreas" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              */}
              <NavDropdown title="Convenios" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Gestión</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
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