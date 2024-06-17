
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import { motion } from 'framer-motion';
import re333 from "assets/docs/sanitarias/RESOLUCIN_333_DE_2011.pdf"
import re779 from "assets/docs/sanitarias/RESOLUCIN_779_DE_2006.pdf"
import re3462 from "assets/docs/sanitarias/RESOLUCIN_3462_DE_2008.pdf"
import re3544 from "assets/docs/sanitarias/RESOLUCIN_3544_DE_2009.pdf"
import re4121 from "assets/docs/sanitarias/RESOLUCIN_4121_DE_2011.pdf"
import re5109 from "assets/docs/sanitarias/RESOLUCIN_5109_DE_2005.pdf"
import re16379 from "assets/docs/sanitarias/RESOLUCIN_16379_DE_2003.pdf"
import invima from "assets/docs/sanitarias/COMUNICADOINVIMA.pdf"
import tolerancia from "assets/docs/sanitarias/TOLERANCIA.pdf"


function createData(titulo, cuerpo, documento) {
    return { titulo, cuerpo, documento };
}

const rows = [
    createData('Resolución 16379 de 2003', "Por la cual se reglamenta el control metrológico y del contenido de producto en pre-empacados. (más…)", re16379),
    createData('Resolución 5109 de 2005', "Por el cual se establece el reglamento técnico sobre los requisitos de rotulado o etiquetado que deben cumplir los alimentos envasados y materias primas de alimentos para consumo humano. (más…)", re5109),
    createData(' Resolución 810 de 2021' , "", re333),
    createData('Resolución 779 de 2006', "Por la cual se establece el reglamento técnico sobre los requisitos sanitarios que se deben cumplir en la producción y comercialización de la panela para consumo humano y se dictan otras disposiciones. (más…)", re779),
    createData('Resolución 3462 de 2008', "Por el cual se modifica el artículo 9 de las condiciones sanitarias de los trapiches y el artículo 15 sobre requisitos para la exportación de panela de la Resolución 779 de 2006 y se dictan otras disposiciones. (más…)", re3462),
    createData('Resolución 3544 de 2009', "Por el cual se modifica el artículo 11 y el artículo 13 de la Resolución 779 de 2006, sobre envase y rotulado respectivamente. (más…)", re3544),
    createData('Resolución 4121 de 2011', "Por el cual se modifica parcialmente la Resolución 779 de 2006, modificadas por las Resoluciones 3462 de 2008 y 3544 de 2009. (más…)", re4121),
    createData('Comunicado del INVIMA 4000 - 0206 - 2023 - Panela que no requiere Notificación Sanitaria', "", invima),
    createData('Resolución 37321 de 2014 - Tolerancia de Pesos', "", tolerancia),

];

function Sanitarias() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Normatividad Sanitarias</h1>
                <div className="row mt-5">

                    {rows.map((row) => (
                        <div className="col-md-4 mt-5">
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
export default Sanitarias