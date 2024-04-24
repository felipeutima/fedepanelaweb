
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import VisibilitySensor from 'react-visibility-sensor';
import planestrategico from "assets/img/plan-estrategico3.jpg";
import CardAbout from "components/Nuestra Fede/CardAbout";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mision from "assets/img/mision.png"
import vision from "assets/img/vision.png"
import plan from "assets/img/plan.png"
import Accordion from 'react-bootstrap/Accordion';


const items = [
    { id: 1, title: 'Sostenibilidad Institucional', subtitle: 'Subtitle 1' },
    { id: 2, title: 'Sostenibilidad de la cadena', subtitle: 'Subtitle 2' },
    { id: 3, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
    { id: 4, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
    { id: 5, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
    { id: 6, title: 'Mercadeo y comunicaciones', subtitle: 'Subtitle 3' },
];
function PlanEstrategico() {



    const [selectedId, setSelectedId] = useState(null);


    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Plan Estratégico</h1>


                <div className="row ">
                    <div class="container px-5 mt-4 ">
                        <div class="row gx-5 align-items-center">
                            <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >

                                    <img className="img-fluid rounded mb-5 mb-lg-0" width="450px" src={planestrategico} alt="..." />

                                </motion.div>
                            </div>
                            <div class="col-lg-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >

                                    <p className="lead fw-normal text-muted mb-0">El Plan Estratégico se llama "Hacia la sostenibilidad y modernización gremial y sectorial" y está conformado por seis pilares fundamentales que soportan todas las actividades del gremio para los próximos años:</p>

                                </motion.div>



                                <ul className="mt-3">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.5" }}
                                    >
                                        <li className="lead fw-normal "> <p className="text-muted my-0"> Sostenibilidad de la cadena</p> </li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.6" }}
                                    >
                                        <li className="lead fw-normal "> <p className="text-muted my-0">Gestión del conocimiento </p> </li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.7" }}
                                    >
                                        <li className="lead fw-normal "> <p className="text-muted my-0">Sostenibilidad Institucional </p> </li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.8" }}
                                    >
                                        <li className="lead fw-normal "> <p className="text-muted my-0">Construcción de capital social </p> </li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.9" }}
                                    >
                                        <li className="lead fw-normal "> <p className="text-muted my-0"> Mercadeo y Comunicaciones</p> </li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "1" }}
                                    >
                                        <li className="lead fw-normal "> <p className="text-muted my-0">Gestión Ambiental </p> </li>
                                    </motion.div>
                                </ul>


                            </div>

                        </div>
                    </div>
                </div>


            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <div className="mx-auto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <CardAbout titulo="Misión"
                                cuerpo="Somos una organización gremial nacional comprometida con la investigación y el desarrollo
                            tecnológico, económico, social y ambiental del subsector panelero, que orienta políticas
                            públicas y gestiona recursos públicos y privados para contribuir al mejoramiento de la calidad
                            de vida de sus Federados.
                            "
                                imagen={mision}

                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mx-auto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>

                            <CardAbout titulo="Visión"
                                cuerpo="En el año 2022, seremos la organización que represente a la totalidad de los productores de la
                            caña panelera, posicionaremos los productos a nivel nacional e internacional y contribuiremos
                            a que el sector sea rentable, sostenible y competitivo."
                                imagen={vision}

                            />

                        </div>
                    </div>
                    <div className="col-md-2"></div>


                </div>


            </div>

            <div className="container-flex " style={{ backgroundImage: `url(${plan})`, marginBottom: "100px", backgroundAttachment: "fixed" }}>
                <h1 className="text-center text-white py-5">Plan Estrategico 2018 - 2022</h1>
            </div>
            <div className="container mb-4 px-5">

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header >
                            <h2 className="h2-title-header">1. Eje Sostenibilidad Institucional</h2>
                        </Accordion.Header>

                        <Accordion.Body>
                            <div className="container">

                                <h2 className="h2-title">Objetivo</h2>

                                <p className=" fw-normal text-muted ">Busca principalmente aumentar el sentido de pertenencia de los cedulados y dinamizar la participación de las bases gremiales. De igual manera robustecer financiera e institucionalmente a la Federación.</p>

                                <h2 className="h2-title">Fortalecimiento de la gestión y representación gremial</h2>

                                <ul>
                                    <li><p className="text-muted my-0">Aumento de ingresos por recaudo de cuota de fomento: implementación</p> </li>
                                    <li><p className="text-muted my-0">Ingresos por cuota de sostenimiento especial</p> </li>
                                    <li><p className="text-muted my-0">Ingresos por cedulación panelera y beneficios</p> </li>
                                    <li><p className="text-muted my-0">Ingresos por administración de convenios</p> </li>
                                    <li><p className="text-muted my-0">Ingresos por líneas de negocio</p> </li>
                                </ul>

                                <h2 className="h2-title">Metas 2018 – 2022</h2>

                                <ul>
                                    <li><p className="my-0 text-muted">Aumento de ingresos por recaudo de cuota de fomento: 15 % anual </p></li>
                                    <li><p className="my-0 text-muted">Aumento ingresos por Cuota de Sostenimiento Fedepanela: 100%</p></li>
                                    <li><p className="my-0 text-muted">Fortalecimiento de la Gestión y Representación Gremial</p> </li>
                                    <li><p className="my-0 text-muted">Estructuras gremiales sostenibles y empoderadas</p> </li>
                                </ul>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header >
                            <h2 className="h2-title-header">2. Sostenibilidad de la Cadena</h2>
                        </Accordion.Header>

                        <Accordion.Body>
                            <div className="container">

                                <h2 className="h2-title">Objetivo</h2>

                                <p className=" fw-normal text-muted ">Desarrollar y consolidar mercados de valor agregado que permitan la integración comercial de pequeños productores y organizaciones campesinas, donde se transfiera un pago justo por la actividad con criterios de productividad y calidad.</p>

                                <h2 className="h2-title">Fortalecimiento de la gestión y representación gremial</h2>

                                <ul>
                                    <li><p className="text-muted my-0">Desarrollo y consolidación de encadenamientos y alianzas entre productores y empresarios</p></li>
                                    <li><p className="text-muted my-0">Mejorar la calidad de la panela para abastecer la demanda de los consumidores</p></li>
                                    <li><p className="text-muted my-0">Implementación del sello de calidad tipo Fedepanela</p></li>
                                </ul>

                                <h2 className="h2-title">Metas 2018 – 2022</h2>

                                <ul>
                                    <li><p className="text-muted my-0">Toneladas de panela vinculadas a encadenamientos productivos: Meta de 67.900 Toneladas</p></li>
                                    <li><p className="text-muted my-0">Creación del sello tipo Federación: Meta de 25 marcas con sello</p></li>
                                </ul>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header >
                            <h2 className="h2-title-header">3. Mercadeo y Comunicaciones</h2>
                        </Accordion.Header>

                        <Accordion.Body>
                            <div className="container">

                                <h2 className="h2-title">Objetivo</h2>

                                <p className=" fw-normal text-muted ">Enlaza dos herramientas clave de las organizaciones modernas:</p>

                                <ul>
                                    <li><p className="text-muted my-0">Estudio del comportamiento del mercado panelero para trazar estrategias comerciales y de promoción al consumo</p></li>
                                    <li><p className="text-muted my-0">Comunicación como soporte de las estrategias de mercado y para fortalecer la imagen corporativa</p></li>
                                    <li><p className="text-muted my-0">Promoción al Consumo</p></li>
                                    <li><p className="text-muted my-0">Estrategias y servicios de mercado</p></li>
                                    <li><p className="text-muted my-0">Posicionamiento Imagen Corporativa</p></li>
                                    <li><p className="text-muted my-0">Comunicación Corporativa</p></li>
                                </ul>

                                <h2 className="h2-title">Metas 2018 – 2022</h2>

                                <ul>
                                    <li><p className="my-auto text-muted">Campañas nacionales de promoción al consumo: 5</p></li>
                                    <li><p className="my-auto text-muted">Eventos de impacto nacional: 16</p></li>
                                    <li><p className="my-auto text-muted">Ediciones periódico Fedepanela: 26</p></li>
                                    <li><p className="my-auto text-muted">Ediciones Revista Fedepanela: 17</p></li>
                                    <li><p className="my-auto text-muted">Oferta servicios mercado nacionales: 5</p></li>
                                    <li><p className="my-auto text-muted">Oferta servicios mercadeo internacionales: 3</p></li>
                                    <li><p className="my-auto text-muted">Creación Intranet Corporativa: 1 </p></li>
                                </ul>


                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header >
                            <h2 className="h2-title-header">4. Gestión del conocimiento</h2>
                        </Accordion.Header>

                        <Accordion.Body>
                            <div className="container">

                                <h2 className="h2-title">Objetivo</h2>

                                <p className="fw-normal text-muted ">La gestión del conocimiento es un concepto aplicado en las organizaciones modernas, consistente en poner al alcance de nuestros usuarios (Productores, instituciones, entre otros)</p>
                                <p className="fw-normal text-muted ">La información Global de interés para el subsector mediante el uso de sistemas de información.</p>


                                <h2 className="h2-title">Componentes</h2>
                                <ul>
                                    <li><p className="text-muted my-auto">Sistema de información panelera SIPA</p></li>
                                    <li><p className="text-muted my-auto">Vigilancia tecnológica</p></li>
                                    <li><p className="text-muted my-auto">Recopilación y consolidación de la información</p></li>

                                </ul>

                                <h2 className="h2-title">Metas 2018 – 2022</h2>

                                <ul>
                                    <li><p className="my-auto text-muted">Fortalecimiento del Sistema de Información Panelera Sipa: 1 </p></li>
                                    <li><p className="my-auto text-muted">Alianzas interinstitucionales para Gestión                                              5
                                        del Conocimiento y Vigilancia Tecnológica: 5</p></li>

                                </ul>


                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header >
                            <h2 className="h2-title-header">5. Construcción del Capital Social</h2>
                        </Accordion.Header>

                        <Accordion.Body>
                            <div className="container">

                                <h2 className="h2-title">Objetivo</h2>

                                <p className=" fw-normal text-muted ">Es la construcción de cooperación, confianza y reciprocidad para el logro de objetivos comunes entre los productores, las empresas asociativas, los empresarios paneleros y la federación que posibilite el mejoramiento de la calidad de vida de los productores del sector panelero</p>

                                <ul>
                                    <li><p className="my-0 text-muted">Construcción de Capital Social</p></li>
                                    <li><p className="my-0 text-muted">Relevo Generacional</p></li>
                                    <li><p className="my-0 text-muted">Ampliación de oportunidades para la generación de ingresos</p></li>

                                </ul>

                                <h2 className="h2-title">Metas 2018 – 2022</h2>

                                <ul>
                                    <li><p className="my-auto text-muted">Organizaciones con modelo de construcción de capital social
                                    : 110</p> </li>
                                    <li><p className="my-auto text-muted">Fortalecimiento agro empresarial de las organizaciones vinculadas a los encadenamientos: 20</p></li>
                                    <li><p className="my-auto text-muted">Fortalecer capacidades en mujeres y jóvenes a través de la conformación: Una de Mujeres, Una de jovenes</p></li>

                                </ul>


                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header >
                            <h2 className="h2-title-header">6. Gestión Ambiental</h2>
                        </Accordion.Header>

                        <Accordion.Body>
                            <div className="container">

                                <h2 className="h2-title">Objetivo</h2>

                                <p className=" fw-normal text-muted ">Enfocado en la disminución de efectos negativos al ambiente, el cumplimiento de la normatividad, y el aprovechamiento de las oportunidades de financiación y apoyo para la reconversión tecnológica.</p>

                                <ul>
                                    <li><p className="my-0 text-muted">Gestión de Proyectos Ambientales</p></li>
                                    <li><p className="my-0 text-muted">Vinculación de empresas y productores</p></li>
                                    <li><p className="my-0 text-muted">Implementación tecnología viable y eficiente</p></li>
                                    <li><p className="my-0 text-muted">Implementación de NAMA - PANELA</p></li>

                                </ul>

                                <h2 className="h2-title">Metas 2018 – 2022</h2>

                                <ul>
                                    <li><p className="my-0 text-muted">Actualización de la guía ambiental Panelera: 1    </p></li>
                                    <li><p className="my-0 text-muted">Gestión de proyectos ambientales: 5 Proyectos </p></li>
                                    <li><p className="my-0 text-muted">Fortalecer capacidades en mujeres y jóvenes a través de la conformación:Una de Mujeres, Una de jovenes</p> </li>
                                    <li><p className="my-0 text-muted">Línea verde de financiación: 1</p></li>
                                    <li><p className="my-0 text-muted">Implementación de NAMA –PANELA: 1</p></li>

                                </ul>


                            </div>
                        </Accordion.Body>
                    </Accordion.Item>



                </Accordion>
            </div>




            <Footer />


        </Layout>
    )
}
export default PlanEstrategico