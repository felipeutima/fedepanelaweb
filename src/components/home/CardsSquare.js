import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function CardSquare({ titulo, cuerpo, imagen }) {
    return (
        <>
            <div class="card_square">
                <div class="icon">
                    <img
                        src={imagen}
                        width={"100%"}
                    />
                </div>
                <strong> {titulo}
                </strong>

                <span>{cuerpo}</span>
            </div>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardSquare)