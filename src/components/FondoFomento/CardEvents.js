import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import { Download } from "react-bootstrap-icons";


function CardEvents({ titulo, cuerpo, fecha }) {
    return (
        <>
            <div class="card-events mt-4">
                <div class="header">
                    <div>
                        <a class="title" href="#">
                           {titulo}
                                                   </a>
                        
                    </div>
                    
                </div>
                <p class="description">
                    {cuerpo}
                </p>
                <dl class="post-info">
                    <div class="cr">
                        
                        <dd class="dd">{fecha}</dd>
                    </div>
             
                </dl>
            </div>




        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardEvents)