
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
import doc1 from "assets/docs/Politica_tratamiento_datos_FEDEPANELA.pdf"
import doc2 from "assets/docs/Politica-FFP.pdf"
import doc3 from "assets/docs/ARCHIVO-EN-BASE-CONTABILIDAD-FNFP.pdf"
import doc4 from "assets/docs/ARCHIVO-EN-BASE-CONTRATOS-FNFP.pdf"


import doc5 from "assets/docs/CONTRATISTAS-FNFP.pdf"
import doc6 from "assets/docs/Politica-FFP.pdf"
import doc7 from "assets/docs/FINANCIERA-FNFP.pdf"
import doc8 from "assets/docs/Politica-FFP.pdf"
import doc9 from "assets/docs/SIPA-PROYECTOS-FNFP.pdf"
import doc10 from "assets/docs/SOCIAL-ASOCIADOS-FNFP.pdf"
import doc11 from "assets/docs/SOCIAL-MUJERES-FNFP.pdf"
function HabeasData() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">13. Habeas Data</h1>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">13.1. Ley 1581 de 2012 Protección de Datos Personales</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="dslc-text-module-content">
                                            <p><strong>a. ¿La entidad realizó la inscripción de sus bases de datos, en el Registro Nacional de Base de Datos ante la Superintendencia de Industria y Comercio de acuerdo a lo establecido en la Ley 1581 de 2012?</strong></p>
                                            <p style={{ paddingLeft: '40px' }}>Se adjunta certificación de registro ante la SIC&nbsp; y política de protección datos</p>
                                            <ul>
                                                <li style={{ listStyleType: 'none' }}>
                                                    <ul>
                                                        <li><a  className="a-accordion" href={doc1} target="_blank" rel="noopener"><strong>Política de Protección de Datos Personales - Fedepanela</strong></a></li>
                                                        <li><a className="a-accordion" href={doc2} target="_blank" rel="noopener"><strong>Política de Protección de datos Personales - Fondo de Fomento</strong></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href={doc3} target="_blank" rel="noopener">ARCHIVO EN BASE CONTABILIDAD FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href={doc4} target="_blank" rel="noopener">ARCHIVO EN BASE CONTRATOS FNFP</a></p>{/* 
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href={doc5} target="_blank" rel="noopener">ARCHIVO EN SITIO DIRECCIÓN TÉCNICA FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href={doc6} target="_blank" rel="noopener">ARCHIVO HISTÓRICO FNFP</a></p> */}
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href={doc5} target="_blank" rel="noopener">CONTRATISTAS FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href={doc6} target="_blank" rel="noopener">COORFINANCIERA - FONDO</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href={doc7}  target="_blank" rel="noopener">COORFINANCIERA - GESTIÓN HUMANA</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href={doc8} target="_blank" rel="noopener">CORFINANCIERA - NOMINA</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href={doc9} target="_blank" rel="noopener">FINANCIERA FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href={doc10} target="_blank" rel="noopener">POLÍTICA FFP</a></p>{/*  
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/SIPA-ADMINISTRACIÓN-FNFP.pdf" target="_blank" rel="noopener">SIPA-ADMINISTRACIÓN FNFP</a></p> */}
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/SIPA-PROYECTOS-FNFP.pdf" target="_blank" rel="noopener">SIPA-PROYECTOS FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/SOCIAL-ASOCIADOS-FNFP.pdf" target="_blank" rel="noopener">SOCIAL ASOCIADOS FNFP</a></p> {/* 
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/SOCIAL-JÓVENES-FNFP.pdf" target="_blank" rel="noopener">SOCIAL JÓVENES FNFP</a></p>*/}
                                            <p style={{ paddingLeft: '40px' }}><a className="a-accordion" href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/SOCIAL-MUJERES-FNFP.pdf" target="_blank" rel="noopener">SOCIAL MUJERES FNFP</a></p>
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
export default HabeasData