import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function CardNews({titulo, cuerpo}) {
    return (
        <>
            <div class="card_news">
                <div class="img">
                    <div class="save">
  
                    </div>
                </div>

                <div class="text">
                    <p class="h3"> {titulo} </p>
                    <p class="p"> {cuerpo} </p>

                    <div class="icon-box">
                       
                        <p class="span">Fecha
                        </p></div>
                </div>
            </div>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardNews)