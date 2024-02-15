
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/Fedepanela-quienes-somos.jpg"
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';

function Nfqs() {

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

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

                                    <h2 class="fw-bolder h2-title">LA FEDERACION NACIONAL DE PRODUCTORES DE PANELA "FEDEPANELA"</h2>
                                    <p class="lead fw-normal text-muted mb-0">Es una entidad gremial sin ánimo de lucro, que representa a los productores paneleros de todo el país.  <br />Tiene como objetivo principal propender por el mejoramiento del nivel de vida de todos los productores que laboran en el subsector panelero, para hacer competitiva y rentable esta actividad, defender los intereses colectivos y el ingreso remunerativo de sus afiliados, así como contribuir al desarrollo tecnológico, social, comercial y ambiental del sector rural nacional.</p>

                                </motion.div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-5 " >
                    <section class="page-section" id="about">
                        <div class="container mt-5">
                            <div class="text-center">
                                <h3 class="section-subheading text-muted mb-5">Nuestra Historia</h3>
                            </div>
                            <ul class="timeline">
                                <li>
                                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                                    <div class="timeline-panel">
                                        <VisibilitySensor onChange={handleVisibilityChange} partialVisibility>
                                            <motion.div
                                                initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                                animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                                transition={{ duration: 0.9, ease: "easeOut" }}
                                            >
                                                <div class="timeline-heading">
                                                    <h4>1939-1977</h4>
                                                    <h4 class="subheading">Desarrollo regional con énfasis en organizaciones cooperativas</h4>
                                                </div>
                                                <div class="timeline-body"><p class="text-muted">Época caracterizada por desarrollos autónomos en algunos departamentos en torno al sistema cooperativo, con enfoque hacia la provisión de insumos y mercadeo del producto, motivados por la situación caótica que atravesaban los paneleros de la época, suscitada por variaciones de precios fijados por intermediarios mayoristas que denominaban el mercado.

                                                    En 1976 comienza a funcionar la Federación Nacional de Paneleros (FENALPA), una de cuyas funciones fue divulgar entre sus afiliados la información para el mejoramiento de la industria panelera.

                                                    Se destaca de esta época la iniciativa para crear el Fondo Nacional del Azúcar y la Panela, como un foro de concertación y un mecanismo de estabilización de precios.</p></div>
                                            </motion.div>
                                        </VisibilitySensor>

                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>1978-1986</h4>
                                            <h4 class="subheading">Desarrollo Organizacional Nacional</h4>
                                        </div>
                                        <div class="timeline-body"><p class="text-muted">Uno de los antecedentes más importantes para la conformación de un gremio nacional reprtesentantivo, fue la realización en 1978 del Primer Foro Nacional de Productores de Panela en Bucaramanga, con la participación de 13 departamentos y más de 500 delegados, en plena crisis de precios y una sobreproducción sin precedentes. Allí se creó la Asociación Nacional de Productores de Panela, ASOPANELA, y se nombró su Junta Directiva con representación de todas las regiones paneleras del país. Se destaca en esta época la alianza con Asocaña, en cuya Junta Directiva tuvo asiento un miembro del gremio panelero y representividad en el Centro de Investigación de la Caña, Cenicaña.

                                            En 1979 se realizó el Segundo Nacional de Productores de Panela de Medellín, donde se resaltó la necesidad de soluciones a la crisis del sector panelero y se reclamó un tratamiento de importancia dentro del contexto económico colombiano. En esta época se incentivó la creación de asociaciones departamentales de ASOPANELA en Antioquia, Tolima, Huila, Nariño y Valle,a lgunas de las cuales aún subsisten.</p></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>December 2015</h4>
                                            <h4 class="subheading">Transition to Full Service</h4>
                                        </div>
                                        <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>July 2020</h4>
                                            <h4 class="subheading">Phase Two Expansion</h4>
                                        </div>
                                        <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image">
                                        <h4>
                                            Be Part
                                            <br />
                                            Of Our
                                            <br />
                                            Story!
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>


                </div>
            </div>





            <Footer />


        </Layout>
    )
}
export default Nfqs