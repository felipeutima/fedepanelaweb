import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Accordion from 'react-bootstrap/Accordion';
import bg1 from "assets/img/bg3.jpg"

import ejemplo6 from "assets/img/ejem6.png"
import ejemplo4 from "assets/img/ejem4.png"
import ejemplo3 from "assets/img/ejem3.jpg"

import ejemplo5 from "assets/img/ejem5.jpeg"

import ejemplptend from "assets/img/ejemplotendencia.jpeg"
import ejemplptendencia2 from "assets/img/ejemplotendencia2.jpeg"
import ejemplptendencia3 from "assets/img/ejemplotendencia3.jpeg"
import ejemplptendencia4 from "assets/img/ejemplotendencia4.png"
import { motion } from "framer-motion"

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react';

import { ArrowRightCircle } from "react-bootstrap-icons";


function NewsList() {
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

                                <h1 className="text-center text-white ">NewsList</h1>


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





                                            <div class="col-md-3 col-12 my-2 ">
                                                <Card className="card-news text-black " style={{ background: "whitesmoke", height: "100%" }}>
                                                    <img class="img-fluid" src={ejemplo4} alt="" />
                                                    <Card.Body>
                                                        <Card.Title className="a-news  ">
                                                            AVISO ACLARATORIO CONVOCATORIA AUDITORÍA FONDO DE FOMENTO PANELERO No. 001 DE 2024</Card.Title>


                                                    </Card.Body>
                                                </Card>

                                            </div>

                                            <div class="col-md-3 col-12 my-2">
                                                <Card className="card-news text-black " style={{ background: "whitesmoke", height: "100%" }} >
                                                    <img class="img-fluid" src={ejemplo3} alt="" />
                                                    <Card.Body>
                                                        <Card.Title className="a-news ">Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div class="col-md-3 col-12 my-2">
                                                <Card className="card-news text-black " style={{ background: "whitesmoke", height: "100%" }}>
                                                    <img class="img-fluid" src={ejemplo6} alt="" />
                                                    <Card.Body>
                                                        <Card.Title className="a-news  ">“Pan con Fé” la nueva campaña de Levapan y Fedepanela para potenciar la industria panelera y panificadora en Colombia</Card.Title>


                                                    </Card.Body>
                                                </Card>
                                            </div>
                                            <div class="col-md-3 col-12 my-2">
                                                <Card className="card-news text-black " style={{ background: "whitesmoke", height: "100%" }}>
                                                    <img class="img-fluid" src={ejemplo5} alt="" />
                                                    <Card.Body>
                                                        <Card.Title className="a-news ">Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                                    </Card.Body>
                                                </Card>
                                            </div>





                                        </div>

                                        <a href="/NewsList">
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

})(NewsList)