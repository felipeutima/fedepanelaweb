import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function CardSocial({ titulo, cuerpo }) {
    return (
        <>
            <div class="card_social">
                <div class="card-img"> </div>

                <div class="card-info">
                    <p class="title">{titulo}</p>
                    <p class="subtitle">{cuerpo}</p>
                </div>
            </div>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardSocial)