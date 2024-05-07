import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from 'react';


import { motion } from "framer-motion"



function Services({ programas }) {

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

                            <h1 className="text-center text-white ">NUESTROS PROGRAMAS DIGITALES</h1>
S

                        </div>
                    </motion.div>
                </div>

                <div class="container" style={{ zIndex: 3 }}>


                    <div className="row justify-content-center my-4">


                        {programas && programas.map((post, index) => (


                            <div className="col-md-2 col-6 img-container">
                                <a href={post.url}>

                                    <img src={post.thumbnail} className="my-2 img-fluid mx-auto d-block" width={"90%"} />
                                </a>
                            </div>
                        ))}




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