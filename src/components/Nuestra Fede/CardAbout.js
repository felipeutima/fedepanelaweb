import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Download } from "react-bootstrap-icons";


function CardAbout({ titulo, cuerpo, imagen }) {
    return (
        <>
            <div class="card_about mx-auto">
                <div class="face face1">
                <h3 className="">{titulo}</h3>
                    <div class="content py-4">
                        <img class="image" src={imagen}/>
                            
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                        <p className="text-muted"> {cuerpo}</p>
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