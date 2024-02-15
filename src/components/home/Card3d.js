import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function Card3d({ titulo }) {
    return (
        <>
            <div class="cards">
                <figure class="card">
                    <figcaption class="card_title">{titulo}</figcaption>
                </figure>
            </div>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Card3d)