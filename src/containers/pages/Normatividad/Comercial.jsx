
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import re2023 from "assets/docs/Reforma-Estatutaria-2023.pdf"
import re003 from "assets/docs/Resolucion-003-Reglamento-Elecciones-2023.pdf"
import { motion } from 'framer-motion';
import re16379 from "assets/docs/comercial/res163792023.pdf"
import re5109 from "assets/docs/comercial/res51092005.pdf"
import re333 from "assets/docs/comercial/res3332011.pdf"


function createData(titulo, cuerpo, documento) {
    return { titulo, cuerpo, documento };
}

const rows = [
    createData('Resolución 16379 de 2023', "Por la cual se reglamenta el control metrológico y del contenido de producto en pre-empacados. (más…)",  re16379),
    createData('Resolución 5109 de 2005', "Por el cual se establece el reglamento técnico sobre los requisitos de rotulado o etiquetado que deben cumplir los alimentos envasados y materias primas de alimentos para consumo humano. (más…)", re5109),
    createData('Resolución 333 de 2011', "Por la cual se establece el reglamento técnico sobre los requisitos de rotulado o etiquetado nutricional que deben cumplir los alimentos envasados para consumo humano. (más…)", re333),

];

function Comercial() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Normatividad Comercial</h1>
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
export default Comercial