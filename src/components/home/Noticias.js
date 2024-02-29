import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsNews from "./CardsNews";

import ejemplo from "assets/img/ejemplo.jpeg"
import ejemplo1 from "assets/img/ejemplo2.png"
import ejemplo2 from "assets/img/ejemplo2.jpg"
import textura from "assets/img/textura.png"

import { motion } from "framer-motion"
import fedecut from "assets/img/section-cut-05.png"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDate from "./CardDate";
import CardSpotify from "./CardSpotify";
import React, { useEffect, useState } from 'react';


function Noticias() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('rgb(255, 204, 40)');

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            setBackgroundColor(scrollPosition >= 1600 ? 'rgb(0, 91, 36)' : 'rgb(255, 204, 40)');
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return (


        <>
            <div className="container">
                <div className="row">


                    <div className="col-md-8">


                        <div class="about-text  px-5 my-lg-5" >
                            <h6 class="text-success text-uppercase" >Noticias</h6>

                            <div className="row mb-3">


                                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                    <Carousel>
                                        <Carousel.Item>
                                            <div className="row">
                                                <div class="col-7 pe-0">
                                                    <img class="img-fluid" width="100%" src={ejemplo} alt="" />
                                                </div>
                                                <div class="col-5 ps-0 " data-bs-theme="dark">
                                                    <div className="panel-dark ">
                                                        <h3 className="fw-bold a-news ">
                                                            Te invitamos a participar de la Mesa Sectorial Agroindutria de la Panela | Periodo 2024 – 2025</h3>
                                                        <div className="d-flex align-items-center">
                                                            <p className="m-0 me-2">Febrero 16, 2024</p>

                                                        </div>

                                                    </div>


                                                </div>
                                            </div>

                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className="row">
                                                <div class="col-7 pe-0">
                                                    <img class="img-fluid" width="100%" src={ejemplo} alt="" />
                                                </div>
                                                <div class="col-5 ps-0 " data-bs-theme="dark">
                                                    <div className="panel-dark ">
                                                        <h3 className="fw-bold a-news">
                                                            Te invitamos a participar de la Mesa Sectorial Agroindutria de la Panela | Periodo 2024 – 2025</h3>
                                                        <div className="d-flex align-items-center">
                                                            <p className="m-0 me-2">Febrero 16, 2024</p>

                                                        </div>

                                                    </div>


                                                </div>
                                            </div>

                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <div className="row ">
                                                <div class="col-7 pe-0">
                                                    <img class="img-fluid" width="100%" src={ejemplo} alt="" />
                                                </div>
                                                <div class="col-5 ps-0 " data-bs-theme="dark">
                                                    <div className="panel-dark ">
                                                        <h3 className="fw-bold a-news">
                                                            Te invitamos a participar de la Mesa Sectorial Agroindutria de la Panela | Periodo 2024 – 2025</h3>
                                                        <div className="d-flex align-items-center">
                                                            <p className="m-0 me-2">Febrero 16, 2024</p>

                                                        </div>

                                                    </div>


                                                </div>
                                            </div>

                                        </Carousel.Item>


                                    </Carousel>
                                </motion.div>





                            </div>

                            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                <div class="row mb-4" >






                                    <div class="col-4 ">
                                        <Card className="card-news" style={{ backgroundColor: "rgb(255, 204, 40, 0.6)" }} >
                                            <img class="img-fluid" src={ejemplo} alt="" />
                                            <Card.Body>
                                                <Card.Title className="a-news">Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                            </Card.Body>
                                        </Card>

                                    </div>
                                    <div class="col-4">
                                        <Card className="card-news" style={{ backgroundColor: "rgb(255, 204, 40, 0.6)" }}>
                                            <img class="img-fluid" src={ejemplo2} alt="" />
                                            <Card.Body>
                                                <Card.Title className="a-news">Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div class="col-4">
                                        <Card className="card-news" style={{ backgroundColor: "rgb(255, 204, 40, 0.6)" }}>
                                            <img class="img-fluid" src={ejemplo2} alt="" />
                                            <Card.Body>
                                                <Card.Title className="a-news">Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </motion.div>


                        </div>
                    </div>
                    <div className="col-md-4">


                        <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                            <div className="row">
                                <div class="about-text   mt-5">

                                    <h6 class="text-success text-uppercase" >Eventos</h6>


                                    <CardDate titulo="Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM (5pm)" />
                                    <CardDate titulo="Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM (5pm)" />
                                    <CardDate titulo="Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM (5pm)" />
                                    <CardDate titulo="Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM (5pm)" />



                                </div>


                            </div>
                        </motion.div>
     
                        <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                            <div className="row">
                                <h6 class="text-success text-uppercase mt-2" >Nuestro Podcast</h6>
                                <CardSpotify />


                            </div>
                        </motion.div>

                    </div>
                </div>




            </div>

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


        </>


    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Noticias)