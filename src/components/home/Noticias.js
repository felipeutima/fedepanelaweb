import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CardsNews from "./CardsNews";

import ejemplo from "assets/img/ejemplo.jpeg"
import ejemplo1 from "assets/img/ejemplo2.png"
import ejemplo2 from "assets/img/ejemplo2.jpg"
import fedecut from "assets/img/section-cut-05.png"


function Noticias() {


    return (


        <> <div className="bg-black">

            este es texto   



            <img href={fedecut} className=" img-fluid" style={{
                zIndex:3,
                position:"absolute"
  
            }} >
            </img >
        </div>
        </>


    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Noticias)