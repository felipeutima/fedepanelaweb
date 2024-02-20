import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Download } from "react-bootstrap-icons";


function CardServices({ titulo, cuerpo, icon }) {
    return (
        <>
            <div class="card-services mt-3">
                <a class="card1" href="#">
                    <p className="mt-4">{titulo}</p>
                    <p class="small ">{cuerpo}</p>
                    <div class="go-corner" href="#">
                        <div class="go-arrow">
                            {icon}
                        </div>
                    </div>
                </a>
            </div>





        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardServices)