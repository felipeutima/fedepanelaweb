import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import bg1 from "assets/img/bg3.jpg"
import CardHeader from "./CardHeader";
import { motion } from "framer-motion"

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom"

import { ArrowRightCircle } from "react-bootstrap-icons";
import pselogo1 from "assets/img/pselogo1.png"
import Logosipa from "assets/img/logo_sipa.png"
import webmail from "assets/img/webmail-logo.svg"

function Noticias({ newshome }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('rgba(49, 49, 54, 0.95)');

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            setBackgroundColor(scrollPosition >= 1600 ? 'rgb(255, 204, 40)' : 'rgba(49, 49, 54, 0.95)');
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);


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
            <div className={`container-flex servicios b-example-divider   ${isSmallScreen ? "py-2" : ""}`} style={{
                backgroundColor: ' rgba(43,52,46,0)',
                position: "",
                bottom: "0",
                width: "100%",

            }} >

                <div className="container py-2 ">
                    <div className="row">
                        <div className="col-md-3"></div>

                        <div className="col-md-6">
                            <div className="row">

                                <div className="col-md-4  col-4  d-flex justify-content-center">
                                    <CardHeader img={pselogo1} link="https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=1001" />
                                </div>


                                <div className="col-md-4 col-4  d-flex justify-content-center">
                                    <CardHeader img={Logosipa} link="http://www.sipa.org.co/wp/" />
                                </div>
                                <div className="col-md-4  col-4 d-flex justify-content-center">
                                    <CardHeader img={webmail} link="https://www.fedepanela.org.co:2093/" />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3"></div>


                    </div>

                </div>

            </div>
            <div className="container-flex  " style={{

            }} >
                <div className="" style={{

                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                    padding: '100px auto',
                    zIndex: 0
                }}>

                    <div className="container-flex"   >
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }} >
                            <div className="triangular-section" style={{
                                backgroundColor: "rgba(5, 96, 31,0.7)", backgroundAttachment: "fixed", position: "relative",


                                /*clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0% 100%)"*/
                                backgroundSize: "cover",
                                height: "150px",
                                width: "100%",
                                marginTop: "0%",
                                zIndex: 0,
                                boxShadow: `
                            0px 20px 20px -20px rgba(0, 0, 0, 0.5) inset, 
                            20px 0px 20px -20px rgba(0, 0, 0, 0.5) inset, 
                            -20px 0px 20px -20px rgba(0, 0, 0, 0.5) inset, 
                            0px -20px 20px -20px rgba(0, 0, 0, 0.5) inset`


                            }}>

                                <h1 className="text-center text-white ">NOTICIAS</h1>


                            </div>
                        </motion.div>
                    </div>






                    <div className="overlay"
                        style={{
                            position: "absolute", top: 0, left: 0,
                            width: "100%", height: "100%",
                            backgroundColor: "rgba(355, 355, 355, 0.45)",
                            zIndex: -2,
                            filter: "blur(20px)"

                        }} />


                    <div className="container">
                        <div className="row">



                            <div className="col-md-12">


                                <div class="about-text my-3  my-lg-5" >


                                    <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                        <div class="row mb-4" >
                                            {newshome && newshome.map((post, index) => (


                                                <div class="col-md-3 col-12 my-2 ">
                                                    <Link to={`/noticias/${post.slug}`} style={{ textDecoration: "none" }} >
                                                        <Card className="card-news text-black " style={{ background: "whitesmoke", height: "100%" }}>
                                                        <img class="img-fluid" src={post.thumbnail===null? "https://cdn-icons-png.freepik.com/256/14441/14441518.png?uid=R102482777&ga=GA1.1.1530534781.1715822030&semt=ais_hybrid" : post.thumbnail} alt="" />                                                            <Card.Body>
                                                                <Card.Title className="a-news  ">

                                                                    {post.title}
                                                                </Card.Title>


                                                            </Card.Body>
                                                        </Card>
                                                    </Link>

                                                </div>
                                            ))}

                                        </div>

                                        <a href="/noticias" style={{ textDecoration: "none" }}>
                                            <button>
                                                <span>Ver más</span>
                                                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                    <ArrowRightCircle color="white" size={"100%"} />
                                                </svg>
                                            </button>
                                        </a>

                                    </motion.div>


                                </div>
                            </div>


                        </div>






                    </div>



                    {/*
            <div className="container-flex" >
                <div
                    className=""
                    style={{
                        backgroundColor: backgroundColor,
                        transition: 'background-color 1s',
                        backgroundAttachment: "fixed",
                        position: "absolute",
                        clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0% 100%)",
                        backgroundSize: "cover",
                        height: "300px",
                        width: "100%",
                        top: `${Math.min(scrollPosition + 140, 3200)}px`, // Máximo desplazamiento de 100vh
                        zIndex: -1
                    }}
                >

                </div>
            </div>
                */}

                </div>
            </div>
        </>


    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Noticias)