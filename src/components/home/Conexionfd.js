import { connect } from "react-redux"

import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "assets/img/Img2.png"
import CardZoom from "./CardZoom";
import jovenes from "assets/img/jovenespa.png"
import mujeres from "assets/img/mujerespa.png"
import asociacion from "assets/img/asociasionespa.png"
import cedula from "assets/img/cedulapa.png"
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




    return (
        <>
            <div className="container-flex">
                <div className="triangular-section" style={{
                    backgroundColor: "rgb(255, 204, 40)", backgroundAttachment: "fixed", position: "relative", clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)",
                    backgroundSize: "cover",
                    height: "300px",
                    width: "100%",
                    marginTop: "-4%",
                    zIndex: -1
                }}>

                    <h1 className="text-center text-white ">CONEXIÓN PANELERA</h1>
                    <p className="text-center text-black">      {copPrice !== null ? (
                        <p>Precio del dólar en COP: {copPrice}</p>
                    ) : (
                        <p>Cargando...</p>
                    )}</p>

                </div>
            </div>
<<<<<<< HEAD
            <div className="container my-5 py-2">
                    <div className="row">
                        <div className="col-md-6">
                            <CardZoom img={mujeres} link="https://forms.office.com/pages/responsepage.aspx?id=KKko1qEmvECpLcN4dXuXzEeK-qtIAxREkqxLsBBFI6BUQjBNSzBCVUVMMFJBQzBPR0tQOVcwNTBBQSQlQCN0PWcu" titulo="Red de mujeres paneleras" descripcion="La Red de Mujeres Emprendedoras Paneleras es un espacio de FEDEPANELA y el Fondo de Fomento Panelero, que se encuentra a nivel municipal, departamental y nacional en 14 departamentos del país. "/>
                                                        

                        </div>
                        <div className="col-md-6">
                            <CardZoom img={jovenes} link="https://forms.office.com/pages/responsepage.aspx?id=KKko1qEmvECpLcN4dXuXzEeK-qtIAxREkqxLsBBFI6BUNFNBSE1LOVhSVldGV1ZDSFlYSVJNNEs6VCQlQCN0PWcu" titulo="Red de jovenes paneleros" descripcion="INSCRIPCIÓN A RED NACIONAL DE JUVENTUD EMPRENDEDORA PANELERA DE FEDEPANELA - FAS 007"/>
                                                        

                        </div>
                        <div className="col-md-6">
                            <CardZoom img={asociacion} link="https://forms.office.com/pages/responsepage.aspx?id=KKko1qEmvECpLcN4dXuXzEeK-qtIAxREkqxLsBBFI6BUNzJLRVRRRjg4N0paQVlURkFNNjQwTUJTRCQlQCN0PWcu" titulo="Red de asociaciones paneleras" descripcion="RED DE AGROEMPRESAS PANELERAS"/>
                                                        

                        </div>
                        <div className="col-md-6">
                            <CardZoom img={cedula} descripcion="Sobre los Beneficios de los afiliados a Fedepanela"titulo="Cedula Panelera-Fedepanela"/>
                                                        
=======
            <div className="container-flex my-5 py-2" >

                <div className="container">
                    <div className="row  px-5">


                        <div className="col-md-6" style={{ marginTop: "-8%" }}>

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
                        <div className="col-md-6" style={{ marginTop: "2%" }}>
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
                        <div className="col-md-6" style={{ marginTop: "-8%" }}>

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
                        <div className="col-md-6" style={{ marginTop: "2%" }}>

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

>>>>>>> 15ff6f8830b9f4bbf27b98d31879bab69773cd0e

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