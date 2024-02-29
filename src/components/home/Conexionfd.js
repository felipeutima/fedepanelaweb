import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from  "assets/img/Img2.png" 
import CardZoom from "./CardZoom";
import jovenes from  "assets/img/jovenespa.png" 
import mujeres from  "assets/img/mujerespa.png" 
import asociacion from  "assets/img/asociasionespa.png" 
import cedula  from  "assets/img/cedulapa.png" 


function Conexionfd() {
    return (
        <>
            <div className="container-flex py-5 mt-4" style= {{backgroundImage: `url(${img1})`, backgroundAttachment: "fixed"}}>
                <h1 className="text-center text-white ">CONEXIÓN PANELERA</h1>

            </div>
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