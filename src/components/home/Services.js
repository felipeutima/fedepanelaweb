import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';

import bg1 from "assets/img/bg33.png"
import boton1 from "assets/img/boton1.png"
import boton2 from "assets/img/boton2.png"
import boton3 from "assets/img/boton3.png"
import boton4 from "assets/img/boton4.png"
import boton5 from "assets/img/boton5.png"

import boton8 from "assets/img/boton8.png"

import { motion } from "framer-motion"



function Services() {

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

            <div class="container-flex " style={{/*
                backgroundImage: `url(${bg1})`,*/

                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                padding: '100px auto'
            }}>
                <div className="overlay"
                    style={{
                        position: "absolute", top: 0, left: 0,
                        width: "100%", height: "100%",
                        backgroundColor: "rgba(355, 355, 355, 0)",
                        zIndex: 0
                    }} />
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

                            <h1 className="text-center text-white ">NUESTROS PROGRAMAS</h1>


                        </div>
                    </motion.div>
                </div>

                <div class="container" style={{ zIndex: 3 }}>
         

                        <div className="row justify-content-center my-4">
                   
                        
                      
                            <div className="col-md-2 col-6 img-container">
                                <a href="https://www.youtube.com/watch?v=OS4wVgvr6eY&list=PLU8D9c2LVu38Htz9ofWzF_Rykro8N2ff6">

                                    <img src={boton1} className="my-2 img-fluid mx-auto d-block" width={"90%"}/>
                                </a>
                            </div>
                            <div className="col-md-2 col-6 img-container">
                                <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                    <img src={boton2} className="my-2 img-fluid mx-auto d-block" width={"90%"}/>
                                </a>
                            </div>
                            <div className="col-md-2 col-6 img-container">
                                <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">

                                    <img src={boton3} className="my-2 img-fluid mx-auto d-block" width={"90%"}/>
                                </a>
                            </div>
                            <div className="col-md-2 col-6 img-container">
                                <a href="https://open.spotify.com/show/4JcuAOF4NrNRgw4uOQtIIf">

                                    <img src={boton4} className="my-2 img-fluid mx-auto d-block" width={"90%"}/>
                                </a>
                            </div>
                            <div className="col-md-2 col-6 img-container">
                                <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                    <img src={boton5} className="my-2 img-fluid mx-auto d-block" width={"90%"}/>
                                </a>
                            </div>


                            <div className="col-md-2 col-6 img-container">
                                <a href="https://www.youtube.com/watch?v=UBHhCGDA9rk&list=PLU8D9c2LVu3-y2O1J6fA18UsB0zDU2nzG">


                                    <img src={boton8} className="my-2 img-fluid mx-auto d-block" width={"90%"}/>
                                </a>
                            </div>

                        </div>

                        <div className="col-md-5 container ">


                            <div className="row">

                                <div className="mx-auto my-4">





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