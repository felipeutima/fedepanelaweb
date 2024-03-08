
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import VisibilitySensor from 'react-visibility-sensor';
import planestrategico from "assets/img/fedepanela-proyeccion-del-negocio-panelero.png";
import CardAbout from "components/Nuestra Fede/CardAbout";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mision from "assets/img/mision.png"
import vision from "assets/img/vision.png"
import plan from "assets/img/plan.png"
import Accordion from 'react-bootstrap/Accordion';


const items = [
    { id: 1, title: 'Sostenibilidad Institucional', subtitle: 'Subtitle 1' },
    { id: 2, title: 'Sostenibilidad de la cadena', subtitle: 'Subtitle 2' },
    { id: 3, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
    { id: 4, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
    { id: 5, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
    { id: 6, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
];
function ProyeccionNegocio() {



    const [selectedId, setSelectedId] = useState(null);


    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Proyección del negocio panelero</h1>


                <div className="row ">
                    <div class="container px-5 mt-4 ">
                        <div class="row gx-5 align-items-center">
                            <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >

                                    <img className="img-fluid rounded mb-5 mb-lg-0" width="450px" src={planestrategico} alt="..." />

                                </motion.div>
                            </div>
                            <div class="col-lg-6">

                            <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >

                                    <p className="lead fw-normal text-muted mb-0">Productores paneleros:</p>

                                </motion.div>   


                                <ul className="mt-3">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.5" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">¿Ya trazó su plan comercial?</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.6" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">¿Tiene identificado los objetivos y metas de su agroempresa?</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.7" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">¿Conoce los trámites para acceder a códigos de barras, facturación digital o registro de marca?</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.8" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">¿Conoce su punto de equilibrio y costos de producción?</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.9" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">¿Conoce los trámites para exportar?</li>
                                    </motion.div>

                                </ul>
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >

                                    <p className="lead fw-normal text-muted mb-0">El área comercial pone a su disposición un equipo calificado de profesionales para la proyección y fortalecimiento de su agronegocio,  acompañamos y asesoramos los diferentes procesos para el alistamiento de la comercialización de productos paneleros  a mercados diferenciables.</p>

                                </motion.div>   


                            </div>

                        </div>
                    </div>
                </div>


            </div>

      

           




            <Footer />


        </Layout>
    )
}
export default ProyeccionNegocio