import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Download } from "react-bootstrap-icons";


function CardAtention({ titulo, cuerpo, cuerpo2 , i}) {
    return (
        <>
            <div class="card-atention">
                <button class="dismiss" type="button">×</button>
                <div class="header">

                    <div class="div_image_v">
                        <div class="image">
                            <svg viewBox="0 0 24 24" >{i}</svg>
                        </div>
                    </div>
                    <div class="content">
                        <span class="title">{titulo}</span>
                        <p class="message">{cuerpo}</p>
                        <p class="message mt-2">{cuerpo2}</p>
                    </div>

                </div>
            </div>





        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardAtention)