import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function CardZoom({ img , titulo, descripcion}) {
    return (
        <>
            <div class="cardzoom">
                <img
                    class="card__background"
                    src={img}
                    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                    width="1920"
                    height="2193"
                />
                <div class="card__content | flow">
                    <div class="card__content--container | flow">
                        <h2 class="card__title">{titulo}</h2>
                        <p class="card__description">
                            {descripcion}
                        </p>
                    </div>
                    <button class="card__button">Read more</button>
                </div>
            </div>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardZoom)