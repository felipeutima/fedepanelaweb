import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search, Folder, Book, PersonFill, Briefcase, QuestionCircle } from "react-bootstrap-icons";
import React, { useEffect, useState } from 'react';
import { TikTokEmbed } from 'react-social-media-embed';
import bg1 from "assets/img/bg3.jpg"
import boton1 from "assets/img/boton1.png"
import boton2 from "assets/img/boton2.png"
import boton3 from "assets/img/boton3.png"
import boton4 from "assets/img/boton4.png"
import boton5 from "assets/img/boton5.png"
import boton6 from "assets/img/boton6.png"
import boton7 from "assets/img/boton7.png"
import boton8 from "assets/img/boton8.png"
import axios from 'axios';
import colombia from "assets/img/colombia.png"
import estadosunidos from "assets/img/estadosunidos.png"




function Services() {
    const [copPrice, setCopPrice] = useState(null);
   

    useEffect(() => {
        const fetchCopPrice = async () => {
            try {
                const response = await axios.get('https://open.er-api.com/v6/latest/USD');
                const exchangeRate = response.data.rates.COP;
                setCopPrice(exchangeRate.toFixed(2)); // Redondear a 2 decimales
            } catch (error) {
                console.error('Error fetching COP price:', error);
            }
        };

        fetchCopPrice();
    }, []);

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
            <div class="container-fluid py-5" style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                padding: '100px auto'
            }}>
                <div class="container pt-5 pb-3">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="container">


                                <div className="row justify-content-center my-2">
                                    <div class="rounded-gray-bg mb-4">
                                        <h6 class="text-white text-uppercase ">Nuestros programas</h6>
                                    </div>
                                    <div className="col-md-3 col-6 img-container">
                                        <a href="https://www.youtube.com/watch?v=OS4wVgvr6eY&list=PLU8D9c2LVu38Htz9ofWzF_Rykro8N2ff6">

                                            <img src={boton1} className="img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-6 img-container">
                                    <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                            <img src={boton2} className="img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-6 img-container">
                                        <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">

                                            <img src={boton3} className="img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-6 img-container">
                                        <a href="https://open.spotify.com/show/4JcuAOF4NrNRgw4uOQtIIf">

                                            <img src={boton4} className="img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-6 img-container">
                                    <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                            <img src={boton5} className="img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-6 img-container">
                                    <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                            <img src={boton6} className="img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-6 img-container">
                                    <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                            <img src={boton7} className="img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-3 col-6 img-container">
                                    <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                            <img src={boton8} className="img-fluid mx-auto d-block" />
                                        </a>
                                    </div>



                                </div>
                                <div className="row mx-auto my-4">
                                    <div className="card-date text-center mx-auto " >

                                        {copPrice !== null ? (

                                            <p className="text-center fw-bold text-black lead my-2 mx-auto "><img src={estadosunidos} className="img-fluid mx-2" />1 USD = <img src={colombia} className="img-fluid" /> {copPrice} COP </p>
                                        ) : (
                                            <p>Cargando...</p>
                                        )}
                                    </div>



                                </div>

                            </div>

                        </div>
                        <div className="col-md-6 container ">


                            <div className="row">

                                <div className="mx-auto">
                                    <TikTokEmbed className="mx-auto" 


                                        url="https://www.tiktok.com/@fedepanelacol/video/7342979848387710213"
                                        embedId="fedepanelacol"
                                        type="creator"


                                        width={ isSmallScreen? "100%":"60%"}
                                       
                                    />
                                </div>

                            </div>

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

})(Services)