
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import VisibilitySensor from 'react-visibility-sensor';
import planestrategico from "assets/img/plan-estrategico3.jpg";
import CardAbout from "components/Nuestra Fede/CardAbout";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';



const items = [
    { id: 1, title: 'Sostenibilidad Institucional', subtitle: 'Subtitle 1' },
    { id: 2, title: 'Sostenibilidad de la cadena', subtitle: 'Subtitle 2' },
    { id: 3, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
    { id: 4, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
    { id: 5, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
    { id: 6, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
];
function PlanEstrategico() {



    const [selectedId, setSelectedId] = useState(null);


    return (
        <Layout>

            <Navbar />
            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Plan Estratégico</h1>


                <div className="row ">
                    <div class="container px-5 mt-4 ">
                        <div class="row gx-5 align-items-center">
                            <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >

                                    <img className="img-fluid rounded mb-5 mb-lg-0" width="450px" src={planestrategico} alt="..." />

                                </motion.div>
                            </div>
                            <div class="col-lg-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >

                                    <p className="lead fw-normal text-muted mb-0">El Plan Estratégico se llama "Hacia la sostenibilidad y modernización gremial y sectorial" y está conformado por seis pilares fundamentales que soportan todas las actividades del gremio para los próximos años</p>

                                </motion.div>



                                <ul className="mt-3">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.5" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Sostenibilidad de la cadena</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.6" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Gestión del conocimiento</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.7" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Sostenibilidad Institucional</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.8" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Construcción de capital social</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.9" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Mercadeo y Comunicaciones</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "1" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Gestión Ambiental</li>
                                    </motion.div>
                                </ul>


                            </div>

                        </div>
                    </div>
                </div>


            </div>

            <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4"> 
                        <CardAbout titulo="Misión" 
                        cuerpo="Somos una organización gremial nacional comprometida con la investigación y el desarrollo tecnológico, económico, social y ambiental del subsector panelero, que orienta políticas públicas y gestiona recursos públicos y privados para contribuir al mejoramiento de la calidad de vida de sus Federados."
                        imagen=""

                        />
                        
                        </div>
                        <div className="col-md-4"> 
                        <CardAbout titulo="Visión" 
                        cuerpo="En el año 2022, seremos la organización que represente a la totalidad de los productores de la caña panelera, posicionaremos los productos a nivel nacional e internacional y contribuiremos a que el sector sea rentable, sostenible y competitivo."
                        imagen=""

                        />
                        
                        </div>
                        <div className="col-md-2"></div>


                    </div>


                </div>




            <Footer />


        </Layout>
    )
}
export default PlanEstrategico