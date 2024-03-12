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


function Conexionfd() {
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
                            backgroundColor: "#05601f", backgroundAttachment: "fixed", position: "relative",


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


                            <div className="col-md-6" >

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
                                            <button className="btn btn-success text-white fw-bold">Ir a formulario</button>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                            <div className="col-md-6" >
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
                                            <button className="btn btn-success text-white fw-bold">Ir a formulario</button>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                            <div className="col-md-6" >

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
                                            <button className="btn btn-success text-white fw-bold">Ir a formulario</button>
                                        </div>
                                    </div>
                                </motion.div>


                            </div>
                            <div className="col-md-6" >

                                <motion.div style={{ zIndex: "0" }}
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
                                                FEDEPANELA, Banco agrario y Husqvarna se unen para que tu proyecto panelero aumente en productividad, eficacio y tecnificacion.
                                            </p>
                                            <p className="fw-small text-muted mb-0">
                                                Si eres productor productor panelero afiliado a Fedepanela, acercate a cualquiera de las oficinas del Banco
                                                agrario. Presenta tu cedula panelera

                                            </p>
                                            <div className="mb-2 text-center">
                                                <button className="btn btn-success text-white fw-bold">Ir a formulario</button>
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