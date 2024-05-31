
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/fedepanela-area-tecnica.jpg"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"
import { Link } from "react-router-dom";

import { ArrowRightCircle } from "react-bootstrap-icons";

function OfertaPanelera() {

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

    return (
        <Layout>

            <Navbar />

            <div className="" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <div className="container">
                    <h1 className="text-center h1-title mt-5">Oferta Panelera</h1>


                    <div className="row ">
                        <div class="container px-5 mt-4 ">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <a href="https://www.sipa.org.co/wp/index.php/category/ofertapanelera/cifras/#" target="_blank" className="mx-auto" style={{ textDecoration: "none" }}>
                                            <button>
                                                <span>Ver más</span>
                                                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                    <ArrowRightCircle color="white" size={"100%"} />
                                                </svg>
                                            </button>
                                        </a>
                                    </motion.div>
                                </div>
                                <div class="col-lg-6">
                                    <ol className="mt-3">
                                        <motion.div
                                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                            transition={{ duration: 0.9, ease: "easeOut", delay: "0.5" }}
                                        >
                                            <li className="lead fw-normal "> <p className="text-muted my-0"> Cifras del Sector: Se incluye información actualizada sobre la producción y otros datos relevantes del sector panelero.</p> </li>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                            transition={{ duration: 0.9, ease: "easeOut", delay: "0.6" }}
                                        >
                                            <li className="lead fw-normal "> <p className="text-muted my-0">Costos de Producción: Se proporciona un desglose detallado de los costos involucrados en la producción de panela.</p> </li>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                            transition={{ duration: 0.9, ease: "easeOut", delay: "0.7" }}
                                        >
                                            <li className="lead fw-normal "> <p className="text-muted my-0">Asociaciones: Se presenta un listado de asociaciones relacionadas con la industria panelera y sus funciones.</p> </li>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                            transition={{ duration: 0.9, ease: "easeOut", delay: "0.8" }}
                                        >
                                            <li className="lead fw-normal "> <p className="text-muted my-0">Generación de Empleo: Se destacan los impactos socioeconómicos positivos de la industria panelera en la generación de empleo. </p> </li>
                                        </motion.div>

                                    </ol>



                                </div>

                            </div>
                        </div>
                    </div>
                </div>





            </div >





            <Footer />


        </Layout >
    )
}
export default OfertaPanelera