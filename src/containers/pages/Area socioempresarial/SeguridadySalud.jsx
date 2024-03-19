
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/infocomunicaciones.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"
import React from 'react'
import ReactPlayer from 'react-player'
import CardDownload from "components/Nuestra Fede/CardDownload"
import bioseguridad from "assets/docs/area socioempresarial/CARTILLA-Salud_Laboral_compressed3.pdf"
import DEC948 from "assets/docs/area socioempresarial/DECRETO-1174-DEL-27-DE-AGOSTO-DE-2020.pdf"


function createData(titulo, cuerpo, documento) {
    return { titulo, cuerpo, documento };
}

const rows = [
    createData('Cartilla Salud Laboral', "", bioseguridad),
    createData('Decreto 1174 del 27 de Agosto de 2020', "", DEC948),

];


function SeguridadySalud() {

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

            <h1 className="text-center h1-title my-5">Seguridad y Salud en el Trabajo</h1>

                <div className="container px-5">

                    <p className="lead fw-normal text-muted">La Seguridad Social de manera articulada con diferentes gremios e instituciones se ha participado en la construcción y aplicación de herramientas de política pública frente a los temas normativos vigentes aplicables al subsector panelero en pro de la formalización y dignificación de labor agropecuaria de cara al escaso cumplimiento de la misma en el subsector panelero, así mismo se han definido parámetros para la formalidad laboral y se ha planteado una estrategia piloto de formalización laboral compuesta por fases.</p>
                    <p className="lead fw-normal text-muted">La Salud Laboral Rural, se encuentra alineada con la estrategia de salud pública decenal y su dimensión salud y ámbito laboral, se basa en la promoción de entornos laborales saludables y seguros y la promoción de estilos de vida y entornos seguros saludables de trabajo, consolida bases informativas y estadísticas de la situación actual y la participación del subsector panelero en el sistema general de seguridad social y protección social, de este modo permanentemente permite conocer el avance del subsector en este componente y permite sentar las bases para el desarrollo de proyectos que promueven adelantar acciones de intervención que a su vez contribuyen con el cumplimiento de la resolución 779 de 2006 en lo referente a este tema. </p>
                    <p className="lead fw-normal text-muted">El Sistema de la Seguridad y Salud en el Trabajo SG-SST- Gremial se ha abordado de manera articulada con diferentes gremios e instituciones participando en la construcción y aplicación de herramientas de política pública, como resultado de la gestión y participación se encuentra vigente la Resolución 0312 de 2019, "la cual define los estándares mínimos del Sistema de Gestión de Seguridad y Salud en el Trabajo SG-SST", anteriormente Resolución 1111 de 2017 que flexibilizo, redujo costos, dinamizó y amplió los plazos tanto en la implementación como en las visitas de inspección por parte del Ministerio de Trabajo. Para lo cual, con el fin de acercar el correcto entendimiento de la Resolución 0312 de 2019, que aplica para todas las empresas del país incluidas las del sector panelero se construyó como material de apoyo y consulta el ABC de la Resolución 0312 de 2019 para empresas paneleras que permite el fácil entendimiento de la norma aplicada al sector panelero.</p>


                </div>

                <div className="container px-5">

                    <div className="row">

                        <div className="col-md-6"><ReactPlayer url='https://www.youtube.com/watch?v=8ijJvd4h750' width={"100%"}                         />
                        
                        <p className="lead fw-normal text-muted my-3">Buenaventura León León, Miembro de la Cámara de Representantes de Colombia, en el marco de la legislatura actual, le propondrá al Congreso de la República de Colombia un proyecto de ley para beneficiar al gremio panelero de todo el país.</p>
                        </div>
                        <div className="col-md-6"><ReactPlayer url='https://www.youtube.com/watch?v=sQrrMIaezOw' width={"100%"} />
                        
                        <p className="lead fw-normal text-muted my-3">Fedepanela y sus líderes gremiales cuentan con un plan estratégico proyectado a 6 años para impulsar la sostenibilidad y modernización del subsector panelero.</p>
                        
                        </div>
                    </div>
                </div>
                <h2 className="text-center h2-title my-5">Normatividad y Documentos</h2>

                <div className="row">

                {rows.map((row) => (
                        <div className="col-md-4">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                transition={{ duration: 0.9, ease: "easeOut" }}
                            >
                                <CardDownload titulo={row.titulo} doc={row.documento} cuerpo={row.cuerpo} />
                            </motion.div>
                        </div>
                    ))}
</div>


       


            </div >





            <Footer />


        </Layout >
    )
}
export default SeguridadySalud