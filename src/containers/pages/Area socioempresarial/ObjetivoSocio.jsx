
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/infocomunicaciones.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"


function ObjetivoSocio() {

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

    return (
        <Layout>

            <Navbar />

            <div className="" style={{ marginTop: "50px", marginBottom: "50px" }}>

            <h1 className="text-center h1-title my-5">Objetivos</h1>

                <div className="container px-5">

                    <p className="lead fw-normal text-muted">General: Fortalecer estratégicamente al talento humano gremial, administrativo y operativo en pro de mejorar la calidad de vida de los productores y productoras paneleros/as a partir de la construcción de capital social que posibilite la sostenibilidad, formalización y la modernización gremial y sectorial.</p>
                    <p className="lead fw-normal text-muted">Específicos: </p>

                    <ul className="mt-3">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.5" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Fortalecer estratégicamente al talento humano gremial, administrativo y operativo en pro de mejorar la calidad de vida de los productores y productoras paneleros/as a partir de la construcción de capital social que posibilite la sostenibilidad, formalización y la modernización gremial y sectorial.</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.5" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Integrar a los productores/as mediante lazos de cooperación, confianza y reciprocidad para el logro de objetivos comunes, a través del fortalecimiento socio – empresarial de las agro empresas, incentivando la integración generacional, el empoderamiento y participación de las mujeres y la promoción de la seguridad social y la salud laboral en el subsector panelero.</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.6" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Asesorar a los/as paneleros/as en temas relacionados con la normatividad aplicable en seguridad social, salud laboral y sistema de la seguridad y salud en el trabajo en pro de la formalización laboral y la promoción de estrategias de prevención, seguridad y salud en el trabajo. </li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.7" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Administrar, planificar, coordinar, seguir y controlar las actividades y recursos asignados para la ejecución de proyectos que contengan lineamientos sociales y/o empresariales.</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.8" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Gestionar estratégicamente una política talento humano en pro de cualificar y motivar al recurso humano para alcanzar los objetivos de la Federación, así como también velar por el cumplimiento de las normatividad vigente.</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.9" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Implementar, mejorar continuamente y hacer seguimiento al cumplimiento del Sistema de Gestión de Seguridad y Salud en el Trabajo de conformidad a la normatividad vigente.</li>
                                    </motion.div>
                             
                                </ul>

                </div>


       


            </div >





            <Footer />


        </Layout >
    )
}
export default ObjetivoSocio