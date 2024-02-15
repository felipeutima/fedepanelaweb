import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/home/Header"
import Noticias from "components/home/Noticias"
import Contacto from "components/home/Contacto"
import Layout from "hocs/layouts/Layout"
import Conexionfd from "components/home/Conexionfd"

function Home(){

    return(
        <Layout>
            <Navbar/>
            <Header/>
            <Noticias/>
            <Conexionfd/>
            <Contacto/>
            <Footer/>
        </Layout>
    )
}
export default Home