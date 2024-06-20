
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import { motion } from 'framer-motion';
import DEC948 from "assets/docs/ambiental/DECRETO_948_DE_1995.pdf"
import DEC1594 from "assets/docs/ambiental/DECRETO_1594_DE_1984.pdf"

import agua1 from "assets/docs/ambiental/agua1.pdf"
import agua2 from "assets/docs/ambiental/agua2.pdf"
import agua3 from "assets/docs/ambiental/agua3.pdf"

import suelo1 from "assets/docs/ambiental/suelo1.pdf"
import suelo2 from "assets/docs/ambiental/suelo2.pdf"

import aire1 from "assets/docs/ambiental/aire1.pdf"
import aire2 from "assets/docs/ambiental/aire2.pdf"
import aire3 from "assets/docs/ambiental/aire3.pdf"
import aire4 from "assets/docs/ambiental/aire4.pdf"
import aire5 from "assets/docs/ambiental/aire5.pdf"
import aire6 from "assets/docs/ambiental/aire6.pdf"

import cambio1 from "assets/docs/ambiental/cambio1.pdf"
import cambio2 from "assets/docs/ambiental/cambio2.pdf"
import cambio3 from "assets/docs/ambiental/cambio3.pdf"




function createData(titulo, cuerpo, documento) {
    return { titulo, cuerpo, documento };
}

const rows = [
    createData('Decreto 1594 de 1984', "Por el cual se establece el reglamento técnico sUsos del agua y residuos líquidos. (más…)", DEC1594),
    createData('Decreto 948 de 1995', "Prevención y control de la contaminación atmosférica y la protección de la calidad del aire. (más…)", DEC948),

];
const agua = [
    createData('Decreto 1076 de 2015', "", agua1),
    createData('Decreto 3930 de 2010', "", agua2),
    createData('Resolución 0631 de 2015', "", agua3),

];
const suelo = [
    createData('Decreto 050 de 2018', "", suelo1),
    createData('Decreto 2667 de 2012', "", suelo2),

];
const aire = [
    createData('Decreto 948 de 1995', "", aire1),
    createData('Resolución 909 de 2008', "", aire2),
    createData('Resolución 760 de 2010', "", aire3),
    createData('Resolución 2153 de 2010', "", aire4),
    createData('Resolución 619 de 1197', "", aire5),
    createData('Decreto 3695 de 2008', "", aire6),

];
const adaptacion = [
    createData('Conpes 3934 de 2018', "", cambio1),
    createData('Ley 2173 de 2021', "", cambio2),
    createData('Resolución 509 de 2018', "", cambio3),
   

];

function Ambiental() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Normatividad Ambiental</h1>
                <div className="row mt-5 px-5">
                  

                    {rows.map((row) => (
                        <div className="col-md-4 my-3">
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
                <h2 className="text-center h1-title mt-5">Recurso Agua</h2>
                <div className="row mt-5 px-5">
                  

                    {agua.map((row) => (
                        <div className="col-md-4 my-3">
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
                <h2 className="text-center h1-title mt-5">Recurso Suelo</h2>
                <div className="row mt-5 px-5">
                  

                    {suelo.map((row) => (
                        <div className="col-md-4 my-3">
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
                <h2 className="text-center h1-title mt-5">Recurso Aire</h2>
                <div className="row mt-5 px-5">
                  

                    {aire.map((row) => (
                        <div className="col-md-4 my-3">
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
                <h2 className="text-center h1-title mt-5">Adaptación</h2>
                <div className="row mt-5 px-5">
                  

                    {adaptacion.map((row) => (
                        <div className="col-md-4 my-3">
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


            </div>



            <Footer />


        </Layout>
    )
}
export default Ambiental