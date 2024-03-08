
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/fedepanela-oportunidades-comerciales.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"
import img1 from "assets/img/Img1.png"
import CardDownload from "components/Nuestra Fede/CardDownload"
import formato from "assets/docs/comercial/Formato-Caracterizacion-de-las-Organizaciones.pdf"
import formulario from "assets/docs/comercial/Formulario-Registro-de-Clientes-V3.pdf"
import excel from "assets/docs/comercial/Links-registro-productores-compras-publicas-Ley-2046.xlsx"

function OportunidadesComerciales() {

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
                    <h1 className="text-center h1-title mt-5">Oportunidades Comerciales</h1>


                    <div className="row ">
                        <div class="container px-5 mt-4 ">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <img className="img-fluid rounded mb-5 mb-lg-0" width="80%" src={quienessomos} alt="..." />

                                    </motion.div>
                                </div>
                                <div class="col-lg-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <p class="lead fw-normal text-muted mb-2"> Desde el programa comercial identificamos oportunidades comerciales y generamos acercamientos con productores que cumplan los requerimientos específicos de dichos clientes, con el fin de generar negocios.</p>
                                        <p class="lead fw-normal text-muted mb-0"> En este lugar, si eres un cliente en búsqueda de productos paneleros podrás acceder al formato de registro y atenderemos tu requerimiento, si por el contrario eres productor podrás encontrar información acerca de cómo registrarse como proveedor e inscribirse a las diferentes convocatorias.</p>

                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row  " >
                    

                    <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                        <h1 className="text-center h1-title mt-5">Manual de procedimientos</h1>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="Links registro productores compras públicas ley 2046"
                                        doc={excel} />
                                </motion.div>



                            </div>
                            <div className="col-md-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="Formulario registro de clientes "
                                        doc={formulario} />
                                </motion.div>



                            </div>
                            <div className="col-md-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="Formato caraterización de las Organizaciones"
                                        doc={formato} />
                                </motion.div>


                            </div>


                        </div>


                    </div>



                </div>
              
                
            </div >





            <Footer />


        </Layout >
    )
}
export default OportunidadesComerciales