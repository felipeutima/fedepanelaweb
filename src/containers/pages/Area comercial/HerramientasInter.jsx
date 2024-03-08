
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/fedepanela-comercial-internacionalizacion.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"
import img1 from "assets/img/Img1.png"
import CardDownload from "components/Nuestra Fede/CardDownload"
import formato from "assets/docs/comercial/Boletín de consumo II - Importaciones de endulzantes en el mundo.pdf"
import formato2 from "assets/docs/comercial/Boletín de consumo III - Endulzantes no tradicionales.pdf"
import formato3 from "assets/docs/comercial/Boletín IV - Certificaciones de Valor Agregado.pdf"
import formato4 from "assets/docs/comercial/12. Exportaciones 2023 ENE - DIC.pdf"
import formato5 from "assets/docs/comercial/Informe Inteligencia de mercados 2023 I.pdf"
import formato6 from "assets/docs/comercial/Informe Inteligencia de mercados 2023 II.pdf"
import formulario from "assets/docs/comercial/Formulario-Registro-de-Clientes-V3.pdf"
import excel from "assets/docs/comercial/Links-registro-productores-compras-publicas-Ley-2046.xlsx"

function HerramientesInter() {

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
                    <h1 className="text-center h1-title mt-5">Herramientas para la internacionalización</h1>


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

                                        <p class="lead fw-normal text-muted mb-2"> "Para exportar panela colombiana con éxito, es esencial conocer las características de los mercados internacionales y adaptar la oferta a las necesidades de los clientes. En esta página, te proporcionamos información útil y relevante para que puedas tomar decisiones informadas y estratégicas. Además, te enseñamos cómo utilizar herramientas de consulta de datos para analizar la competencia, identificar oportunidades y optimizar tus procesos de exportación."</p>

                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row  " >


                    <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                        <div className="row mt-5">
                            <div className="col-md-3 col-12 my-2">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="BOLETÍN DE CONSUMO II:IMPORTACIONES DE ENDULZANTES EN EL MUNDO"
                                        doc={formato} />
                                </motion.div>



                            </div>
                            <div className="col-md-3 col-12 my-2">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="BOLETÍN DE TENDENCIAS DE CONSUMO III:ENDULZANTES NO TRADICIONALES "
                                        doc={formato2} />
                                </motion.div>



                            </div>
                            <div className="col-md-3 col-12 my-2">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="IV BOLETÍN DE TENDENCIAS DECONSUMO:CERTIFICACIONES DE VALOR AGREGADO"
                                        doc={formato3} />
                                </motion.div>


                            </div>
                            <div className="col-md-3 col-12 my-2">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="EXPORTACIONES DE PANELA COLOMBIANA - PARTIDA ARANCELARIA 1701130000"
                                        doc={formato4} />
                                </motion.div>


                            </div>

                            <div className="col-md-3"></div>
                            <div className="col-md-3 col-12 my-2">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="INFORME DE INTELIGENCIA DE MERCADOS"
                                        doc={formato5} />
                                </motion.div>


                            </div>
                            <div className="col-md-3 col-12 my-2">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="INFORME DE INTELIGENCIA DE MERCADOS"
                                        doc={formato6} />
                                </motion.div>


                            </div>
                            <div className="col-md-3"></div>


                        </div>


                    </div>



                </div>


            </div >





            <Footer />


        </Layout >
    )
}
export default HerramientesInter