
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import VisibilitySensor from 'react-visibility-sensor';
import planestrategico from "assets/img/plan-estrategico3.jpg";
import CardAbout from "components/Nuestra Fede/CardAbout";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


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
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >

                                    <img className="img-fluid rounded mb-5 mb-lg-0" width="450px" src={planestrategico} alt="..." />

                                </motion.div>
                            </div>
                            <div class="col-lg-6">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >

                                    <p className="lead fw-normal text-muted mb-0">El Plan Estratégico se llama "Hacia la sostenibilidad y modernización gremial y sectorial" y está conformado por seis pilares fundamentales que soportan todas las actividades del gremio para los próximos años</p>

                                </motion.div>



                                <ul className="mt-3">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.5" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Sostenibilidad de la cadena</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.6" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Gestión del conocimiento</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.7" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Sostenibilidad Institucional</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.8" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Construcción de capital social</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "0.9" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Mercadeo y Comunicaciones</li>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut", delay: "1" }}
                                    >
                                        <li className="lead fw-normal text-muted mb-0">Gestión Ambiental</li>
                                    </motion.div>
                                </ul>


                            </div>

                        </div>
                    </div>
                </div>


            </div>

            <div className="container-flex" style={{ backgroundColor: "#FFAE12" }}>
                <div className="container py-5" >
                    <h2 className="h2-title">PLAN
                        ESTRÁTEGICO
                        2018 - 2022</h2>
                    <p>
                        Fedepanela ha diseñado y puesto en marcha el Plan Estratégico para el Desarrollo del Subsector Panelero 2018 – 2022, con el objetivo de lograr el mejoramiento y la eficiencia de las agroindustrias paneleras del país.
                    </p>
                    <p>El Plan Estratégico contempla el desarrollo de los siguientes programas.</p>
                    <div className="row">
                        {items.map(item => (
                            <div className="col-md-4 mb-3" key={item.id}>
                                <motion.div
                                    layoutId={item.id}
                                    onClick={() => setSelectedId(item.id)}
                                    style={{
                                        cursor: 'pointer',
                                        border: '1px solid #ddd',
                                        borderRadius: '10px', // Bordes redondeados
                                        padding: '10px',
                                        backgroundColor: '#fff',
                                      }}
                                    

                                >

                                    <motion.h2>{item.title}</motion.h2>
                                    <motion.h5>{item.subtitle}</motion.h5>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {selectedId && (
                            <motion.div
                                layoutId={selectedId}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="position-fixed top-50 start-50 translate-middle"
                                style={{ zIndex: 1000, backgroundColor: 'white', padding: '20px',borderRadius: '10px' }}
                            >
                                <motion.h5>{items.find(item => item.id === selectedId).subtitle}</motion.h5>
                                <motion.h2>{items.find(item => item.id === selectedId).title}</motion.h2>
                                <motion.button onClick={() => setSelectedId(null)}>Cerrar</motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>


            <Footer />


        </Layout>
    )
}
export default PlanEstrategico