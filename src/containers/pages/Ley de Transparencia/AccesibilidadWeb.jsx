
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
function AccesibilidadWeb() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">12. Accesibilidad web</h1>
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
                                        <h2 className="h2-title-header">

                                            12.1. Formato alternativo para grupos etnicos y culturales
                                        </h2>
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <div className="container">

                                            <div className="my-2">

                                                a. ¿La entidad ha divulgado información y eleaborado formatos alternativos en respuesta a los solicitudes de los grupos étinicos y culturales del país?
                                            </div>
                                            <div className="my-2">
                                                Si - Resumen Grupo Poblacional
                                            </div>


                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">
                                            12.1. Accesibilidad en medios electrónicos para la población en situación de discapacidad visual
                                        </h2>



                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <div className="container">
                                            <span className="f2-bold">
                                                a. ¿El sitio web de su Entidad cumple con los criterios de accesibilidad de nivel A?
                                            </span>
                                            <div className="my=2">
                                                En el momento no contamos con el manejo de una plataforma que vincule a la población con discapacidad para el acceso a la pagina www.fedepanela.org.co/gremio
                                            </div>

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
export default AccesibilidadWeb