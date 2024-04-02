import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { connect } from "react-redux";
import { useEffect } from "react"

import {  get_news } from "redux/actions/boletines/boletines"
import { Link } from "react-router-dom";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion"
import React, { useState } from 'react';

function BoletinNews({ get_news, news }) {

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

        get_news()


    }, [])

    return (
        <Layout>
            <Navbar />
            <div className="container my-5">
                <h1 className="h1-title text-center">FedeNews</h1>
                <div className="row">

                    {news && news.map((post, index) => (


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

    news: state.boletines.news


})

export default connect(mapStateToProps, {

    get_news

})(BoletinNews)