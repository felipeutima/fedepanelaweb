
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import re2023 from "assets/docs/Reforma-Estatutaria-2023.pdf"
import re003 from "assets/docs/Resolucion-003-Reglamento-Elecciones-2023.pdf"
import { motion } from 'framer-motion';

function NormatividadFDF() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Normatividad-Fondo de Fomento</h1>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x:  0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="DECRETO 2025 DEL 6 DE NOVIEMBRE DE 1996 (PARA TODOS LOS FONDOS)"
                            cuerpo="Por el cual se reglamenta parcialmente el capítulo V de la ley 101 de 1993 (mecanismos de Control Interno). Decreta la obligatoriedad de la Auditoría y sus obligaciones y lineamientos de contratación de la misma (más…)"
                             doc={re2023} />
                        </motion.div>



                    </div>
                    <div className="col-md-4">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="DECRETO 3270 DEL 19 DE SEPTIEMBRE DE 2005" cuerpo="Por el cual se adiciona un parágrafo al artículo 4 y se modifica el artículo 5 del Decreto 1999 de 1991 (más…)"
                             doc={re003} />
                        </motion.div>
                        

                    </div>
                    <div className="col-md-4">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="DECRETO 719 DE 1995" cuerpo= "Por el cual se modifica el decreto1991 de 1991" doc={re003} />
                        </motion.div>
                        

                    </div>
                    <div className="col-md-4 mt-3">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="LEY 40 DE 1990"
                             cuerpo= "Por la cual se dictan normas para la protección y el desarrollo de la producción de la panela y se establece la cuota de fomento panelero. (más…)" 
                             doc={re003} />
                        </motion.div>
                        

                    </div>
                    <div className="col-md-4 mt-3">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="LEY 40 DE 1990"
                             cuerpo= "Por la cual se dictan normas para la protección y el desarrollo de la producción de la panela y se establece la cuota de fomento panelero. (más…)" 
                             doc={re003} />
                        </motion.div>
                        

                    </div>

                </div>


            </div>



            <Footer />


        </Layout>
    )
}
export default NormatividadFDF