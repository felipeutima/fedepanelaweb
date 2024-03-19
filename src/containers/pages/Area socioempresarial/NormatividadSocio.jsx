
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
import doc1 from "assets/docs/area socioempresarial/CONPES_173_2014.pdf"
import doc2 from "assets/docs/area socioempresarial/Ley_375_1997.pdf"
import doc3 from "assets/docs/area socioempresarial/Ley_731_de_2002-Ley-de-Mujer-Rural.pdf"
import doc4 from "assets/docs/area socioempresarial/ley_905_de_2004.pdf"
import doc5 from "assets/docs/area socioempresarial/Ley_1014_de_2006.pdf"


function createData(titulo, cuerpo, documento) {
    return { titulo, cuerpo, documento };
}

const rows = [
    createData('Conpes número 173 de 2014', "", doc1),
    createData('Ley 375 1997', "", doc2),
    createData('Ley_731_de_2002-Ley-de-Mujer-Rural', "", doc3),
    createData('ley_905_de_2004', "", doc4),
    createData('Ley_1014_de_20064', "", doc5),
    

];


function NormatividadSocio() {

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

            <h1 className="text-center h1-title my-5">Normatividad</h1>

                <div className="row px-5">

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
export default NormatividadSocio