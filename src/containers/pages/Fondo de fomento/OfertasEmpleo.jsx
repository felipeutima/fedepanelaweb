
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"

function OfertasEmpleo() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Ofertas de empleo</h1>
                <div className="row mt-5">
                    <p className="text-center">No hay convocatorias vigentes en este momento</p>
                    
                </div>


            </div>



            <Footer />


        </Layout>
    )
}
export default OfertasEmpleo