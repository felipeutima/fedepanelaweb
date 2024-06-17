import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';


import { motion } from "framer-motion"
import { Link } from "react-router-dom";

import { ArrowRightCircle } from "react-bootstrap-icons";


function Services({ programas, boletinesFirst }) {

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

                <div className="container-flex">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className=""
                            style={{
                                backgroundColor: "rgba(5, 96, 31, 0.7)",
                                backgroundAttachment: "fixed",
                                position: "relative",
                                backgroundSize: "cover",
                                height: "150px",
                                width: "100%",
                                marginTop: "0%",
                                zIndex: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                boxShadow: `
          0px 20px 20px -20px rgba(0, 0, 0, 0.5) inset, 
          20px 0px 20px -20px rgba(0, 0, 0, 0.5) inset, 
          -20px 0px 20px -20px rgba(0, 0, 0, 0.5) inset, 
          0px -20px 20px -20px rgba(0, 0, 0, 0.5) inset
        `
                            }}
                        >
                            <div className="row" style={{ width: "100%" }}>
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <h1 className="text-center text-white">BOLETINES</h1>
                                </div>
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <h1 className="text-center text-white">NUESTROS PROGRAMAS  <br></br> DIGITALES</h1>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div class="container" style={{ zIndex: 3 }}>


                    <div className="row justify-content-center my-4">

                        <div className="col-md-6">
                            <div className="row">

                                {boletinesFirst && boletinesFirst.map((post, index) => (


                                    <div className="col-md-6 col-12">

                                        <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >

                                            <div className=" d-flex flex-column align-items-center">

                                                {post.categoria == "news" ? <h2 className="h2-title text-center">Boletines de Noticias</h2> : <h2 className="h2-title text-center">Boletines de Tendencia</h2>}
                                                <Link to={post.url} target="blank" className="mx-auto">
                                                    <div className="image-container">
                                                        <img src={post.thumbnail} className="img-fluid my-2" style={{ width: isSmallScreen ? "100%" : "70%" }} alt="Boletin"></img>
                                                    </div>
                                                </Link>
                                                <Link to={post.categoria == "news" ? "/news" : "/tendencias"} target="blank" className="mx-auto" style={{ textDecoration: "none" }}>
                                                    <button>
                                                        <span>Ver más</span>
                                                        <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                            <ArrowRightCircle color="white" size={"100%"} />
                                                        </svg>
                                                    </button>
                                                </Link>



                                            </div>

                                        </motion.div>

                                    </div>
                                ))}




                            </div>
                   
                                    <Link to="/precios" className="mx-auto my-4" style={{ textDecoration: "none" }}>
                                        <button className="mx-auto my-4">
                                            <span>Ver Boletines de precios</span>
                                            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">

                                                <ArrowRightCircle color="white" size={"100%"} />
                                            </svg>
                                        </button>
                                    </Link>
                          
                        </div>
                        <div className="col-md-6">
                            <div className=" container">

                                <div className=" row">


                                    {programas && programas.map((post, index) => (


                                        <div className="col-md-4 col-6 img-container">
                                            <a href={post.url}>

                                                <img src={post.thumbnail} className="my-2 img-fluid mx-auto d-block" width={"90%"} />
                                            </a>
                                        </div>
                                    ))}
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