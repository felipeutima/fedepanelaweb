
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/infocomunicaciones.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"
import Accordion from 'react-bootstrap/Accordion';

function ConstruccionCapital() {

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

    return (
        <Layout>

            <Navbar />

            <div className="" style={{ marginTop: "50px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title my-5">Construcción de Capital Social</h1>

                <div className="container px-5">

                    <p className="lead fw-normal text-muted">La construcción de capital se realizará a través del fortalecimiento socio – empresarial, incentivando el relevo generacional, el empoderamiento y participación de las mujeres y la promoción de la seguridad social y la salud laboral de los operarios y trabajadores que realizan labores, tanto en el cultivo de la caña como en el proceso de producción de la panela. A través de estas estrategias se contribuirá con el mejoramiento de la calidad de vida de los productores del subsector..</p>


                    <motion.div
                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                        transition={{ duration: 0.9, ease: "easeOut" }}
                    >
                        <Accordion>



                            <Accordion.Item eventKey="1">

                                <Accordion.Header> <h2 className="h2-title-header">Fortalecimiento Socio-Empresarial de las agro empresas:</h2></Accordion.Header>

                                <Accordion.Body>

                                    <div className="container">
                                        Dentro de este proceso, el aspecto socio-empresarial se orienta a promover el fortalecimiento de la empresa asociativa; desde la construcción participativa de un plan de trabajo organizacional, un plan de negocios, la definición de la estructura organizativa y el desarrollo de habilidades personales de directivas y asociados/as en la organización y del equipo de gestión en la empresa, entre otros aspectos. Esta consolidación interna contribuye en estas organizaciones a tener una adecuada proyección externa, es decir insertarse con mejores herramientas en el entorno y en el mercado.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header> <h2 className="h2-title-header">Información Generacional</h2></Accordion.Header>

                                <Accordion.Body>


                                    <div className="container">
                                        La integración generacional se puntúa como factor crítico en el mundo rural, dado que no es seguro que las nuevas generaciones sucedan a sus padres y madres en la labor agrícola y particularmente en la producción panelera, con importantes repercusiones para el desarrollo de estos espacios, el desaprovechamiento de los mayores niveles educativos de esta generación y su mayor inclinación a la innovación y relación con las tecnologías Parte ello desde Dirección de Área Socio - Empresarial se realizarán las siguientes acciones:                                        </div>


                                    <ul>

                                        <li>Construir una visión de futuro del negocio panelero para los jóvenes, Promoviendo los proyectos sociales y emprendimientos productivos a través de las redes de emprendedores paneleros.</li>

                                        <li>Generar espacios de participación en el gremio en sus diferentes instancias, visibilizando los nuevos liderazgos y promoviendo su ciudadanía activa en las regiones del País Panelero, en los diferentes escenarios de participación que tienen los jóvenes.</li>

                                        <li>Acercar la oferta institucional existente, para que nuestros jóvenes puedan acceder a recursos de educación, capacitación, emprendimiento y financiación.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header> <h2 className="h2-title-header">Empoderamiento y Participación de la mujer rural:</h2></Accordion.Header>

                                <Accordion.Body>


                                    <div className="container">
                                        Las sociedades que se caracterizan por reducir las oportunidades a las que pueden acceder los individuos por el simple hecho de poseer una característica particular, racial o de género, afectan su senda de crecimiento económico. La igualdad social de las mujeres debe construirse en sinergia con la capacidad de actuar de cada persona, por esto surge el concepto del empoderamiento como la capacidad de las mujeres para seguir su proyecto de vida debido a sus capacidades y talentos. Con mayores niveles de igualdad social las mujeres pueden alcanzar los insumos básicos para progresar en la vida, estos impulsarán un círculo virtuoso donde la seguridad económica conlleva un aumento en la inversión de las mujeres en capital humano, social y físico, incrementando su desarrollo económico. Para contribuir en el empoderamiento y participación de la mujer la Dirección de Área Socio Empresarial desarrollará las siguientes acciones:

                                    </div>
                                    <ul>

                                        <li>Impulsar la participación de las mujeres productoras paneleras en escenarios gremiales, a través de la reforma de estatutos realizada.</li>

                                        <li>Visibilizar las capacidades de liderazgo, desarrollo económico y social que tienen las mujeres a través de la estrategia de Red de Mujeres Emprendedoras Paneleras.</li>

                                        <li>Facilitar el acceso a información, especialmente para conocer la oferta de programas, de servicios estatales y espacios de participación a los cuales pueden acceder las mujeres.</li>
                                    
                                    <li>Gestionar proyectos que fortalezcan procesos de emprendimiento en las mujeres para que desarrollen autonomía económica.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </motion.div>

                </div>





            </div >





            <Footer />


        </Layout >
    )
}
export default ConstruccionCapital