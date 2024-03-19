
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/fedepanela-tecnica-seguridad-social-salud-laboral.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"


function SeguridadSocial() {

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
                    <h1 className="text-center h1-title mt-5">Seguridad Social y Salud Laboral</h1>


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

                                        <p class="lead fw-normal text-muted mb-2">Para el sector panelero es de gran importancia la seguridad y la salud de los operarios y trabajadores que realizan labores, tanto en el cultivo de la caña como en el proceso de producción de la panela. 
                                        <br></br>

Para ello contamos con un profesional encargado de asesorar a los paneleros en lo relacionado con la normatividad aplicable y la promoción de estrategias de prevención, seguridad y salud en el trabajo.</p>

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
export default SeguridadSocial