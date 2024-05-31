import { connect } from "react-redux"
//import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import fedepng from "assets/img/FEDEPANELALOGO-04.png"
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import fomento from "assets/img/fomento.png"


function NavigationBar() {


  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const location = useLocation();
  const isNotHome = location.pathname !== '/';



  return (

    <>




      <a href="/"> <img src={fedepng} className="img-navbar" ></img>  </a>


      <Navbar className={`bg-body-tertiary py-2   ${isNotHome || isSmallScreen ? " " : "position-absolute"}`}
        expand="lg"
        style={{
          borderTop: "solid 8px #FFCC28", zIndex: 2, width: "100%",
          backgroundColor: 'rgba(355, 355, 355, 1)'
        }}    >

        <div className="container ">

          <Navbar.Toggle aria-controls="navbarScroll" />
       
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
                  <img src={fomento}  className="img-fluid" style={{ width: "50px", marginLeft: "140px"}} ></img> 


              <NavDropdown color="#fff" className="my-auto" style={{ marginLeft: isSmallScreen ? "" : "20px" }} title="Nuestra Federación" id="navbarScrollingDropdown">

                <NavDropdown.Item href="/NuestraFederacion/quienessomos">Quiénes Somos</NavDropdown.Item>
                <NavDropdown.Item href="/NuestraFederacion/PlanEstrategico">Plan Estratégico</NavDropdown.Item>
                <NavDropdown.Item href="/NuestraFederacion/EstructuraFedepanela">Estructura Fedepanela</NavDropdown.Item>
                <NavDropdown.Item href="/NuestraFederacion/directorio">Directorio</NavDropdown.Item>
                <NavDropdown.Item href="/NuestraFederacion/estatutos">Estatutos</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown className="my-auto" title="Fondo de Fomento" id="navbarScrollingDropdown">

                <NavDropdown.Item href="/FondodeFomento/QuienesSomos">Quiénes Somos</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/EstructuraOrganica">Estructura Orgánica</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/Servicios">Servicios</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/Programas">Programas</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/Normatividad">Normatividad</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/ProcesosRecaudo">Procesos de recaudo</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/AtencionCiudadano">Atención al ciudadano</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/CalendarioEventos">Calendario de eventos</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/InstrumentosDeGestion">Instrumentos de Gestión</NavDropdown.Item>

                <NavDropdown.Item href="/NuestraFederacion/directorio">Directorio</NavDropdown.Item>

                
                <NavDropdown.Item href="/FondodeFomento/Convocatorias">Convocatorias</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/OfertasEmpleo">Ofertas de empleo</NavDropdown.Item>
                
                <NavDropdown.Item href="/FondodeFomento/QuejasReclamos">Quejas y reclamos</NavDropdown.Item>
                <NavDropdown.Item href="/FondodeFomento/PreguntasFrecuentes">Preguntas frecuentes</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown className="my-auto" title="Normatividad" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/NuestraFederacion/estatutos">Estatutos</NavDropdown.Item>
                <NavDropdown.Item href="/Normatividad/Comercial">Comercial</NavDropdown.Item>
                <NavDropdown.Item href="/Normatividad/Ambiental">Ambiental</NavDropdown.Item>
                <NavDropdown.Item href="/Normatividad/Sanitarias">Sanitarias</NavDropdown.Item>
                <NavDropdown.Item href="/Normatividad/Laboral">Laboral</NavDropdown.Item>
              </NavDropdown>


              <NavDropdown className="my-auto" title="Áreas" id="navbarScrollingDropdown">
                <NavDropdown title="Técnica" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/AreaTecnica/Objetivo">Objetivos</NavDropdown.Item>
                  <NavDropdown.Item href="/AreaTecnica/AsistenciaTecnica">Asistencia Técnica y Extensión Rural</NavDropdown.Item>
                  <NavDropdown.Item href="/AreaTecnica/SeguridadSocial">Seguridad Social y Salud Laboral</NavDropdown.Item>
                  <NavDropdown.Item href="/AreaTecnica/CapitalSocial">Capital Social y Fortalecimiento Organizacional</NavDropdown.Item>
                  <NavDropdown.Item href="/AreaTecnica/BibliografiaTecnica">Bibliografía Técnica</NavDropdown.Item>
                  <NavDropdown.Item href="/Convenios/NamaPanela">Nama Panela</NavDropdown.Item>

                </NavDropdown>
                <NavDropdown title="Comercial" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/AreaComercial/Herramientas">Herramientas para la internacionalización</NavDropdown.Item>
                  <NavDropdown.Item href="/AreaComercial/OportunidadesComerciales">Oportunidades comerciales</NavDropdown.Item>
                  <NavDropdown.Item href="/AreaComercial/ProyeccionNegocio">Proyección del negocio panelero</NavDropdown.Item>

                </NavDropdown>
                <NavDropdown title="Comunicaciones" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/AreaComunicaciones/Objetivo">Objetivos</NavDropdown.Item>
                  <NavDropdown.Item href="/AreaComunicaciones/PromocionConsumo">Promoción al Consumo</NavDropdown.Item>
                  <NavDropdown.Item href="">Notas de prensa</NavDropdown.Item>
                  <NavDropdown.Item href="/AreaComunicaciones/PanelaKids">PanelaKids-Inscripciones</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Socio Empresarial" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/AreaSocioEmpresarial/Objetivo">Objetivos</NavDropdown.Item>
                  <NavDropdown.Item href="/AreaSocioEmpresarial/ConstruccionCapital">Construcción de capital Social</NavDropdown.Item>
                  <NavDropdown.Item href="/AreaSocioEmpresarial/SeguridadySalud">Seguridad y Salud en el Trabajo</NavDropdown.Item>
                  <NavDropdown.Item href="">Galería</NavDropdown.Item>
                  <NavDropdown.Item href="/AreaSocioEmpresarial/NormatividadSocio">Normatividad</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sistemas de información" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/SistemasInformacion/OfertaPanelera" target="blank">Oferta Panelera</NavDropdown.Item>
                  <NavDropdown.Item href="/SistemasInformacion/PreciosMercados" target="blank">Precios y Mercados</NavDropdown.Item>
                  <NavDropdown.Item href="/SistemasInformacion/SIg" target="blank">SIG (Mapas)</NavDropdown.Item>
                  <NavDropdown.Item href="/SistemasInformacion/TipsPaneleros" target="blank">Tips Paneleros</NavDropdown.Item>
                  <NavDropdown.Item href="/SistemasInformacion/Glosario" target="blank">Glosario Panelero</NavDropdown.Item>
                  <NavDropdown.Item href="/SistemasInformacion/Biblioteca" target="blank">Biblioteca</NavDropdown.Item>

                </NavDropdown>

              </NavDropdown>

              <NavDropdown className="my-auto" title="Ley de Transparencia" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/LeyTransparencia/MecanismosContacto">Mecanismos de contacto con el sujeto obligado</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Informaciondeinteres">Información de interés</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Estructuraorgánicaytalentohumano">Estructura Orgánica y talento humano</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Normatividad">Normatividad</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Presupuesto">Presupuesto</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Planeacion">Planeación</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Control">Control</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/Contratacion">Contratación</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/TramitesyServicios">Tramites Y Servicios</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/TransparenciaPasiva">Transparencia Pasiva</NavDropdown.Item>
                <NavDropdown.Item href="/LeyTransparencia/AccesibilidadWeb">Accesibilidad Web</NavDropdown.Item>
                <NavDropdown.Item className="dropdown-item-habeas" href="/LeyTransparencia/HabeasData">Habeas Data</NavDropdown.Item>
          
              </NavDropdown>



              <NavDropdown className="my-auto" title="Convenios" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/Convenios/AexidyFHRE">AEXCID y La FHRE</NavDropdown.Item>
                <NavDropdown.Item href="/Convenios/Finagro">Finagro</NavDropdown.Item>
                <NavDropdown.Item href="/Convenios/NamaPanela">Nama Panela</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link className="my-auto" href="/contacto">Contacto</Nav.Link>

{/*
              <div className="scrolling-text-container">
                <div className="scrolling-text">
                  {copPrice !== null ? (

                    <p className="my-2 mx-auto text-white ">Tasa de cambio: $1 USD = ${copPrice} COP </p>
                  ) : (
                    <p>Cargando...</p>
                  )}
                </div>
              </div>
*/}



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