
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/infocomunicaciones.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"


function ObjetivoComunicaciones() {

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
                    <h1 className="text-center h1-title mt-5">Objetivos</h1>


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

                                        <p class="lead fw-normal text-muted mb-2">La Oficina de Comunicaciones de Fedepanela se enfoca en el desarrollo de planes y actividades comunicativas para difundir los avances en el logro de los objetivos del gremio y el sector panelero. Nuestra labor también incluye fortalecer la imagen corporativa, siguiendo los lineamientos del plan estratégico, y llevando a cabo actividades de relaciones públicas para una mayor integración con nuestros stakeholders. 
                                        
                                        <br />

                                        Además, tenemos la responsabilidad del Programa de Promoción al Consumo de productos paneleros del Fondo de Fomento Panelero. A través de este programa, buscamos visibilizar y posicionar nuestros productos ante los consumidores, destacando sus beneficios, diversidad y facilidad de uso en presentaciones no tradicionales. Con esto, brindamos apoyo directo a los productores paneleros y sus organizaciones en todo el país.
                                        
                                        </p>

                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container px-5">

                    <p className="lead fw-normal text-muted">La comunicación corporativa de Fedepanela se lleva a cabo mediante procesos y herramientas de comunicación interna y externa, para medios masivos tradicionales y para redes sociales, a través de los siguientes instrumentos:</p>

                    <ul className="mt-3">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.5" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Emisión de Boletines de Prensa digitales</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.6" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Página web de Fedepanela www.fedepanela.org.co </li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.7" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Facebook @fedepanelacol</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.8" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Twitter: @fedepanelacol</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.9" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Instagram: @fedepanelacol</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "1" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">TikTok: @fedepanelacol </li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "1" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">YouTube: Fedepanela </li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "1" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">LinkedIn: Fedepanela</li>
                                    </motion.div>
                                </ul>

                </div>


       


            </div >





            <Footer />


        </Layout >
    )
}
export default ObjetivoComunicaciones