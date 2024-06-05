import { connect } from "react-redux"

import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import jovenes from "assets/img/jovenespa.png"
import mujeres from "assets/img/mujerespa.png"
import asociacion from "assets/img/asociasionespa.png"
import cedula from "assets/img/cedulapa.png"
import bg1 from "assets/img/bg1.jpg"
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"


function Conexionfd({ conexion }) {
    const [copPrice, setCopPrice] = useState(null);



    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            // Reemplaza 300 con el píxel determinado en el que quieres que aparezca el componente
            setIsVisible(window.scrollY >= 1200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);









    return (
        <>
            <div className="container-flex " style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                padding: '100px auto'
            }} >


                <div className="overlay"
                    style={{
                        position: "absolute", top: 0, left: 0,
                        width: "100%", height: "100%",
                        backgroundColor: "rgba(355, 355, 355, 0.4)"
                    }} />


                <div className="container-flex"   >
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }} >
                        <div className="triangular-section" style={{
                            backgroundColor: "rgba(5, 96, 31,0.7)", backgroundAttachment: "fixed", position: "relative",


                            /*clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0% 100%)"*/
                            backgroundSize: "cover",
                            height: "200px",
                            width: "100%",
                            marginTop: "0%",
                            zIndex: 0,
                            boxShadow: `
                            0px 20px 20px -20px rgba(0, 0, 0, 0.5) inset, 
                            20px 0px 20px -20px rgba(0, 0, 0, 0.5) inset, 
                            -20px 0px 20px -20px rgba(0, 0, 0, 0.5) inset, 
                            0px -20px 20px -20px rgba(0, 0, 0, 0.5) inset`


                        }}>

                            <h1 className="text-center text-white ">CONEXIÓN PANELERA</h1>


                        </div>
                    </motion.div>
                </div>





                <div className="container-flex py-2" >

                    <div className="container">
                        <div className="row  px-5">

                            {conexion && conexion.map((post, index) => (


                                <div className="col-md-6 my-2" >

                                    <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                        <div className="card carta mx-auto" >
                                            <div style={{ position: "relative" }}>
                                                <img className="card-img-top" src={post.thumbnail} alt="Card image cap" />
                                                <h5 className="card-title text-center" style={{
                                                    position: "absolute", bottom: "0", left: "50%",
                                                    transform: "translateX(-50%)",
                                                    backgroundColor: "rgba(255,255,255,0.8)",
                                                    padding: "5px 10px",
                                                    borderRadius: "5px"
                                                }}>{post.titulo}</h5>
                                            </div>
                                            <div className="card-body">

                                                <p className="fw-small text-muted mb-0">{post.description}</p>
                                            </div>
                                            <div className="mb-2 text-center">
                                                <a href={post.url ? post.url : post.document} target="blank">
                                                    <button className="btn btn-success text-white fw-bold">{post.tituloBoton}</button>
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>


                                </div>
                            ))}






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

})(Conexionfd)