import { connect } from "react-redux"

import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "assets/img/Img2.png"
import CardZoom from "./CardZoom";
import jovenes from "assets/img/jovenespa.png"
import mujeres from "assets/img/mujerespa.png"
import asociacion from "assets/img/asociasionespa.png"
import cedula from "assets/img/cedulapa.png"
import bgfooter from "assets/img/mazeyellow.svg"
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
function Conexionfd() {

    const [copPrice, setCopPrice] = useState(null);

    useEffect(() => {
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
            .then(response => response.json())
            .then(data => {
                const copPrice = data.rates.COP;
                setCopPrice(copPrice);
            })
            .catch(error => console.error('Error al obtener el precio del dólar:', error));
    }, []);


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
            <div className="color "  >


                <div className="container-flex" >
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }} >
                        <div className="triangular-section" style={{
                            backgroundColor: "rgb(255, 204, 40)", backgroundAttachment: "fixed", position: "relative"
                            , clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0% 100%)",
                            backgroundSize: "cover",
                            height: "300px",
                            width: "100%",
                            marginTop: "-4%",
                            zIndex: 0,
                            boxShadow: `
                            0px 20px 20px -20px rgba(0, 0, 0, 0.5) inset, 
                            20px 0px 20px -20px rgba(0, 0, 0, 0.5) inset, 
                            -20px 0px 20px -20px rgba(0, 0, 0, 0.5) inset, 
                            0px -20px 20px -20px rgba(0, 0, 0, 0.5) inset`


                        }}>

                            <h1 className="text-center text-white ">CONEXIÓN PANELERA</h1>
                            <p className="text-center text-black">      {copPrice !== null ? (
                                <p>Precio del dólar en COP: {copPrice}</p>
                            ) : (
                                <p>Cargando...</p>
                            )}</p>

                        </div>
                    </motion.div>
                </div>





                <div className="container-flex py-2" style={{
                    backgroundImage:  {/* `url(${bgfooter})`*/},
                    backgroundSize: 'cover',
                    backgroundRepeat: 'repeat',
                    width: "100%",
                    marginTop: "-4%"
                }}>

                    <div className="container">
                        <div className="row  px-5">


                            <div className="col-md-6" style={{ marginTop: "0%" }}>

                                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                    <div className="card carta mx-auto" >
                                        <div style={{ position: "relative" }}>
                                            <img className="card-img-top" src={mujeres} alt="Card image cap" />
                                            <h5 className="card-title" style={{
                                                position: "absolute", bottom: "0", left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: "rgba(255,255,255,0.8)",
                                                padding: "5px 10px",
                                                borderRadius: "5px"
                                            }}>Red de mujeres paneleras</h5>
                                        </div>
                                        <div className="card-body">

                                            <p className="fw-small text-muted mb-0">La Red de Mujeres Emprendedoras Paneleras es un espacio de FEDEPANELA y el Fondo de Fomento Panelero, que se encuentra a nivel municipal, departamental y nacional en 14 departamentos del país.</p>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                            <div className="col-md-6" style={{ marginTop: "8%" }}>
                                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                    <div className="card carta mx-auto" >
                                        <div style={{ position: "relative" }}>
                                            <img className="card-img-top" src={jovenes} alt="Card image cap" />
                                            <h5 className="card-title" style={{
                                                position: "absolute", bottom: "0", left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: "rgba(255,255,255,0.8)",
                                                padding: "5px 10px",
                                                borderRadius: "5px"
                                            }}>Red de mujeres paneleras</h5>
                                        </div>
                                        <div className="card-body">

                                            <p className="fw-small text-muted mb-0">La Red de Mujeres Emprendedoras Paneleras es un espacio de FEDEPANELA y el Fondo de Fomento Panelero, que se encuentra a nivel municipal, departamental y nacional en 14 departamentos del país.</p>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                            <div className="col-md-6" style={{ marginTop: "0" }}>

                                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                    <div className="card carta mx-auto" >
                                        <div style={{ position: "relative" }}>
                                            <img className="card-img-top" src={mujeres} alt="Card image cap" />
                                            <h5 className="card-title" style={{
                                                position: "absolute", bottom: "0", left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: "rgba(255,255,255,0.8)",
                                                padding: "5px 10px",
                                                borderRadius: "5px"
                                            }}>Red de mujeres paneleras</h5>
                                        </div>
                                        <div className="card-body">

                                            <p className="fw-small text-muted mb-0">La Red de Mujeres Emprendedoras Paneleras es un espacio de FEDEPANELA y el Fondo de Fomento Panelero, que se encuentra a nivel municipal, departamental y nacional en 14 departamentos del país.</p>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                            <div className="col-md-6" style={{ marginTop: "8%" }}>

                                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                    <div className="card carta mx-auto" >
                                        <div style={{ position: "relative" }}>
                                            <img className="card-img-top" src={cedula} alt="Card image cap" />
                                            <h5 className="card-title" style={{
                                                position: "absolute", bottom: "0", left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: "rgba(255,255,255,0.8)",
                                                padding: "5px 10px",
                                                borderRadius: "5px"
                                            }}>Red de mujeres paneleras</h5>
                                        </div>
                                        <div className="card-body">

                                            <p className="fw-small text-muted mb-0">La Red de Mujeres Emprendedoras Paneleras es un espacio de FEDEPANELA y el Fondo de Fomento Panelero, que se encuentra a nivel municipal, departamental y nacional en 14 departamentos del país.</p>
                                        </div>
                                    </div>
                                </motion.div>



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

})(Conexionfd)