
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import { motion } from 'framer-motion';
import bioseguridad from "assets/docs/ambiental/BIOSEGURIDAD.pdf"
import DEC948 from "assets/docs/ambiental/DECRETO_948_DE_1995.pdf"
import DEC1594 from "assets/docs/ambiental/DECRETO_1594_DE_1984.pdf"


function createData(titulo, cuerpo, documento) {
    return { titulo, cuerpo, documento };
}

const rows = [
    createData('PROTOCOLO GENERAL DE BIOSEGURIDAD PARA LA PREVENCIÓN DEL COVID-19 EN EL SUBSECTOR PANELERO', "", bioseguridad),
    createData('Decreto 1594 de 1984', "Por el cual se establece el reglamento técnico sUsos del agua y residuos líquidos. (más…)", DEC1594),
    createData('DECRETO 948 DE 1995', "Prevención y control de la contaminación atmosférica y la protección de la calidad del aire. (más…)", DEC948),

];

function Ambiental() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Normatividad Ambiental</h1>
                <div className="row mt-5">

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


            </div>



            <Footer />


        </Layout>
    )
}
export default Ambiental