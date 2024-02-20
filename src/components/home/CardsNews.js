import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function CardNews({ titulo, cuerpo, img }) {
    return (
        <>
            <div class="card_news   ">
                <div class="image"><img className="img-fluid" src={img}/></div>
                <div class="content">
                    <a href="#">
                        <span class="title">
                            {titulo}
                        </span>
                    </a>

                    <p class="desc">
                        {cuerpo}
                    </p>

                    <a class="action" href="#">
                        Ver más
                        <span aria-hidden="true">
                            →
                        </span>
                    </a>
                </div>
            </div>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardNews)