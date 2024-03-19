
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/fedepanela-asistencia-tecnica-extension-rural.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"


function AsistenciaTecnica() {

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
                    <h1 className="text-center h1-title mt-5">Asistencia Técnica y Extensión Rural</h1>


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

                                        <p class="lead fw-normal text-muted mb-2"> Fedepanela, como administradora del Fondo de Fomento Panelero, destina más del 50% de lo recursos del parafiscal para el Programa de Asistencia Técnica y Extensión Rural, cubriendo los 15 departamentos productores de panela. Mediante este programase ha venido brindando a los productores paneleros un acompañamiento técnico integral en cultivo de caña, proceso de producción de panela, infraestructura productiva; fortalecimiento organizacional, agroempresarial y comercial; así como en el cumplimiento de la normatividad ambiental y sanitaria, entre otros.</p>

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
export default AsistenciaTecnica