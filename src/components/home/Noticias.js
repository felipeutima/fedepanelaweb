import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsNews from "./CardsNews";

import ejemplo from "assets/img/ejemplo.jpeg"
import ejemplo1 from "assets/img/ejemplo2.png"
import ejemplo2 from "assets/img/ejemplo2.jpg"
import fedecut from "assets/img/section-cut-05.png"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDate from "./CardDate";
import CardSpotify from "./CardSpotify";
function Noticias() {


    return (


        <> <div className="container">
            <div className="row">

                <div className="col-md-8">


                    <div class="about-text bg-white px-5 my-lg-5">
                        <h6 class="text-success text-uppercase" >Noticias</h6>

                        <div className="row mb-3">
                            <Carousel>
                                <Carousel.Item>
                                    <div className="row">
                                        <div class="col-7 pe-0">
                                            <img class="img-fluid" width="100%" src={ejemplo} alt="" />
                                        </div>
                                        <div class="col-5 ps-0 " data-bs-theme="dark">
                                            <div className="panel-dark ">
                                                <h3 className="fw-bold text-white">
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
                                                <h3 className="fw-bold text-white">
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
                                                <h3 className="fw-bold text-white">
                                                    Te invitamos a participar de la Mesa Sectorial Agroindutria de la Panela | Periodo 2024 – 2025</h3>
                                                <div className="d-flex align-items-center">
                                                    <p className="m-0 me-2">Febrero 16, 2024</p>

                                                </div>

                                            </div>


                                        </div>
                                    </div>

                                </Carousel.Item>


                            </Carousel>




                        </div>
                        <div class="row mb-4">
                            <div class="col-4 ">
                                <Card >
                                    <img class="img-fluid" src={ejemplo} alt="" />
                                    <Card.Body>
                                        <Card.Title>Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                    </Card.Body>
                                </Card>

                            </div>
                            <div class="col-4">
                                <Card >
                                    <img class="img-fluid" src={ejemplo2} alt="" />
                                    <Card.Body>
                                        <Card.Title>Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                    </Card.Body>
                                </Card>
                            </div>
                            <div class="col-4">
                                <Card >
                                    <img class="img-fluid" src={ejemplo2} alt="" />
                                    <Card.Body>
                                        <Card.Title>Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM</Card.Title>


                                    </Card.Body>
                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-md-4">



                    <div className="row">
                        <div class="about-text   mt-5">

                            <h6 class="text-success text-uppercase" >Eventos</h6>


                            <CardDate titulo="Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM (5pm)" />
                            <CardDate titulo="Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM (5pm)" />
                            <CardDate titulo="Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM (5pm)" />
                            <CardDate titulo="Participe en la Reunión Nacional de Productores de Licores Artesanales | Lunes 26 de Febrero 2024 | Vía ZOOM (5pm)" />



                        </div>


                    </div>

                    <div className="row">
                    <h6 class="text-success text-uppercase mt-2" >Nuestro Podcast</h6>
                        <CardSpotify/>


                    </div>
                </div>
            </div>



        </div>
        </>


    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Noticias)