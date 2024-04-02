import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { connect } from "react-redux";
import { useEffect } from "react"
import { get_news, get_news_home } from "redux/actions/news/news"
import { get_boletines_home, get_tendencias } from "redux/actions/boletines/boletines"
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion"
import React, { useState } from 'react';

function BoletinTendencias({ get_tendencias, tendencias }) {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {

        get_tendencias()


    }, [])

    return (
        <Layout>
            <Navbar />
            <div className="container my-5">
                <h1 className="h1-title text-center">Tendencias</h1>
                <div className="row">

                    {tendencias && tendencias.map((post, index) => (


                        <div className="col-md-4 col-12">

                            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >

                                <div className=" d-flex flex-column align-items-center">

                                    <Link to={post.url} target="blank" className="mx-auto">
                                        <div className="image-container">
                                            <img src={post.thumbnail} className="img-fluid my-2" style={{ width: isSmallScreen ? "100%" : "70%" }} alt="Boletin"></img>
                                        </div>
                                    </Link>

                                </div>
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

    tendencias: state.boletines.tendencias


})

export default connect(mapStateToProps, {

    get_tendencias

})(BoletinTendencias)