
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/estructuraOrganica.png"
import fomento from "assets/img/fomento.jpg"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Shield } from "react-bootstrap-icons"
import img1 from "assets/img/Img1.png"
import entidades from "assets/img/entidades.jpg"
import CardDownload from "components/Nuestra Fede/CardDownload"
import manual from "assets/docs/Estructura organica/manual de procedimiento 2018.pdf"
import funciones from "assets/docs/Estructura organica/Manual-de-Funciones.pdf"
import procesos from "assets/docs/Estructura organica/procesos y procedimientos.pdf"
import plan from "assets/img/plan.png"
import { Button } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal';

function EstructuraOrganica() {

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

    const [show, setShow] = useState(false);
    const handleClose1 = () => setShow(false);



    const [lgShow, setLgShow] = useState(false);
    const handleClose = () => setLgShow(false);


    return (
        <Layout>

            <Navbar />

            <div className="" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <div className="container">
                    <h1 className="text-center h1-title mt-5">Estructura Orgánica- Fondo de Fomento</h1>


                    <div className="row ">
                        <div class="container px-5 mt-4 ">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <Button onClick={() => setLgShow(true)} className="mx-auto" variant="success">Ver Estructura Organizacional</Button>{' '}

                                        <Modal size="lg"
                                            show={lgShow}
                                            onHide={() => setLgShow(false)}
                                            aria-labelledby="example-modal-sizes-title-lg" onHide={handleClose} dialogClassName="modal-estructura">
                                            <Modal.Header closeButton>
                                                <Modal.Title>Estructura Organizacional FFP</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body> <img style={{ width: "100%" }} src={quienessomos} alt="estructura" /> </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="success" onClick={handleClose}>
                                                    Cerrar
                                                </Button>

                                            </Modal.Footer>
                                        </Modal>

                                    </motion.div>
                                </div>
                                <div class="col-lg-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <h2 class="fw-bolder h2-title">Fondo de Fomento PANELERO (FFP)</h2>
                                        <p class="lead fw-normal text-muted mb-0"> La estructura organizativa funcional del Fondo de Fomento Panelero (FFP) Muestra la jerarquía y los roles dentro de la organización, desde la Junta Directiva hasta los Asistentes Administrativos, proporcionando información sobre su funcionamiento interno.</p>

                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  " >


                    <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                        <div className="row  " >
                            <h1 className="text-center h1-title mb-5">Funciones y deberes-Fondo de Fomento</h1>
                            <div className="container">

                                <section class="py-2" id="features">
                                    <div class="container px-5 ">
                                        <div className="row">
                                            <div className="col mb-md-0 h-100">
                                                <p className="text-muted">Mediante la Ley 40 de 1990 se creó la Cuota de Fomento Panelero cuyo producto se lleva a una cuenta especial bajo el nombre de Fondo de Fomento Panelero, destino exclusivo al cumplimiento de los objetivos de la Ley 40, el cual es principalmente invertir estos dineros en el sector panelero.</p>
                                                <p className="text-muted">De acuerdo con lo dispuesto en la Ley40 de1990 los recursos del Fondo de Fomento Panelero se destinarán exclusivamente a los siguientes fines:</p>

                                                <ol>
                                                    <li>
                                                        <p className="text-muted">Actividades de investigación y extensión vinculadas con:</p>
                                                        <ul >
                                                            <li ><p className="text-muted">Producción de semillas mejoradas de caña panelera.</p></li>
                                                            <li ><p className="text-muted"> Técnicas de cultivo, recolección y procesamiento de la caña panelera; utilización energéticos alternativos en la producción de la panela; técnicas de conservación, empaque y comercialización de la panela y otros productos de los trapiches; programas de diversificación de la producción y conservación de las cuencas hidrográficas y del entorno ambiental en las zonas de producción panelera.</p></li>

                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <p className="text-muted">La promoción del consumo de panela dentro y fuera del país.</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-muted">Campañas educativas sobre las características nutricionales de la panela.</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-muted">Actividades de comercialización de la panela dentro y fuera del país.</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-muted">Programas de diversificación de la producción de las unidades paneleras.</p>
                                                    </li>
                                                    <li>
                                                        <p className="text-muted">Programa de conservación de las cuencas hidrográficas y el entorno ambiental de las zonas paneleras.</p>
                                                    </li>
                                                </ol>
                                            </div>
                                            <a href={funciones} target="blank" className="text-success">Ver Manual de Funciones y deberes</a>
                                        </div>





                                    </div>
                                </section>
                            </div>


                        </div>


                    </div>



                </div>

                <div className="row  " >

                    <div className="container-flex " style={{ backgroundImage: `url(${plan})`, marginBottom: "100px", backgroundAttachment: "fixed" }}>
                        <h1 className="text-center text-white py-5">Manual de procedimientos</h1>
                    </div>
                    <div className="container" >


                        <div className="row mt-2">
                            <div className="col-md-2" />
                            <div className="col-md-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="Manual de Procedimientos"

                                        doc={manual} />
                                </motion.div>



                            </div>
                            <div className="col-md-4">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="Procesos y procedimientos para la toma de desiciones"
                                        doc={procesos} />
                                </motion.div>


                            </div>
                            <div className="col-md-2" />


                        </div>


                    </div>



                </div>


                <div className="container-flex mt-5 " style={{ backgroundImage: `url(${img1})`, marginBottom: "100px", backgroundAttachment: "fixed" }}>
                    <h1 className="text-center text-white py-5">Entidades de Control</h1>
                </div>

                <div className="container">
                    <section class="py-2" id="features">
                        <div class="container px-5 ">
                            <div className="row">
                                <div className="col mb-md-0 h-100">
                                    <p className="text-muted">Mediante la Ley 40 de 1990 se creó la Cuota de Fomento Panelero cuyo producto se lleva a una cuenta especial bajo el nombre de Fondo de Fomento Panelero, destino exclusivo al cumplimiento de los objetivos de la Ley 40, el cual es principalmente invertir estos dineros en el sector panelero.</p>
                                    <p className="text-muted">De acuerdo con lo dispuesto en la Ley40 de1990 los recursos del Fondo de Fomento Panelero se destinarán exclusivamente a los siguientes fines:</p>

                                    <ol>
                                        <li>
                                            <p className="text-muted">El Fondo de Fomento Panelero tiene una Junta Directiva conformada por 4 representantes del Ministerio de Agricultura y Desarrollo Rural y 3 representantes del Sub Sector Paneelro, la cual se reúne trimestralmente con el fin de revisar y aprobar las inversiones y ejecución del presupuesto del periodo.</p>
                                          
                                        </li>
                                        <li>
                                            <p className="text-muted">La Junta del Fondo de Fomento Panelero nombra a una firma auditora externa con el fin de que le realice Auditoría permanente al Fondo de Fomento Panelero y rinda sus informes en las reuniones de Junta Directivas trimestrales o en los periodos que se solicite.</p>
                                        </li>
                                        <li>
                                            <p className="text-muted">El Ministerio de Agricultura y Desarrollo Rural efectúa revisión periódica a los programas del Fondo, procedimientos administrativos, procedimiento de recaudo y Estados Financieros.</p>
                                        </li>
                                        <li>
                                            <p className="text-muted">La Contraloría General de la República vigila al Fondo de Fomento Panelero, estados financieros, inversiones y administración de la Cuota de Fomento Panelero. Se le envía informes trimestrales.</p>
                                        </li>
                                        <li>
                                            <p className="text-muted">Así mismo, se envían informes de los Estados Financieros a la Contaduría Nacional General de la Nación.</p>
                                        </li>
                                 
                                    </ol>
                                </div>
                            </div>





                        </div>
                    </section>
                </div>
            </div >





            <Footer />


        </Layout >
    )
}
export default EstructuraOrganica