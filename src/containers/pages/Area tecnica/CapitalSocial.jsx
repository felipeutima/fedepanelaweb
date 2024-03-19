
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/fedepanela-tecnica-capital-social-fortalecimiento.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"


function CapitalSocial() {

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
                    <h1 className="text-center h1-title mt-5">Capital Social y Fortalecimiento Organizacional</h1>


                    <div className="row ">
                        <div class="container px-5 mt-4 ">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <img className="img-fluid rounded mb-5 mb-lg-0" width="100%" src={quienessomos} alt="..." />

                                    </motion.div>
                                </div>
                                <div class="col-lg-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <p class="lead fw-normal text-muted mb-2">Para la Federación es fundamental el mejoramiento de la calidad de vida de los productores a partir de la construcción de Capital Social, el relevo generacional y la ampliación de oportunidades para la generación de ingresos. 
                                        <br></br>Se realiza el acompañamiento y fortalecimiento de las asociaciones de las asociaciones de productores vinculados a los encadenamientos productivos y se promueve la participación de la mujer emprendedora panelera y el relevo generacional con las redes de jóvenes paneleros.
                                        <br /> El Capital Social es tanto un insumo inicial (punto de partida) como un resultado de los programas y proyecto (punto de llegada). Mientras más capital social mayores posibilidades habrá de lograr un desarrollo rural sostenible. El objetivo del Capital Social es la construcción de cooperación, confianza y reciprocidad para el logro de objetivos comunes.
                                        
                                        </p>

                                    </motion.div>
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
export default CapitalSocial