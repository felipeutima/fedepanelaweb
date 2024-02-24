
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import { motion } from 'framer-motion';
import de295 from "assets/docs/laboral/DECRETO-295-DE-2017.pdf"
import de604 from "assets/docs/laboral/DECRETO-604-DE-2013.pdf"
import de2616 from "assets/docs/laboral/DECRETO-2616-DE-2013.pdf"
import ley100 from "assets/docs/laboral/LEY-100-DE-1993.pdf"



function createData(titulo, cuerpo, documento) {
    return { titulo, cuerpo, documento };
}

const rows = [
    createData('Decreto 295 de 2017', "Por el cual se adiciona un Capítulo al Título 13 de la Parte 2 del Libro 2 del Decreto 1833 de 2016, a efectos de reglamentar la contribución de terceros…", de295),
    createData('Decreto 604 de 2013', "Por el cual se reglamenta el acceso y operación del Servicio Social Complementario de Beneficios Económicos Periódicos –BEPS. (más…)", de604),
    createData('Decreto 2616', "Por medio del cual se regula la cotización a seguridad social para trabajadores dependientes que laboran por períodos inferiores a un mes, se desarrolla el mecanismo financiero y operativo de…", de2616),
    createData('Ley 100 de 1993', "Por la cual se crea el sistema de seguridad social integral y se dictan otras disposiciones. (más…)", ley100),

];

function Laboral() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Normatividad Laboral</h1>
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
export default Laboral