
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
import entidades from "assets/img/entidades.jpg"
function SomosFDF() {

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
                    <h1 className="text-center h1-title mt-5">Quiénes Somos</h1>


                    <div className="row ">
                        <div class="container px-5 mt-4 ">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <img className="img-fluid rounded mb-5 mb-lg-0" width="350px" src={quienessomos} alt="..." />

                                    </motion.div>
                                </div>
                                <div class="col-lg-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <h2 class="fw-bolder h2-title">Fondo de Fomento</h2>
                                        <p class="lead fw-normal text-muted mb-0">La experiencia de este Ingeniero Agrícola en planes de Desarrollo Territorial con énfasis en Gestión Ambiental Urbana y en el desarrollo de infraestructura para el manejo de procesos de elaboración de la panela unida a su dominio del sector agroindustrial, son los elementos fundamentales para garantizar una gestión de asistencia técnica gremial con miras a aumentar el desarrollo de la comercialización de los mercados nacionales e internacionales.</p>

                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-flex mt-5 " style={{ backgroundImage: `url(${img1})`, marginBottom: "100px", backgroundAttachment: "fixed" }}>
                    <h1 className="text-center text-white py-5">Entidades de Control</h1>
                </div>
                <div className="row  " >
                    <div className="container">

                        <section class="py-2" id="features">
                            <div class="container px-5 ">
                                <div className="row">

                                <div class="col  mb-md-0 h-100">
                                        <div class="feature bg-success bg-gradient text-white rounded-3 mb-1"><FileEarmarkBarGraph /></div>
                                        <h2 class="h5">Informe a la Contaduría Nacional General</h2>
                                        <p class="text-muted">Se envían informes trimestrales de los estados financieros a la Contaduría Nacional General de la Nación.</p>
                                    </div>



                                    <div class="col  mb-md-0 h-100">
                                        <div class="feature bg-success bg-gradient text-white rounded-3 mb-1"><FileEarmarkCheck /></div>
                                        <h2 class="h5">Auditoría Externa</h2>
                                        <p class="text-muted">La Junta nombra a una firma auditora externa para realizar auditorías permanentes al Fondo y presentar informes en las reuniones trimestrales.</p>
                                    </div>
                                    <div class="col h-100">
                                        <div class="feature bg-success bg-gradient text-white rounded-3 mb-1"><FileEarmarkText /></div>
                                        <h2 class="h5">Revisión Ministerial</h2>
                                        <p class="text-muted"> El Ministerio de Agricultura y Desarrollo Rural realiza revisiones periódicas a los programas, procedimientos administrativos, de recaudo y estados financieros del Fondo.</p>
                                    </div>

                                </div>
                                <div className="row">
                                    <div class="col-md-6">
                                        <div class="feature bg-success bg-gradient text-white rounded-3 mb-1"><Eye /></div>
                                        <h2 class="h5">Vigilancia de la Contraloría General</h2>
                                        <p class="text-muted">La Contraloría General de la República vigila los estados financieros, inversiones y administración de la Cuota de Fomento Panelero, recibiendo informes trimestrales.</p>
                                    </div>


                                    <div class="col h-100">
                                        <div class="feature bg-success bg-gradient text-white rounded-3 mb-1"> < People /></div>
                                        <h2 class="h5">Junta Directiva del Fondo de Fomento Panelero</h2>
                                        <p class="text-muted"> Conformada por representantes del Ministerio de Agricultura y Desarrollo Rural y del sector panelero, se reúne trimestralmente para revisar y aprobar inversiones y presupuestos.</p>
                                    </div>

                                </div>




                            </div>
                        </section>
                    </div>


                </div>
            </div >





            <Footer />


        </Layout >
    )
}
export default SomosFDF