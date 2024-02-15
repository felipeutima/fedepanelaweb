import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Download } from "react-bootstrap-icons";


function CardAbout({ titulo, cuerpo, imagen }) {
    return (
        <>
            <div class="card_about">
                <div class="face face1">
                    <div class="content">
                        <img style="  width: 130px;" class="image" src={imagen}/>
                            <h3>{titulo}</h3>
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p> {cuerpo}</p>
                    </div>
                </div>
            </div>





        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardAbout)