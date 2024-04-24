
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import { motion } from 'framer-motion';
import re16379 from "assets/docs/comercial/res163792023.pdf"
import re5109 from "assets/docs/comercial/res51092005.pdf"
import re333 from "assets/docs/comercial/res3332011.pdf"


function createData(titulo, cuerpo, documento) {
    return { titulo, cuerpo, documento };
}

const rows = [
    createData('RESULTADOS DE LA REVISIÓN DE DOCUMENTOS DE LOS CANDIDATOS HABILITADOS PARA PARTICIPAR EN LA REUNIÓN DE ELECCIÓN DE REPRESENTANTES A LA JUNTA DIRECTIVA DEL FONDO DE FOMENTO PANELERO PARA LOS AÑOS 2024-2025', "",  re16379),
    createData('CONVOCATORIA DE REPRESENTANTES - JUNTA DIRECTIVA FONDO DE FOMENTO PANELERO 2024-2026',"",  re5109),
    createData('CONVOCATORIA 002 DE 2022 - CONTRATAR LA AUDITORIA INTERNA DEL FONDO DE FOMENTO PANELERO CON LAS OBLIGACIONES ESTABLECIDAS EN EL DECRETO 2002 DE 1996 Y DEMÁS NORMAS CONCORDANTES', "", re333),
    createData('CONVOCATORIA 001 DE 2022 - CONTRATAR LA AUDITORIA INTERNA DEL FONDO DE FOMENTO PANELERO PARA CUMPLIR  CON LAS OBLIGACIONES ESTABLECIDAD EN EL DECRETO 2025 DE 1996Y DEMÁS NORMAS CONCORDANTES', "", re333),

];

function Convocatorias() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Convocatorias</h1>
                <div className="row mt-5">

                    {rows.map((row) => (
                        <div className="col-md-4 my-3">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                transition={{ duration: 0.9, ease: "easeOut" }}
                            >
                                <CardDownload titulo={row.titulo} doc={row.documento} cuerpo={row.cuerpo} className="my-3" />
                            </motion.div>
                        </div>
                    ))}

 

                </div>


            </div>



            <Footer />


        </Layout>
    )
}
export default Convocatorias