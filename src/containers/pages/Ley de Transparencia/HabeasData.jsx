
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
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
                                                        <li><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2021/08/Politica_tratamiento_datos_FEDEPANELA.pdf" target="_blank" rel="noopener"><strong>Política de Protección de Datos Personales - Fedepanela</strong></a></li>
                                                        <li><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/Politica-FFP.pdf" target="_blank" rel="noopener"><strong>Política de Protección de datos Personales - Fondo de Fomento</strong></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/ARCHIVO-EN-BASE-CONTABILIDAD-FNFP.pdf" target="_blank" rel="noopener">ARCHIVO EN BASE CONTABILIDAD FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/ARCHIVO-EN-BASE-CONTRATOS-FNFP.pdf" target="_blank" rel="noopener">ARCHIVO EN BASE CONTRATOS FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/ARCHIVO-EN-SITIO-DIRECCIÓN-TÉCNICA-FNFP.pdf" target="_blank" rel="noopener">ARCHIVO EN SITIO DIRECCIÓN TÉCNICA FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/ARCHIVO-HISTÓRICO-FNFP.pdf" target="_blank" rel="noopener">ARCHIVO HISTÓRICO FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/CONTRATISTAS-FNFP.pdf" target="_blank" rel="noopener">CONTRATISTAS FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/COORFINANCIERA-FONDO.pdf" target="_blank" rel="noopener">COORFINANCIERA - FONDO</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/COORFINANCIERA-GESTIÓN-HUMANA.pdf" target="_blank" rel="noopener">COORFINANCIERA - GESTIÓN HUMANA</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/CORFINANCIERA-NOMINA.pdf" target="_blank" rel="noopener">CORFINANCIERA - NOMINA</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/FINANCIERA-FNFP.pdf" target="_blank" rel="noopener">FINANCIERA FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/Politica-FFP.pdf" target="_blank" rel="noopener">POLÍTICA FFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/SIPA-ADMINISTRACIÓN-FNFP.pdf" target="_blank" rel="noopener">SIPA-ADMINISTRACIÓN FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/SIPA-PROYECTOS-FNFP.pdf" target="_blank" rel="noopener">SIPA-PROYECTOS FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/SOCIAL-ASOCIADOS-FNFP.pdf" target="_blank" rel="noopener">SOCIAL ASOCIADOS FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/SOCIAL-JÓVENES-FNFP.pdf" target="_blank" rel="noopener">SOCIAL JÓVENES FNFP</a></p>
                                            <p style={{ paddingLeft: '40px' }}><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/12/SOCIAL-MUJERES-FNFP.pdf" target="_blank" rel="noopener">SOCIAL MUJERES FNFP</a></p>
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