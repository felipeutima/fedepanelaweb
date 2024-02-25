
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
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header >
                                        <h2 className="h2-title-header">1.1. Sección particular</h2>
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <div className="container">
                                            <span className="fw-bold">Estimado ciudadano: La Federación Nacional de Productores de Panela </span>
                                            actuando como administrador del <span className="fw-bold">Fondo de Fomento Panelero</span>  y
                                            dando cumplimiento a la ley 1712 de 6 de marzo de 2014, deja a disposición de la ciudadanía la siguiente información.

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> <h2 className="h2-title-header"> 1.2. Mecanismos para la atención al ciudadano</h2></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <div>
                                                <a className="a-accordion" href="/FondodeFomento/AtencionCiudadano">a. Espacios físicos destinados para el contacto con la entidad.</a>
                                            </div>
                                            <div>
                                                <a className="a-accordion" href="/FondodeFomento/AtencionCiudadano">b. Teléfonos fijos y móviles, líneas gratuitas y
                                                    fax, incluyendo el indicativo nacional e internacional, en el formato (57+Número del área respectiva).
                                                </a>
                                            </div>

                                            <div>

                                                <a className="a-accordion" href="/FondodeFomento/AtencionCiudadano">c. Correo electrónico institucional</a>
                                            </div>
                                            <div>
                                                <a className="a-accordion" href="/FondodeFomento/AtencionCiudadano">d. Correo físico o postal</a>
                                            </div>

                                            <div>
                                                <a className="a-accordion" href="/FondodeFomento/QuejasReclamos">e. Link al formulario electrónico de solicitudes, peticiones, quejas, reclamos y denuncias</a>
                                            </div>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> <h2 className="h2-title-header">1.3. Localización física, sucursales o regionales, horarios y días de atención al público</h2></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <div><a className="a-accordion" href="/FondodeFomento/AtencionCiudadano">a. Mecanismos para atención al usuario.</a></div>
                                            <div><a className="a-accordion" href="/FondodeFomento/AtencionCiudadano">b. Ubicación fisica de sedes, áreas, regionale, etc.</a></div>
                                            <div><a className="a-accordion" href="/FondodeFomento/AtencionCiudadano">c. Horarios y días de atención al público. </a></div>
                                            <div><a className="a-accordion" href="/FondodeFomento/AtencionCiudadano">d. Enlace a los datos de contacto de las sucursales y regionales. </a></div>

                                            <ul>
                                                <li className="mt-1">Antioquia</li>
                                                <li className="mt-1">Boyacá</li>
                                                <li className="mt-1">Caldas</li>
                                                <li className="mt-1">Caquetá</li>
                                                <li className="mt-1">Cauca</li>
                                                <li className="mt-1">Cundinamarca</li>
                                                <li className="mt-1">Huila</li>
                                                <li className="mt-1">Nariño</li>
                                                <li className="mt-1">Norte de santander</li>
                                                <li className="mt-1">Quindio</li>
                                                <li className="mt-1">Risaralda</li>
                                                <li className="mt-1">Santander</li>
                                                <li className="mt-1">Tolima</li>
                                                <li className="mt-1">Valle</li>

                                            </ul>

                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">

                                    <Accordion.Header> <h2 className="h2-title-header">1.4. Correo electrónico para notificaciones judiciales - <a href="mailto:juridica@fedepanela.org.co" className="a-accordion">juridica@fedepanela.org.co</a> </h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">
                                            Las peticiones, consultas, quejas, reclamos, solicitudes, denuncias o felicitaciones deben realizarse diligenciando el formulario correspondiente, a través de la Sede Electrónica.
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header> <h2 className="h2-title-header">1.5. Políticas de seguridad de la información del sitio web y protección de datos personales</h2></Accordion.Header>

                                    <Accordion.Body>

                                        <ul>
                                            <li className="mt-"> <a href="" className="a-accordion">Políticas de seguridad de la información, sitio web</a> </li>
                                        </ul>

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