
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import quienessomos from "assets/img/fedepanela-comercial-internacionalizacion.png"
import { motion } from 'framer-motion';
import { useState } from 'react';

import CardDownload from "components/Nuestra Fede/CardDownload"
import formato from "assets/docs/Area Tecnica/MANEJO-AGRONOMICO-DE-LA-CANA-DE-AZUCAR-PARA-PANELA.pdf"


function BibliografiaTecnica() {

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
                    <h1 className="text-center h1-title mt-5">Bibliografía Técnica</h1>


          
                </div>


                <div className="row  " >


                    <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                        <div className="row mt-5">
                            <div className="col-md-3 col-12 my-2 mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo="Manejo Agronómico de la caña de azúcar para panela con enfásis en fertilización"
                                        doc={formato} />
                                </motion.div>



                            </div>
                
        


                        </div>


                    </div>



                </div>


            </div >





            <Footer />


        </Layout >
    )
}
export default BibliografiaTecnica