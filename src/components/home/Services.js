import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search, Folder, Book, PersonFill, Briefcase, QuestionCircle } from "react-bootstrap-icons";
import React, { useEffect, useState } from 'react';
import { TikTokEmbed } from 'react-social-media-embed';
import bg1 from "assets/img/bg33.png"
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


    const [embedData, setEmbedData] = useState(null);

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('https://www.tiktok.com/oembed?url=https://www.tiktok.com/@scout2015/video/6718335390845095173');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setVideos(prevVideos => [...prevVideos, data]);

                // Aquí puedes realizar solicitudes adicionales para obtener más videos
                // Por ejemplo, podrías iterar sobre un array de URLs de videos
                // y realizar una solicitud para cada una
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        // Realizamos la solicitud inicial para obtener un video
        fetchVideos();
    }, []);


    return (

        <>
            <div class="container-fluid " style={{
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
                        zIndex:0
                    }} />

                <div class="container-flex" style={{zIndex:3}}>
                    <div className="row">

                        <div className="col-md-7 container-flex ps-5" style={{
                            background: "rgba(355, 355, 355, 0.4)", backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <div className="container">


                                <div className="row justify-content-center my-4">
                                    <div class="rounded-white-bg mb-4">
                                        <h6 style={{color:"#05601f"}} class=" fw-bold text-center text-uppercase ">Nuestros programas</h6>
                                    </div>
                                    <div className="col-md-4 col-6 img-container">
                                        <a href="https://www.youtube.com/watch?v=OS4wVgvr6eY&list=PLU8D9c2LVu38Htz9ofWzF_Rykro8N2ff6">

                                            <img src={boton1} width={"70%"} className="my-2 img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 col-6 img-container">
                                        <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                            <img src={boton2} width={"70%"} className="my-2 img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 col-6 img-container">
                                        <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">

                                            <img src={boton3} width={"70%"} className="my-2 img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 col-6 img-container">
                                        <a href="https://open.spotify.com/show/4JcuAOF4NrNRgw4uOQtIIf">

                                            <img src={boton4} width={"70%"} className="my-2 img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 col-6 img-container">
                                        <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                            <img src={boton5} width={"70%"} className="my-2 img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 col-6 img-container">
                                        <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                            <img src={boton6} width={"70%"} className="my-2 img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 col-6 img-container">
                                        <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                            <img src={boton7} width={"70%"} className="my-2 img-fluid mx-auto d-block" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 col-6 img-container">
                                        <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                            <img src={boton8} width={"70%"} className="my-2 img-fluid mx-auto d-block" />
                                        </a>
                                    </div>



                                </div>
                         
                             



                            

                            </div>

                        </div>
                        <div className="col-md-5 container ">


                            <div className="row">

                                <div className="mx-auto my-4">
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <TikTokEmbed url="https://www.tiktok.com/@fedepanelacol/video/7342979848387710213"
                                            width={325}
                                        />
                                    </div>




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