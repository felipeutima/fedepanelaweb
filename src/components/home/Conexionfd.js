import { connect } from "react-redux"
import axios from 'axios';
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
                            {copPrice !== null ? (
                                <p className="text-center text-black lead">Precio del dólar hoy en COP: {copPrice} $</p>
                            ) : (
                                <p>Cargando...</p>
                            )}

                        </div>
                    </motion.div>
                </div>





                <div className="container-flex py-2" style={{
                    backgroundImage: {/* `url(${bgfooter})`*/ },
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
                                            <h5 className="card-title text-center" style={{
                                                position: "absolute", bottom: "0", left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: "rgba(255,255,255,0.8)",
                                                padding: "5px 10px",
                                                borderRadius: "5px"
                                            }}>Red de mujeres paneleras</h5>
                                        </div>
                                        <div className="card-body">

                                            <p className="fw-small text-muted mb-0">La Red de Mujeres Emprendedoras Paneleras es un espacio de FEDEPANELA y el Fondo de Fomento Panelero, que se encuentra a nivel municipal, departamental y nacional en 14 departamentos del país. El objetivo de esta red es crear espacios para que el trabajo y liderazgo de las mujeres en la cadena productiva y en el gremio sea reconocido y valorado. </p>
                                        </div>
                                        <div className="mb-2 text-center">
                                            <button className="btn btn-warning text-white fw-bold">Ir a formulario</button>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                            <div className="col-md-6" style={{ marginTop: "8%" }}>
                                <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                    <div className="card carta mx-auto" >
                                        <div style={{ position: "relative" }}>
                                            <img className="card-img-top" src={asociacion} alt="Card image cap" />
                                            <h5 className="card-title text-center" style={{
                                                position: "absolute", bottom: "0", left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: "rgba(255,255,255,0.8)",
                                                padding: "5px 10px",
                                                borderRadius: "5px"
                                            }}>Red de asociaciones paneleras</h5>
                                        </div>
                                        <div className="card-body">

                                            <p className="fw-small text-muted mb-0">La Red de Empresas Paneleras es un espacio de FEDEPANELA y el Fondo de Fomento Panelero, que se encuentra a nivel municipal, departamental y nacional en 14 departamentos del país. El objetivo de esta red es fortalecer la asociatividad y promover espacios comerciales y productivos para las mismas, con el fin de mejorar la economía de las familias paneleras. </p>
                                        </div>
                                        <div className="mb-2 text-center">
                                            <button className="btn btn-warning text-white fw-bold">Ir a formulario</button>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                            <div className="col-md-6" style={{ marginTop: "0" }}>

                                <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 1 }}  >
                                    <div className="card carta mx-auto" >
                                        <div style={{ position: "relative" }}>
                                            <img className="card-img-top" src={jovenes} alt="Card image cap" />


                                            <h5 className="card-title text-center" style={{
                                                position: "absolute", bottom: "0", left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: "rgba(255,255,255,0.8)",
                                                padding: "5px 10px",
                                                borderRadius: "5px"
                                            }}>Red de Jovenes paneleros</h5>
                                        </div>
                                        <div className="card-body">

                                            <p className="fw-small text-muted mb-0">La Red de Juventud Emprendedora Panelera es un espacio de FEDEPANELA y el Fondo de Fomento Panelero, que se encuentra a nivel municipal, departamental y nacional en 14 departamentos del país. El objetivo de esta red es crear espacios fortalecer el relevo generacional y el trabajo intergeneracional en la cadena productiva y en el gremio panelero. </p>
                                        </div>
                                        <div className="mb-2 text-center">
                                            <button className="btn btn-warning text-white fw-bold">Ir a formulario</button>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                            <div className="col-md-6" style={{ marginTop: "8%" }}>

                                <motion.div style={{zIndex:"0"}}
                                 initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1, duration: 1 }}  >
                                    <div className="card carta mx-auto" >
                                        <div style={{ position: "relative" }}>
                                            <img className="card-img-top" src={cedula} alt="Card image cap" />
                                            <h5 className="card-title text-center" style={{
                                                position: "absolute", bottom: "0", left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: "rgba(255,255,255,0.8)",
                                                padding: "5px 10px",
                                                borderRadius: "5px"
                                            }}>Cedula Panelera Fedepanela</h5>
                                        </div>
                                        <div className="card-body">

                                            <p className="fw-small text-muted mb-0">
                                                <h3 className="text-center">Beneficios de los afiliados a Fedepanela</h3>
                                                <ul>
                                                    <li>Georreferenciación y cálculos de productividad por área en las fincas.</li>
                                                    <li>Toma de muestras de suelos y gestión de las recomendaciones específicas para el cultivo.</li>
                                                    <li>Monitoreo de Diatraea (Barrenador de la caña) y enlace con laboratorios de control biológico.</li>
                                                    <li>Recomendaciones de manejo.</li>
                                                </ul>
                                            </p>
                                            <div className="mb-2 text-center">
                                                <button className="btn btn-warning text-white fw-bold">Ir a formulario</button>
                                            </div>
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