
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import re2023 from "assets/docs/Reforma-Estatutaria-2023.pdf"
import re003 from "assets/docs/Resolucion-003-Reglamento-Elecciones-2023.pdf"
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
function MecanismoContacto() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">1. Mecanismos de contacto con el sujeto obligado</h1>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="h2-title">
                                        1.1. Sección particular</Accordion.Header>
                                    <Accordion.Body>
                                        Estimado ciudadano: La Federación Nacional de Productores de Panela actuando como administrador del Fondo de Fomento Panelero y
                                        dando cumplimiento a la ley 1712 de 6 de marzo de 2014, deja a disposición de la ciudadanía la siguiente información.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>1.2. Mecanismos para la atención al ciudadano</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <a href="">a. Espacios físicos destinados para el contacto con la entidad.</a>
                                            <a href="">b. Teléfonos fijos y móviles, líneas gratuitas y
                                                fax, incluyendo el indicativo nacional e internacional, en el formato (57+Número del área respectiva).
                                            </a>
                                            <a href="">c. Correo electrónico institucional</a>
                                            <a href="">d. Correo físico o postal</a>
                                            <a href="">e. Link al formulario electrónico de solicitudes, peticiones, quejas, reclamos y denuncias</a>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>1.2. Mecanismos para la atención al ciudadano</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <a href="">a. Espacios físicos destinados para el contacto con la entidad.</a>
                                            <a href="">b. Teléfonos fijos y móviles, líneas gratuitas y
                                                fax, incluyendo el indicativo nacional e internacional, en el formato (57+Número del área respectiva).
                                            </a>
                                            <a href="">c. Correo electrónico institucional</a>
                                            <a href="">d. Correo físico o postal</a>
                                            <a href="">e. Link al formulario electrónico de solicitudes, peticiones, quejas, reclamos y denuncias</a>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </motion.div>



                    </div>


                </div>


            </div>



            <Footer />


        </Layout>
    )
}
export default MecanismoContacto