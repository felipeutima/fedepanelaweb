import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search, Folder, Book, PersonFill, Briefcase, QuestionCircle } from "react-bootstrap-icons";
import React, { useEffect, useState } from 'react';
import { TikTokEmbed } from 'react-social-media-embed';
import bg1 from "assets/img/bg1.jpg"

import boletin from "assets/img/boletin.jpeg"

import fedenews from "assets/img/fedenews.png"
import { ArrowRightCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion"



function Trends() {
    const [copPrice, setCopPrice] = useState(null);



    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth < 768);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);





    return (

        <>
            <div class="container-fluid  " style={{
                backgroundImage: `url(${bg1})`,

                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                padding: '100px auto'
            }}>
                <div className="overlay"
                    style={{
                        position: "absolute", top: 0, left: 0,
                        width: "100%", height: "100%",
                        backgroundColor: "rgba(355, 355, 355, 0.3)",
                        zIndex: 0
                    }} />

                <div className="container py-5" style={{ zIndex: 3, position: "relative", padding: isSmallScreen ? "0" : "100px 100px" }}>

                    <div className="row">

                        <div className="row">

                            <div className="col-md-6 col-12">
                                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >

                                    <div className=" d-flex flex-column align-items-center">
                                        <h2 className="h2-title text-center">Boletines de Noticias</h2>
                                        <img src={fedenews} className="img-fluid my-2" style={{ width: isSmallScreen ? "100%" : "70%" }} alt="Boletin"></img>
                                        <button>
                                            <span>Ver más</span>
                                            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <ArrowRightCircle color="white" size={"100%"} />
                                            </svg>
                                        </button>

                                    </div>
                                </motion.div>
                            </div>

                            <div className="col-md-6 col-12 ">
                                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                    <div className=" my-3 d-flex flex-column align-items-center">


                                        <h2 className="h2-title text-center">Boletin de Tendencias</h2>
                                        <img src={boletin} className="img-fluid my-2" style={{ width: isSmallScreen ? "100%" : "70%" }} alt="Boletin"></img>
                                        <button>
                                            <span>Ver más</span>
                                            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <ArrowRightCircle color="white" size={"100%"} />
                                            </svg>
                                        </button>

                                    </div>
                                </motion.div>
                            </div>
                        </div>




                    </div>


                </div>

            </div >


        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Trends)