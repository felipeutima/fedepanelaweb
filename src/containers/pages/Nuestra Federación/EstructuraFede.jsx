
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardPerson from "components/Nuestra Fede/CardPerson"
import gerente from "assets/img/Fedepanela-Gerente.jpg"
import presidente from "assets/img/presidente-junta.jpg"
import { motion } from 'framer-motion';
import { Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import estructura from "assets/img/organigrama.png"
import gremial from "assets/img/gremial.jpg"

function EstructuraFede() {

    const [show, setShow] = useState(false);
    const handleClose1 = () => setShow(false);



    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Estructura Fedepanela</h1>

                <div className="row mt-4">

                    <div className="col-md-12">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <p className=" fw-normal text-muted text-center lead mx-5 ">La estructura organizativa de FEDEPANELA se representa por medio de un mapa que muestra la jerarquía y los diferentes departamentos dentro de la organización. Es interesante para comprender su diseño funcional y cómo se distribuyen las responsabilidades y funciones en la institución.</p>

                        </motion.div>
                        <div className="d-inline justify-content-center mx-auto">
                            <div className="row my-2">
                                <div className="col-md-4 text-center">
                                    <Button onClick={() => setLgShow(true)} className="mx-auto" variant="success">Estructura Organizacional</Button>{' '}

                                    <Modal size="lg"
                                        show={lgShow}
                                        onHide={() => setLgShow(false)}
                                        aria-labelledby="example-modal-sizes-title-lg" onHide={handleClose} dialogClassName="modal-estructura">
                                        <Modal.Header closeButton>
                                            <Modal.Title>Ver Estructura Organizacional</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body> <img style={{ width: "100%" }} src={estructura} alt="estructura" /> </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="success" onClick={handleClose}>
                                                Cerrar
                                            </Button>

                                        </Modal.Footer>
                                    </Modal>
                                </div>
                                <div className="col-md-4 text-center">
                                    <Button onClick={() => setShow(true)} className="mx-auto" variant="success">Estructura Gremial</Button>{' '}

                                    <Modal show={show} onHide={handleClose1}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Ver Estructura Gremial</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body> <img style={{ width: "100%" }} src={gremial} alt="estructura" /> </Modal.Body>
                                        <Modal.Footer>


                                            <Button variant="success" onClick={handleClose1}>
                                                Cerrar
                                            </Button>

                                        </Modal.Footer>
                                    </Modal>
                                </div>
                                <div className="col-md-4 text-center">

                                    <Button variant="success " >
                                        <a href="https://sigfedepanela.github.io/CEDULYCOMIT/" style={{ color: "white", textDecoration: "none" }} target="blank">Ver mapa interactivo</a>
                                    </Button>
                                </div>



                            </div>


                        </div>
                    </div>




                </div>
                <div className="row mt-5">
                    <div className="col-md-6 col-12">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardPerson nombre="Carlos Fernando Mayorga" desripcion="Gerente General Fedepanela"

                                imagen={gerente}
                                contenido='El gerente de FEDEPANELA es Ingeniero Agrícola de la Universidad Nacional de Colombia,con experiencia en formulación, ejecución y evaluación de planes, programas y proyectos de  Desarrollo Territorial, con énfasis en componentes geo estadísticos, ambientales, agropecuarios y organizacionales.Su trabajo en el gremio panelero es ampliamente conocido  por la labor realizada en el área técnica y de producción que incluyen aspectos  relevantes como  la Coordinación Nacional del Programa de Acompañamiento a la Gestión Ambiental y Mejoramiento en la Infraestructura de Producción; la Coordinación Nacional del Programa de Extensión Rural en "centro de Servicios" de Fedepanela ; asesorías del área técnica en el Centro de Servicios de Cundinamarca, desarrollando actividades en mejoramiento de procesos de elaboración de panela y diversificación de productos, manejo integral de cultivos, buenas prácticas agrícolas y de manufactura, acompañamiento agroempresarial  a productores; y como tallerista y capacitador en actividades del Fondo Nacional de la Panela. El ingeniero Mayorga además ha realizado un excelente desempeño como asesor y ejecutor de programas de acompañamiento integral para impulsar las diferentes áreas del sector, ocupando cargos destacados como Ingeniero de Proyecto de la E.A.A.B. en Igal Ltda., Ingeniero Contratista y de Campo del Departamento Nacional de Planeación DANE y como asesor Paippec Cundinamarca en Acecampo Eat, entre otros. La experiencia de este Ingeniero Agrícola en planes de Desarrollo Territorial con énfasis en Gestión Ambiental Urbana y en el desarrollo de infraestructura para el manejo de procesos de elaboración de la panela unida a su dominio del sector agroindustrial, son los elementos fundamentales para garantizar una gestión de asistencia técnica gremial con miras a aumentar el desarrollo de la comercialización de los mercados nacionales e internacionales.'
                            />
                        </motion.div>





                    </div>
                    <div className="col-md-6 col-12 my-3">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardPerson nombre="Ricardo Palacio Velázquez" desripcion="Presidente Junta directiva Nacional"
                                imagen={presidente}
                                contenido='Ricardo Palacio es Administrador de Empresas Agropecuarias, aunque él se considera "orgullosamente montañero". Durante más de 35 años ha sido un productor panelero de Risaralda y desde 2012 forma parte de la Junta Directiva Nacional de Fedepanela en su calidad de Presidente del Comité Departamental de  Productores Paneleros de Risaralda. En 2016 fue elegido Presidente de dicha junta, cargo que continúa desempeñando hasta la fecha. Su espíritu emprendedor y amor a las labores del campo, pero especialmente  a la producción panelera,  lo ha llevado a convertirse en un importante líder gremial  y empresarial que apoya con su experiencia a los productores paneleros del país. ' />
                        </motion.div>


                    </div>

                </div>


            </div>



            <Footer />


        </Layout>
    )
}
export default EstructuraFede