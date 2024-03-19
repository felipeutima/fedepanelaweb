
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/lavidasabe.png"
import info from "assets/img/InfografIa1fede.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"


function PromocionConsumo() {

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

    return (
        <Layout>

            <Navbar />

            <div className="" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <div className="container">
                    <h1 className="text-center h1-title mt-5">Promoción al consumo</h1>


                    <div className="row ">
                        <div class="container px-5 mt-4 ">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-first order-lg-last d-flex justify-content-center align-items-center">
                                    <motion.div
                                        initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <img className="img-fluid rounded mb-5 mb-lg-0" width="100%" src={quienessomos} alt="..." />

                                    </motion.div>
                                </div>
                                <div class="col-lg-6">
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                        animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                        transition={{ duration: 0.9, ease: "easeOut" }}
                                    >

                                        <p class="lead fw-normal text-muted mb-2"> El Programa de Promoción al Consumo de productos paneleros del Fondo de Fomento Panelero tiene un objetivo claro: destacar y posicionar nuestros productos entre los consumidores, resaltando sus beneficios, la diversidad y facilidad de uso que ofrecen las presentaciones no tradicionales. Todo esto como un sólido apoyo a los productores paneleros y sus organizaciones en todo el país. Para lograrlo, llevamos a cabo una serie de emocionantes actividades que incluyen:
                                        </p>

                                    </motion.div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

               <div className="container mx-5">

               <img className="img-fluid rounded mb-5 mb-lg-0" width="100%" src={info} alt="..." />


                
           
               </div>

       


            </div >





            <Footer />


        </Layout >
    )
}
export default PromocionConsumo