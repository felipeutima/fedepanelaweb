
import Layout from "hocs/layouts/Layout"
import AccordionComponent from "components/Nuestra Fede/AccordionComponent"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"

function Nfqs(){

    return(
        <Layout>

            <Navbar  />

            <h1> Titulo </h1>      
                      <AccordionComponent titulo="este es el titulo" cuerpo="este es el cuerpo" />





            <Footer  />


        </Layout>
    )
}
export default Nfqs