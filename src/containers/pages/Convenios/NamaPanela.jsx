
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import { motion } from 'framer-motion';
import doc1 from "assets/docs/NamaPanela/ADENDA-1-TdR-013-Caracterizacion.pdf"
import doc2 from "assets/docs/NamaPanela/ADENDA-1-TdR-014-MRV.pdf"
import doc3 from "assets/docs/NamaPanela/RESPUESTA-OBSERVACIONES-CARACTERIZACION.pdf"
import doc4 from "assets/docs/NamaPanela/RESPUESTA-OBSERVACIONES-MRV.pdf"
import doc5 from "assets/docs/NamaPanela/TERMINOS-DE-REFERENCIA_AGRONOMO_OK.pdf"
import doc6 from "assets/docs/NamaPanela/TERMINOS-DE-REFERENCIA_G2-SEMILLA_OK.pdf"
import doc7 from "assets/docs/NamaPanela/TERMINOS-DE-REFERENCIA-CONSULTORIA-CARACTERIZACION.pdf"
import doc8 from "assets/docs/NamaPanela/TERMINOS-DEREFERENCIA-MRV.pdf"


import finagro from "assets/img/finagro-lg.png"


function createData(titulo, cuerpo, documento) {
    return { titulo,  documento };
}

const rows = [
    createData('Términos de Referencia al No. 13 – Consultoría para llevar a cabo la Caracterización (Línea base), Diagnóstico Productivo y Energético Integral en 80 Unidades', doc7),
    createData('Respuesta Observaciones Caracterización', doc3),
    createData('ADENDA 1 TdR 013 Caracterizacion', doc1),
    createData('Términos de Referencia al No. 14 para la Consultoría destinada al diseño del Sistema de Monitoreo, Reporte y Verificación (MRV).', doc8),
    createData('Respuesta Observaciones MRV', doc4),
    createData('ADENDA 1 TdR 014 MRV', doc2),
    createData('Términos de Referencia al No. 15 - Suministro de semilla de caña de azúcar ( Plántulas o esquejes de las variedades validadas para el subsector panelero)', doc6),
    createData('Términos de Referencia al No. 16 - Profesional Ingeniero Agrónomo para el proyeecto GEF 6 Transformación del subsector panelero de Colombia a atraves de la implementación inicial de la Nama (CPS-Nama)', doc5),
];

function NamaPanela() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Documentación</h1>
                <p className="text-black">Estas convocatorias se enmarcan en la ejecución del proyecto de Transformación del Subsector Panelero de Colombia a través de la Implementación Inicial de la Nama (CPS-NAMA). </p>
                <div className="row mt-5">

                    <img  className="img-fluid"/>


                

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

     


            </div>



            <Footer />


        </Layout>
    )
}
export default NamaPanela