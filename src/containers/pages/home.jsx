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
import { get_boletines_home, get_tendencias } from "redux/actions/boletines/boletines"
import { get_programas } from "redux/actions/programas/programas"
import { get_slides } from "redux/actions/slides/slides"
import { get_conexion } from "redux/actions/conexion/conexion"



function Home({
    get_news,
    get_news_home,
    newshome,
    get_tendencias,
    get_boletines_home,
    boletinesFirst,
    get_programas,
    programas,
    get_slides,
    slides, get_conexion, conexion
}) {


    useEffect(() => {
        get_news()
        get_news_home()
        get_tendencias()
        get_boletines_home()
        get_programas()
        get_slides()
        get_conexion()


    }, [])

    return (
        <Layout>
            <Navbar />

            {slides ? <>
                <Header slides={slides && slides} />
            </> :
                <> <p className="text-center"></p> Cargando</>
            }

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
            {programas ? <>
                <Services programas={programas && programas} />
            </> :
                <> <p className="text-center"></p> Cargando</>
            }
            {conexion ? <>
                <Conexionfd conexion={conexion && conexion} />
            </> :
                <> <p className="text-center"></p> Cargando</>
            }
        
            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({

    news: state.news,
    newshome: state.news.newshome,
    boletinesFirst: state.boletines.boletineshome,
    programas: state.programas.programas,
    slides: state.slides.slides,
    conexion: state.conexion.conexion,
    



})

export default connect(mapStateToProps, {

    get_news, get_news_home, get_boletines_home, get_tendencias, get_programas, get_slides, get_conexion

})(Home)