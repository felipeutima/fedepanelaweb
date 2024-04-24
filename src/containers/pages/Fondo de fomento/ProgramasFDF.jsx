
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/quienes2.png"
import fomento from "assets/img/fomento.jpg"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { People, FileEarmarkCheck, FileEarmarkText, Eye, FileEarmarkBarGraph } from "react-bootstrap-icons"
import img1 from "assets/img/Img1.png"

import p1 from "assets/img/p1.jpg"
import p2 from "assets/img/p2.jpg"
import p3 from "assets/img/p3.jpg"
import p4 from "assets/img/p4.jpg"
import p5 from "assets/img/p5.jpg"

function ProgramasFDF() {

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
                    <h1 className="text-center h1-title mt-5">Programas</h1>


                    <div className="row ">
                        <div class="container px-5 mt-4 ">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <img className="img-fluid rounded mb-5 mb-lg-0" width="100%" src={p1} alt="..." />

                                    </motion.div>
                                </div>
                                <div class="col-lg-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <h2 class="fw-bolder h2-title">ASISTENCIA TÉCNICA:
                                            PROGRAMA DE
                                            TRANSFERENCIA Y EXTENSIÓN</h2>
                                        <p class="lead fw-normal text-muted mb-0 text-justify">El programa de Asistencia Técnica lo desarrolla Fedepanela desde mediados del año 2002, teniendo como cofinanciador principal al Fondo de Fomento Panelero.</p>
                                        <p class="lead fw-normal text-muted mb-0 text-justify">Mejorar los conocimientos y competencias de los productores paneleros en los diferentes territorios beneficiarios mediante actividades de Asistencia Técnica Integral y Extensión Rural, incorporando metodologías participativas e incluyentes para todos los habitantes del territorio de manera que conjuntamente y a través de sus organizaciones se puedan insertar en mercados de valor agregado y/o mejores condiciones de negociación.</p>

                                    </motion.div>
                                </div>

                            </div>
                        </div>
                        <div className="row ">
                            <div class="container px-5 mt-4 ">
                                <div class="row gx-5 align-items-center">



                                    <div class="container px-5 my-5">
                                        <div class="row gx-5 align-items-center">
                                            <div class="col-lg-6">

                                                <motion.div
                                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                                >

                                                    <img className="img-fluid rounded mb-5 mb-lg-0" width="350px" src={p2} alt="..." />

                                                </motion.div>
                                            </div>
                                            <div class="col-lg-6">
                                                <motion.div
                                                    initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                                >

                                                    <h2 class="fw-bolder h2-title">PROGRAMA COMERCIAL:
                                                        ACOMPAÑAMIENTO A LA GESTIÓN COMERCIAL Y EMPRESARIAL</h2>
                                                    <p class="lead fw-normal text-muted mb-0">Consolidar desarrollo de productos y mercados con valor agregado para el subsector panelero a través de actividades de degustación en mercados institucionales, supermercados a nivel nacional y así mismo, apoyar organizaciones en procesos básicos para el desarrollo de mercados de exportación de panela orgánica y con valor agregado.</p>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div class="container px-5 mt-4 ">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <img className="img-fluid rounded mb-5 mb-lg-0" width="100%" src={p3} alt="..." />

                                    </motion.div>
                                </div>
                                <div class="col-lg-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <h2 class="fw-bolder h2-title">Acuerdo de competitividad</h2>
                                        <p class="lead fw-normal text-muted mb-0 text-justify">El proyecto tiene como fin apoyar a la Secretaría Técnica de la Cadena Agroindustrial de la Panela en los desplazamientos que se realicen con fines de control y vigilancia. El Papel de la Secretaría Técnica Nacional de la Cadena es el acompañamiento permanenete integral a los requerimientos de los eslabones que la componen, a través de apoyo y seguimiento de las acciones y estrategias que se decidan al interior de la organización como tal. El papel de la Secretaría de la Comisión de Control y Vigilancia es el de apoyar y coordinar las instituciones de IVC en su trabajo de garantizar la calidad de la panela.</p>

                                    </motion.div>
                                </div>

                            </div>
                        </div>
                        <div className="row ">
                            <div class="container px-5 mt-4 ">
                                <div class="row gx-5 align-items-center">



                                    <div class="container px-5 my-5">
                                        <div class="row gx-5 align-items-center">
                                            <div class="col-lg-6">

                                                <motion.div
                                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                                >

                                                    <img className="img-fluid rounded mb-5 mb-lg-0" width="350px" src={p4} alt="..." />

                                                </motion.div>
                                            </div>
                                            <div class="col-lg-6">
                                                <motion.div
                                                    initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                                >

                                                    <h2 class="fw-bolder h2-title">Control a la Evasión</h2>
                                                    <p class="lead fw-normal text-muted mb-0">
                                                        Garantizar el adecuado control del recaudo de la cuota de fomento panelero a través de la cinta certificatoria del pago y fortalecer sistemas de información y capacitación que permitan el adecuado control de los aportantes de la cuota.</p>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className="row ">
                            <div class="container px-5 mt-4 ">
                                <div class="row gx-5 align-items-center">
                                    <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                        <motion.div
                                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                            transition={{ duration: 0.9, ease: "easeOut" }}
                                        >

                                            <img className="img-fluid rounded mb-5 mb-lg-0" width="100%" src={p5} alt="..." />

                                        </motion.div>
                                    </div>
                                    <div class="col-lg-6">
                                        <motion.div
                                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                            transition={{ duration: 0.9, ease: "easeOut" }}
                                        >

                                            <h2 class="fw-bolder h2-title">Promoción al Consumo</h2>
                                            <p class="lead fw-normal text-muted mb-0 text-justify">Promover el consumo de la panela dentro de la población consumidora, resaltando los beneficios del producto, la diversidad y facilidad de uso que ofrecen las presentaciones no tradicionales.</p>

                                        </motion.div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>


                </div >
            </div >





            <Footer />


        </Layout >
    )
}
export default ProgramasFDF