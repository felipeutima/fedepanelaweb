
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardServices from "components/FondoFomento/CardServices"
import { CurrencyDollar, PencilFill, PostageFill, PeopleFill, Bank2, ChatLeftTextFill, PersonFillGear } from "react-bootstrap-icons"
import { motion } from 'framer-motion';
import CardEvents from "components/FondoFomento/CardEvents"


function CalendarioEventosFDF() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Calendario de Eventos</h1>
                <div className="row">
                    <div className="col-md-4">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >

                            <CardEvents titulo="Webinar “Calidad de panela y eficiencia energética” ” 4:00 pm a 5:30 pm Capitulo III"
                                cuerpo="Webinar “Calidad de panela y eficiencia energética” ” 4:00 pm a 5:30 pm Capitulo III"
                                fecha="julio 1, 2021 @ 4:00 pm - 5:30 pm"
                            />


                        </motion.div>
                    </div>


                    <div className="col-md-4">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardEvents titulo="Facebook live “Tomemonos una agua de panela con"
                                cuerpo="Facebook live “Tomemonos una agua de panela con"
                                fecha="junio 28, 2021 @ 8:00 am - 5:00 pm"
                            />

                        </motion.div>
                    </div>

                    <div className="col-md-4">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                         <CardEvents titulo="Webinar “Calidad de panela y eficiencia energética” 4:00 pm a 5:30 pm Capitulo II"
                                cuerpo="Webinar “Calidad de panela y eficiencia energética” 4:00 pm a 5:30 pm Capitulo II"
                                fecha="junio 24, 2021 @ 4:00 pm - 5:30 pm"
                            />                        </motion.div>
                    </div>

                    


                </div>




            </div>



            <Footer />


        </Layout>
    )
}
export default CalendarioEventosFDF