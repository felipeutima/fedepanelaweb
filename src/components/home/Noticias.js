import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import bg1 from "assets/img/bg2.jpg"
import ejemplo from "assets/img/ejemplo.jpeg"
import ejemplo1 from "assets/img/noticia2.png"
import ejemplo2 from "assets/img/noticia3.jpeg"
import ejemplo4 from "assets/img/ejem3.jpg"
import ejemplo5 from "assets/img/ejem4.png"
import ejemplo6 from "assets/img/ejem5.jpeg"
import ejemplo7 from "assets/img/ejem6.png"
import ejemplptend from "assets/img/ejemplotendencia.jpeg"
import ejemplptendencia2 from "assets/img/ejemplotendencia2.jpeg"
import ejemplptendencia3 from "assets/img/ejemplotendencia3.jpeg"
import ejemplptendencia4 from "assets/img/ejemplotendencia4.png"
import { motion } from "framer-motion"

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardSpotify from "./CardSpotify";
import React, { useEffect, useState } from 'react';
import { Filter } from "react-bootstrap-icons";


function Noticias() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('rgba(49, 49, 54, 0.95)');

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            setBackgroundColor(scrollPosition >= 1600 ? 'rgb(255, 204, 40)' : 'rgba(49, 49, 54, 0.95)');
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);


    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (


        <>
            <div className="container-flex  " style={{
         
            }} >
                <div className="" style={{
                  
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '100px auto',
                    zIndex: 0
                }}>



                <div className="overlay"
                    style={{
                        position: "absolute", top: 0, left: 0,
                        width: "100%", height: "100%",
                        backgroundColor: "rgba(355, 355, 355, 0.45)",
                        zIndex:-2,
                        filter: "blur(20px)"

                    }} />


                <div className="container">
                    <div className="row">


                        <div className="col-md-8">


                            <div class="about-text mt-3  my-lg-5" >
                                <div class="rounded-gray-bg my-3">
                                    <h6 class="text-white text-uppercase text-center" >Noticias Gremio</h6>
                                </div>
                                <div className="row mb-3">


                                    <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                        <Carousel>
                                            <Carousel.Item>
                                                <div className="row">
                                                    <div class="col-md-7 col-12 pe-0">
                                                        <img class="img-fluid" width="100%" src={ejemplo6} alt="" />
                                                    </div>
                                                    <div class="col-md-5 col-12 ps-0 " data-bs-theme="dark">
                                                        <div className="panel-dark ">
                                                            <h3 className="fw-bold a-news ">
                                                                “Pan con Fé” la nueva campaña de Levapan y Fedepanela para potenciar la industria panelera y panificadora en Colombia</h3>
                                                            <div className="d-flex align-items-center">
                                                                <p className="m-0 me-2">Febrero 29, 2024</p>

                                                            </div>

                                                        </div>


                                                    </div>
                                                </div>

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <div className="row">
                                                    <div class="col-md-7 col-12 pe-0">
                                                        <img class="img-fluid" width="100%" src={ejemplo6} alt="" />
                                                    </div>
                                                    <div class="col-md-5 col-12 ps-0 " data-bs-theme="dark">
                                                        <div className="panel-dark ">
                                                            <h3 className="fw-bold a-news">


                                                                El Invima emitió la resolución donde establece la actualización de las tarifas de notificación sanitaria nueva y renovación de alimentos de bajo riesgo
                                                            </h3>
                                                            <div className="d-flex align-items-center">


                                                            </div>

                                                        </div>


                                                    </div>
                                                </div>

                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <div className="row">
                                                    <div class="col-md-7 col-12 pe-0">
                                                        <img class="img-fluid" width="100%" src={ejemplo6} alt="" />
                                                    </div>
                                                    <div class="col-md-5 col-12 ps-0 " data-bs-theme="dark">
                                                        <div className="panel-dark ">
                                                            <h3 className="fw-bold a-news">
                                                                Fedepanela participó en el primer taller de Inteligencia Artificial de Yalo
                                                            </h3>
                                                            <div className="d-flex align-items-center">
                                                                <p className="m-0 me-2">Febrero 16, 2024</p>

                                                            </div>

                                                        </div>


                                                    </div>
                                                </div>

                                            </Carousel.Item>



                                        </Carousel>
                                    </motion.div>





                                </div>

                                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                    <div class="row mb-4" >

                                        {isSmallScreen ?
                                            <>

                                                <Accordion >
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Card className="card-news text-white" style={{ backgroundColor: "#2b342e" }} >
                                                                <img class="img-fluid" src={ejemplo6} alt="" />
                                                                <Card.Body>
                                                                    <Card.Title className="a-news ">Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                                                </Card.Body>
                                                            </Card>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1">
                                                        <Accordion.Header>Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Card className="card-news text-white" style={{ backgroundColor: "#2b342e" }} >
                                                                <img class="img-fluid" src={ejemplo6} alt="" />
                                                                <Card.Body>
                                                                    <Card.Title className="a-news ">Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                                                </Card.Body>
                                                            </Card>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2">
                                                        <Accordion.Header>Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Card className="card-news text-white" style={{ backgroundColor: "#2b342e" }} >
                                                                <img class="img-fluid" src={ejemplo6} alt="" />
                                                                <Card.Body>
                                                                    <Card.Title className="a-news ">Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                                                </Card.Body>
                                                            </Card>
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                </Accordion>
                                            </>

                                            : <>
                                                <div class="col-md-4 ">
                                                    <Card className="card-news text-white" style={{ backgroundColor: "#2b342e" }} >
                                                        <img class="img-fluid" src={ejemplo4} alt="" />
                                                        <Card.Body>
                                                            <Card.Title className="a-news ">
                                                                AVISO ACLARATORIO CONVOCATORIA AUDITORÍA FONDO DE FOMENTO PANELERO No. 001 DE 2024</Card.Title>


                                                        </Card.Body>
                                                    </Card>

                                                </div>
                     
                                                <div class="col-md-4">
                                                    <Card className="card-news text-white" style={{ backgroundColor: "#2b342e" }}>
                                                        <img class="img-fluid" src={ejemplo6} alt="" />
                                                        <Card.Body>
                                                            <Card.Title className="a-news ">Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                                <div class="col-md-4">
                                                    <Card className="card-news text-white" style={{ backgroundColor: "#2b342e" }}>
                                                        <img class="img-fluid" src={ejemplo6} alt="" />
                                                        <Card.Body>
                                                            <Card.Title className="a-news ">Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            </>}







                                    </div>
                                </motion.div>


                            </div>
                        </div>
                        <div className="col-md-4">



                            <div className="row">
                                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                    <div className="row mt-3 mt-lg-5">
                                        <div class="rounded-green-bg mb-3">
                                            <h6 class="text-white text-uppercase text-center" >Radio</h6>
                                        </div>
                                        <CardSpotify />


                                    </div>
                                </motion.div>
                                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >

                                    <div class="rounded-white-bg my-2">
                                        <h6 class="text-success text-center text-uppercase " >Tendencias (TO DO Fedenews)</h6>
                                    </div>
                                    <div class="card-date mt-2">
                                        <div class="bar"></div>
                                        <img src={ejemplptend} className="img-fluid" width={"25%"} />

                                        <div class="card_data">
                                            <div class="data">
                                                <div class="text">
                                                    <label class="text_m"><a href="https://www.forbesargentina.com/innovacion/como-hacer-transicion-creacion-contenido-una-actividad-secundaria-una-carrera-profesional-n48771" className="a-events" >
                                                        ¿Cómo hacer la transición de la creación de contenido de una actividad secundaria a una carrera profesional?</a></label>


                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="card-date mt-2">
                                        <div class="bar"></div>
                                        <img src={ejemplptendencia2} className="img-fluid" width={"25%"} />

                                        <div class="card_data">
                                            <div class="data">
                                                <div class="text">
                                                    <label class="text_m"><a href="https://www.enter.co/especiales/dev/abren-inscripciones-para-que-desarrolladores-se-capaciten-gratis-en-chatgpt-o-ciencia-de-datos/" className="a-events" >
                                                        Abren inscripciones para que desarrolladores se capaciten gratis en ChatGPT o ciencia de datos.

                                                    </a></label>


                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="card-date mt-2">
                                        <div class="bar"></div>
                                        <img src={ejemplptendencia3} className="img-fluid" width={"25%"} />

                                        <div class="card_data">
                                            <div class="data">
                                                <div class="text">
                                                    <label class="text_m"><a href="https://www.enter.co/startups/bogota-cuenta-con-el-unico-centro-de-monitoreo-sintetico-con-mas-de-300-robots-como-funciona/" className="a-events" >
                                                        Bogotá cuenta con el único centro de monitoreo sintético con más de 300 robots, ¿cómo funciona?
                                                    </a></label>


                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="card-date mt-2">
                                        <div class="bar"></div>
                                        <img src={ejemplptendencia4} className="img-fluid" width={"25%"} />

                                        <div class="card_data">
                                            <div class="data">
                                                <div class="text">
                                                    <label class="text_m"><a href="https://www.revistapym.com.co/articulos/consumidor/72389/ikea-expande-su-presencia-en-el-comercio-electronico" className="a-events" >
                                                        IKEA expande su presencia en el comercio electrónico.                                              </a></label>


                                                </div>
                                            </div>

                                        </div>
                                    </div>



                                </motion.div>
                            </div>


                        </div>
                    </div>




                </div>



                {/*
            <div className="container-flex" >
                <div
                    className=""
                    style={{
                        backgroundColor: backgroundColor,
                        transition: 'background-color 1s',
                        backgroundAttachment: "fixed",
                        position: "absolute",
                        clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0% 100%)",
                        backgroundSize: "cover",
                        height: "300px",
                        width: "100%",
                        top: `${Math.min(scrollPosition + 140, 3200)}px`, // Máximo desplazamiento de 100vh
                        zIndex: -1
                    }}
                >

                </div>
            </div>
                */}

            </div>
            </div>
        </>


    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Noticias)