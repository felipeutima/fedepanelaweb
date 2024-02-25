
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import re2023 from "assets/docs/Reforma-Estatutaria-2023.pdf"
import re003 from "assets/docs/Resolucion-003-Reglamento-Elecciones-2023.pdf"
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
function Planeacion() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">6. Planeación</h1>
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
                                        <h2 className="h2-title-header">
                                            6.1. Políticas, lineamientos y manuales</h2>
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <div className="container">
                                            <span className="fw-bold"> a.  Políticas y lineamientos sectoriales e institucionales.</span>

                                            <ul>
                                                <li> <a href="" className="a-accordion">  Ley 40 de 1990</a></li>
                                                <li> <a href="" className="a-accordion">  Decreto 1071 de 2015</a></li>
                                                <li> <a href="" className="a-accordion">  Plan estratégico 2018-2022</a></li>

                                            </ul>
                                            <span className="fw-bold"> b. Manuales</span>

                                            <ul>
                                                <li> <a href="" className="a-accordion">  Manual de funciones</a></li>
                                                <li> <a href="" className="a-accordion">  Manual de procedimientos</a></li>
                                                <li> <a href="" className="a-accordion">  Manual de Procedimientos  - Contable  - Versión 1  - 2016 - Corrección cuarto envío auditoria respuesta</a></li>
                                                <li> <a href="" className="a-accordion">  Manual Gestion de Solicitudes y Tratamiento de Datos Personales FNFP</a></li>

                                            </ul>
                                            <span className="fw-bold"> c. planes estratégicos, sectoriales e institucionales</span>

                                            <ul>
                                                <li> <a href="" className="a-accordion">  Plan Estratégico 2018 - 2022</a></li>

                                            </ul>
                                            <span className="fw-bold"> d. Plan de Rendición de cuentas.</span>
                                            <div>No aplica </div>
                                            <span className="fw-bold"> e. Plan de Servicio al ciudadano.</span>
                                            <div>No aplica </div>
                                            <span className="fw-bold"> f. Plan Antitrámites.</span>
                                            <div>No aplica </div>
                                            <span className="fw-bold"> g. Plan Anticorrupción y de Atención al Ciudadano de conformidad con el Art. 73 de Ley 1474 de 2011</span>
                                            <div>No aplica </div>
                                            <span className="fw-bold"> h. Contenido de toda decisión y/o política que haya adoptado y afecte al público, junto con sus fundamentos y toda interpretación autorizada de ellas.</span>
                                            <div>No aplica </div>

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> <h2 className="h2-title-header"> 6.2. Plan de acción</h2></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <div>A continuación encuentra por año 1. Plan de acción y presupuesto de gastos e inversión del año y las fichas de los proyectos y programas que se van a ejecutar en cada año.</div>
                                            <div className="mt-2">Hay una ficha por programa en la que se especifica:</div>
                                            <div className="mt-2">Nombre del programa responsable</div>




                                            <ol>
                                                <li>  Manual de funciones</li>
                                                <li>  Descripción del proyecto</li>
                                                <li>  Antecedentes y justificación</li>
                                                <li>  Objetivos generales</li>
                                                <li>  Objetivos específicos</li>
                                                <li>  Metas y logros esperados</li>
                                                <li>  marco lógico: indicadores</li>
                                                <li>  Responsable</li>

                                            </ol>
                                            <ul>
                                                <li>  <a href="" className="a-accordion">  2016</a></li>
                                                <li>  <a href="" className="a-accordion">  2017</a></li>
                                                <li>  <a href="" className="a-accordion">  2018</a></li>
                                                <li>  <a href="" className="a-accordion">  2019</a></li>
                                                <li>  <a href="" className="a-accordion">  2020</a></li>


                                            </ul>

                                            En las fichas de los programas se encuentran los objetivos, estrategias, proyectos, metas y responsables


                                            <ul className="mt-2">
                                                <div className="fw-bold mx-1">Fichas Asistencia Técnica</div>
                                                <li>  <a href="" className="a-accordion">  2016</a></li>
                                                <li>  <a href="" className="a-accordion">  2017</a></li>
                                                <li>  <a href="" className="a-accordion">  2018</a></li>
                                                <li>  <a href="" className="a-accordion">  2019</a></li>
                                                <li>  <a href="" className="a-accordion">  2020</a></li>


                                            </ul>
                                            <ul className="mt-2">
                                                <div className="fw-bold mx-1">Fichas Programa Comercial</div>
                                                <li>  <a href="" className="a-accordion">  2016</a></li>
                                                <li>  <a href="" className="a-accordion">  2017</a></li>
                                                <li>  <a href="" className="a-accordion">  2018</a></li>
                                                <li>  <a href="" className="a-accordion">  2019</a></li>
                                                <li>  <a href="" className="a-accordion">  2020</a></li>
                                                <li>  <a href="" className="a-accordion">  2021</a></li>
                                                <li>  <a href="" className="a-accordion">  2022</a></li>


                                            </ul>
                                            <ul className="mt-2">
                                                <div className="fw-bold mx-1">Fichas Programa Control a la Evasión</div>

                                                <li>  <a href="" className="a-accordion">  2015</a></li>
                                                <li>  <a href="" className="a-accordion">  2016</a></li>
                                                <li>  <a href="" className="a-accordion">  2017</a></li>
                                                <li>  <a href="" className="a-accordion">  2018</a></li>
                                                <li>  <a href="" className="a-accordion">  2019</a></li>
                                                <li>  <a href="" className="a-accordion">  2020</a></li>
                                                <li>  <a href="" className="a-accordion">  2021</a></li>


                                            </ul>
                                            <ul className="mt-2">
                                                <div className="fw-bold mx-1">Fichas Promoción al consumo</div>

                                                <li>  <a href="" className="a-accordion">  2016</a></li>
                                                <li>  <a href="" className="a-accordion">  2017</a></li>
                                                <li>  <a href="" className="a-accordion">  2018</a></li>
                                                <li>  <a href="" className="a-accordion">  2019</a></li>
                                                <li>  <a href="" className="a-accordion">  2020</a></li>
                                                <li>  <a href="" className="a-accordion">  2022</a></li>


                                            </ul>

                                            <ul className="mt-2">
                                                <div className="fw-bold mx-1">Fichas Programa Sistema de Información</div>


                                                <li>  <a href="" className="a-accordion">  2018</a></li>
                                                <li>  <a href="" className="a-accordion">  2019</a></li>
                                                <li>  <a href="" className="a-accordion">  2020</a></li>
                                                <li>  <a href="" className="a-accordion">  2021</a></li>


                                            </ul>
                                            <ul className="mt-2">
                                                <div className="fw-bold mx-1">Ficha Programa Socio empresarial</div>


                                                <li>  <a href="" className="a-accordion">  2022</a></li>


                                            </ul>

                                            <span className="fw-bold"> f. Planes generales de compras</span>
                                            <div><span className="fw-bold"> g. Distribución presupuestal de proyectos de inversión junto a los indicadores de gestión.</span></div>

                                            <div>No aplica </div>

                                            <div><span className="fw-bold"> h. Presupuesto desagregado con modificaciones</span></div>
                                            <ul className="mt-2">
                                                <div className="fw-bold mx-1">Fichas Programa Sistema de Información</div>


                                                <li>  <a href="" className="a-accordion">  2016</a></li>
                                                <li>  <a href="" className="a-accordion">  2017</a></li>
                                                <li>  <a href="" className="a-accordion">  2018</a></li>
                                                <li>  <a href="" className="a-accordion">  2019</a></li>
                                                <li>  <a href="" className="a-accordion">  2020</a></li>


                                            </ul>

                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> <h2 className="h2-title-header">6.3. Programas y proyectos en ejecución</h2></Accordion.Header>
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
export default Planeacion