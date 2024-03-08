
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import { motion } from 'framer-motion';
import doc1 from "assets/docs/finagro/Anexo-de-definiciones-Destinos.pdf"
import doc2 from "assets/docs/finagro/CERTIFICACION-ARROZ-BAJO-EN-CARBONO.pdf"
import doc3 from "assets/docs/finagro/Circular-11-de-2022-Finagro.pdf"
import doc4 from "assets/docs/finagro/Circular-12-de-2022-Finagro-1.pdf"
import doc5 from "assets/docs/finagro/Circular-13-de-2022-Finagro.pdf"
import doc6 from "assets/docs/finagro/Circular-28-2023-Finagro.pdf"
import doc7 from "assets/docs/finagro/Circular-Externa-No.27-2023.pdf"
import doc8 from "assets/docs/finagro/Circular-Externa-No.29-2023.pdf"
import doc9 from "assets/docs/finagro/Titulo-4-Manual-de-Servicios-Cap2-Lec-Economia-Verde.pdf"
import doc10 from "assets/docs/finagro/TItulo-Sexto-Manual-de-Servicios-de-Finagro.pdf"
import info1 from "assets/docs/finagro/infografia_circular_11_lecantioquia.png"
import info2 from "assets/docs/finagro/infografia_circular_12_lecvalle_1-1.png"

import finagro from "assets/img/finagro-lg.png"


function createData(titulo, cuerpo, documento) {
    return { titulo,  documento };
}

const rows = [
    createData('Circular 11: LEC- Antioquia e Incentivo al seguro agropecuario (2022)', doc3),
    createData('Circular 12: Convenio Gobernación del Valle – LEC / Incentivo al Seguro agropecuario (2022)', doc4),
    createData('Circular 13: Actualización de las condiciones de acceso al reconocimiento del Incentivo Territorial Atlántico – ICR ATLÁNTICO – ICRA', doc5),
    createData('Circular 27 de 2023', doc7),
    createData('Circular 28 de 2023', doc6),
    createData('Circular 29 de 2023', doc8),
    createData('Anexo de Definiciones Destinos', doc1),
    createData('Título Sexto Manual de Servicios de Finagro.pdf', doc10),
    createData('Titulo 4 Manual de Servicios – Cap 2 Lec Economía Verde', doc9),
    createData('Certificación Arroz bajo en Carbono', doc2),

];

function Finagro() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Convenio Finagro</h1>
                <div className="row mt-5">

                    <img src={finagro} className="img-fluid"/>


                    <h2 className="h2-title mt-4">Circulares  </h2>

                    {rows.map((row) => (
                        <div className="col-md-4 my-2">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                transition={{ duration: 0.9, ease: "easeOut" }}
                            >
                                <CardDownload titulo={row.titulo} doc={row.documento}  />
                            </motion.div>
                        </div>
                    ))}

 

                </div>

                <div className="row"> 
                
                <h2 className="h2-title mt-4">Inforgrafías  </h2>
                

                <div className="col-md-6"> <img src={info1} className="img-fluid"/></div>
                <div className="col-md-6"> <img src={info2} className="img-fluid"/></div>
                             </div>


            </div>



            <Footer />


        </Layout>
    )
}
export default Finagro