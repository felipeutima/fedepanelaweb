import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/home/Header"
import Noticias from "components/home/Noticias"
import Contacto from "components/home/Contacto"
import Layout from "hocs/layouts/Layout"
import Conexionfd from "components/home/Conexionfd"
import Services from "components/home/Services"

function Home(){

    return(
        <Layout>
            <Navbar/>
            <Header/>
            <Noticias/>
            <Services/>
            <Conexionfd/>
        
            <Contacto/>
            <Footer/>
        </Layout>
    )
}
export default Home