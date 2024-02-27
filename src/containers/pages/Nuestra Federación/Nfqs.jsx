
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/somos.png"
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import ns1 from "assets/img/ns1.png"
import ns2 from "assets/img/ns2.png"
import ns3 from "assets/img/ns3.png"
import ns4 from "assets/img/ns4.png"
import ns5 from "assets/img/ns5.png"


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
                                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={ns1} alt="..." /></div>
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
                                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={ns2} alt="..." /></div>
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
                                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={ns3} alt="..." /></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>1987-2008</h4>
                                            <h4 class="subheading">Consolidación gremial y desarrollo normativo </h4>
                                        </div>
                                        <div class="timeline-body"><p class="text-muted">Se retoma el modelo de ente nacional, se realizan avances en el campo legislativo y se definen los mecanismos que garanticen mayor estabilidad y proyección de largo plazo del gremio, hata la creación oficial de FEDEPANELA en el Quinto Congreso Panelero, el 4 de noviembre de 1988 en Villeta Cundinamarca. De esta época se destaca el movimiento que adelantaron los paneleros del Valle del Cauca por la reivindicación del sector amenazado por la producción de panela con azúcar, hasta lograr un pacto con el gremio azucarero donde se prohibió esta práctica.

Otro hecho a destacar es la aprobación en el Congreso de la Ley 40 de 1990, mediante la cual se brindó protección y desarrollo a la industria se creó el Fondo de Fomento Panelero y se estableció la cuota de fomento que permite desarrollar actividades de investigación y extensión relacionadas con cultivo, proceso, empaque y comercialización; promoción al subsector panelero en convenio con el Ministerio de Agricultura y Desarrollo Rural, como estrategia de apoyo técnico a todos los componentes de la cadena productiva de la panela.</p></div>
                                    </div>
                                </li>
                                <li class="timeline-inverted">
                                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={ns4} alt="..." /></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>2009-2016</h4>
                                            <h4 class="subheading">Hacia la Competitividad con sentido social</h4>
                                        </div>
                                        <div class="timeline-body"><p class="text-muted">Un paso más en la consolidación, reconocimiento y representatividad del gremio panelero y como respuesta a las necesidades de los productores, la Gerencia General y la Junta Directiva de FEDEPANELA pusieron en marcha el Plan Estratégico para el Desarrollo del Subsector Panelero 2009-2016, con el objetivo de lograr el mejoramiento y la eficiencia de la agroindustria panelera del país y contribuir al mejoramiento de la calidad de vida de todas las personas a esta actividad.

                                            El Plan Estratégico contempló programas y actividades para la reconversión tecnológica (mejoramiento de la infraestructura panelera), promoción al consumo nacional e internacional; apoyo a la asistencia técnica gremial; diversificación de proyectos productivos en zonas paneleras; apoyo a la comercialización en mercados nacionales e internacionales, entre los mas destacados. El reto fue lograr Competitividad en Sentido Social, con productos de calidad y nuevas presentaciones que respondieran a los requerimientos y exigencias de los mercados nacionales e internacionales, que tradujeron en beneficios efectivos para los productores paneleros y sus familias.</p></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={ns5} alt="..." /></div>
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4>2017-Actualidad</h4>
                                            <h4 class="subheading">Hacia la sostenibilidad y modernización gremial y sectorial</h4>
                                        </div>
                                        <div class="timeline-body"><p class="text-muted">Época caracterizada por desarrollos autónomos en algunos departamentos en torno al sistema cooperativo, con enfoque hacia la provisión de insumos y mercadeo del producto, motivados por la situación caótica que atravesaban los paneleros de la época, suscitada por variaciones de precios fijados por intermediarios mayoristas que dominaban el mercado.

                                            En 1976 comienza la funcionar la Federación Nacional de Paneleros (FENALPA), una de cuyas funciones fue divulgar entre sus afiliados la información para el mejoramiento de la industria panelera.

                                            Se destaca de esta época la inicitiva para crear el Fondo Nacional del Azúcar y la Panela, como un foro de concertación y mecanismo de estabilización de precios.</p></div>
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