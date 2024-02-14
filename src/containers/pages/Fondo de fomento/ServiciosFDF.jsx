
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardServices from "components/FondoFomento/CardServices"
import { CurrencyDollar } from "react-bootstrap-icons"

function ServiciosFDF() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Servicios-Fondo de Fomento</h1>
                <div className="row">

                    <div className="col-md-4">
                        <CardServices titulo="Verificación pago Cuota de Fomento" cuerpo= "" icon=  "" />


                    </div>


                </div>

                


            </div>



            <Footer />


        </Layout>
    )
}
export default ServiciosFDF