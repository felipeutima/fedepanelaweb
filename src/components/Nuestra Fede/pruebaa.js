import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Download } from "react-bootstrap-icons";


function CardDownload({ titulo, cuerpo, doc }) {
    return (
        <>

            <div class="card-download">
                <div class="header">
                    <div class="image">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#000000" d="M20 7L9.00004 18L3.99994 13"></path> </g></svg>
                    </div>
                    <div class="content">
                        <span class="title">{titulo}</span>
                        <p class="message">{cuerpo}</p>
                    </div>
                    <div class="actions">
                        <a href={doc}>
                            <button type="button" class="history"> <Download size={20} /></button>
                        </a>
                    </div>
                </div>
            </div>





        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardDownload)