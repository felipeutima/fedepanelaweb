
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from 'framer-motion';
import CardEvents from "components/FondoFomento/CardEvents"
import { get_events } from "redux/actions/events/events"
import { connect } from "react-redux";
import { useEffect } from "react"
import moment from 'moment'
import 'moment/locale/es'; // Importa el idioma español
function CalendarioEventosFDF({ get_events, events }) {
    useEffect(() => {

        get_events()


    }, [])

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Calendario de Eventos</h1>
                <div className="row">
                    {events && events.map((post, index) => (


                        <div className="col-md-4 col-12">

                            <motion.div
                                initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                transition={{ duration: 0.9, ease: "easeOut" }}
                            >

                                <CardEvents titulo={post.title} url={post.url}
                                    cuerpo={post.description}
                                    fecha={moment(post.date).format('LLLL')}
                                />


                            </motion.div>

                        </div>

                    ))}
                 

             
            



                </div>




            </div>



            <Footer />


        </Layout>
    )
}
const mapStateToProps = state => ({

    events: state.events.events


})

export default connect(mapStateToProps, {

    get_events

})(CalendarioEventosFDF)