
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardServices from "components/FondoFomento/CardServices"
import { CurrencyDollar, PencilFill, PostageFill, PeopleFill, Bank2, ChatLeftTextFill, PersonFillGear } from "react-bootstrap-icons"
import { motion } from 'framer-motion';



function ServiciosFDF() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Servicios-Fondo de Fomento</h1>
                <div className="row">
                    <div className="col-md-3">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >

                            <CardServices titulo="Verificación pago Cuota de Fomento" cuerpo="" icon={<CurrencyDollar />} />

                        </motion.div>
                    </div>


                    <div className="col-md-3">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardServices titulo="Certificación pago Cuota de Fomento" cuerpo="" icon={<PencilFill />} />
                        </motion.div>
                    </div>

                    <div className="col-md-3">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardServices titulo="Certificación pago Cuota de Fomento para Exportaciones" cuerpo="" icon={<PostageFill />} />
                        </motion.div>
                    </div>
                    <div className="col-md-3">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardServices titulo="Capacitaciones a productores y comerciantes" cuerpo="" icon={<PeopleFill />} />
                        </motion.div>

                    </div>
                    <div className="col-md-4">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardServices titulo="Capacitaciones a Policía Nacional" cuerpo="" icon={<Bank2 />} />
                        </motion.div>
                    </div>
                    <div className="col-md-4">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, y: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardServices titulo="Atención oportuna y cortés a todos los usuarios del Fondo de Fomento" cuerpo="" icon={<ChatLeftTextFill />} />
                        </motion.div>
                    </div>
                    <div className="col-md-4">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardServices titulo="Protocolos de atención" cuerpo="" icon={<PersonFillGear />} />
                        </motion.div>

                    </div>


                </div>




            </div>



            <Footer />


        </Layout>
    )
}
export default ServiciosFDF