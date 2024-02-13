import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CardsSocial from "./CardsSocial";
import Card3d from "./Card3d";


function Conexionfd({titulo, cuerpo}) {
    return (
        <>
        <h1 className="text-center h1-title">CONEXIÓN PANELERA</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-3">

                <Card3d titulo="este es el titulo" ></Card3d>

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