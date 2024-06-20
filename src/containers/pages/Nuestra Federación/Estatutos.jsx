
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import re2023 from "assets/docs/Reforma-Estatutaria-2023.pdf"
import re003 from "assets/docs/Resolucion-003-Reglamento-Elecciones-2023.pdf"
import estatuto1 from "assets/docs/estatuto1.pdf"
import estatuto2 from "assets/docs/estatuto2.pdf"
import estatuto3 from "assets/docs/estatuto3.pdf"
import estatuto4 from "assets/docs/estatuto4.pdf"
import estatuto5 from "assets/docs/estatuto5.pdf"
import estatuto6 from "assets/docs/estatuto6.pdf"
import { motion } from 'framer-motion';

function Estatutos() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Estatutos</h1>
                <div className="row mt-5">
                    <div className="col-md-4 col-12 my-2">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="Reforma Estatutaria 2023" doc={re2023} />
                        </motion.div>



                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="Resolución 003 Reglamento Elecciones 2023" doc={re003} />
                        </motion.div>
                        

                    </div>



                    <div className="col-md-4 col-12 my-2">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="Estatutos de Fedepanela" doc={estatuto1} />
                        </motion.div>
                        

                    </div>

                    <div className="col-md-4 col-12 my-2">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="Ley 40 de 1990" doc={estatuto2} />
                        </motion.div>
                        

                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="Decreto 1071 de 2015" doc={estatuto3} />
                        </motion.div>
                        

                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="Ley 2005 de 2019" doc={estatuto4} />
                        </motion.div>
                        

                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="Ley 2227 de 2022" doc={estatuto5} />
                        </motion.div>
                        

                    </div>
                    <div className="col-md-4 col-12 my-2">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="Resolución 0247 de 2021 del Ministerio de Agricultura y Desarrollo Rural" doc={estatuto6} />
                        </motion.div>
                        

                    </div>

                </div>


            </div>



            <Footer />


        </Layout>
    )
}
export default Estatutos