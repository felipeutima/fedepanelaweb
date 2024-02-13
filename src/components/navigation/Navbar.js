import { connect } from "react-redux"
//import { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import basenav from "assets/img/basenav.png"
import fedepng from "assets/img/fedepng.png"
import pselogo from "assets/img/pselogo.png"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


function NavigationBar() {



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
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">

        <div className="container">

          <Navbar.Brand style={{ zIndex: 3, marginLeft: "110px", marginRight: "180px" }} href="#" >
            <img
              src={fedepng}
              width={130}
              style={{ marginTop: "-28px", position: "fixed" }}
              className=""
              alt="Fedepanela"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#home" className="ms-4">   <img
                src={pselogo}
                width={"30px"}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              /></Nav.Link>

              <Nav.Link href="#home">Paute con nosotros</Nav.Link>
              <Nav.Link href="#home">Expopanela</Nav.Link>





            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="¿Qué deseas buscar?"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </div>
      </Navbar>




      <Navbar className={` ${isNavbarFixed ? 'fixed-top py-4  navbar-dark' : ''}`}
        expand="lg"
        style={{ zIndex: 1, background: `${isNavbarFixed ? ' linear-gradient(to right, #C3460F 40%, #E2B22B 95%)' : 'white'}`, transition: "background-color 0.3s ease" }}    >

        <div className="container">

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >


              <NavDropdown style={{ marginLeft: "320px" }} title="Nuestra Federación" id="navbarScrollingDropdown">

                <NavDropdown.Item href="#action3">Quiénes Somos</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Plan Estratégico</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Estructura Fedepanela</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Directorio</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Estatutos</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="Fondo de Fomento" id="navbarScrollingDropdown">

                <NavDropdown.Item href="#action3">Quiénes Somos</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Estructura Orgánica</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Servicios</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Programas</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Normatividad</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Procesos de recaudo</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Atención al ciudadano</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Calendario de eventos</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Directorio</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Convocatorias</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Ofertas de empleo</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Quejas y reclamos</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Preguntas frecuentes</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="Normatividad" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Estatutos</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Comercial</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Ambiental</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Sanitarias</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Laboral</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Ley de transparencia" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>




              <NavDropdown title="Área Técnica" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown title="Gestión de conocimiento" id="navbarScrollingDropdown">
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