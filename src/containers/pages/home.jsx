import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Header from "components/home/Header"
import Noticias from "components/home/Noticias"
import Layout from "hocs/layouts/Layout"
import Conexionfd from "components/home/Conexionfd"
import Services from "components/home/Services"
import Trends from "components/home/Trends"
import { connect } from "react-redux";
import { useEffect } from "react"
import { get_news, get_news_home } from "redux/actions/news/news"
import {  get_boletines_home, get_tendencias } from "redux/actions/boletines/boletines"



function Home({ get_news, get_news_home, newshome, get_tendencias, get_boletines_home, boletinesFirst }) {


    useEffect(() => {
        get_news()
        get_news_home()
        get_tendencias()
        get_boletines_home()

    }, [])

    return (
        <Layout>
            <Navbar />
            <Header />
            {newshome ? <>
                <Noticias newshome={newshome && newshome} />
            </> :
                <> <p className="text-center"></p> Cargando</>
            }

            {boletinesFirst ? <>
                <Trends boletinesFirst={boletinesFirst && boletinesFirst} />
            </> :
                <> <p className="text-center"></p> Cargando</>
            }

            <Services />

            <Conexionfd />
            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({

    news: state.news,
    newshome: state.news.newshome,
    boletinesFirst: state.boletines.boletineshome


})

export default connect(mapStateToProps, {

    get_news, get_news_home, get_boletines_home, get_tendencias

})(Home)