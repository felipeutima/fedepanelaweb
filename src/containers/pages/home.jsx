import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/home/Header"
import Noticias from "components/home/Noticias"
import Contacto from "components/home/Contacto"
import Layout from "hocs/layouts/Layout"
import Conexionfd from "components/home/Conexionfd"
import Services from "components/home/Services"
import Trends from "components/home/Trends"
import { connect } from "react-redux";
import { useEffect } from "react"
import { get_news } from "redux/actions/news/news"



function Home({ get_news }) {

    useEffect(() => {
        get_news()

    }, [])

    return (
        <Layout>
            <Navbar />
            <Header />
            <Noticias />
          
            <Trends /> 
            <Services />
       
            <Conexionfd />
            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({

    news: state.news


})

export default connect(mapStateToProps, {

    get_news

})(Home)