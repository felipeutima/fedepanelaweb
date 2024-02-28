import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function CardHeader({ img, link }) {
    return (
        <>
            <div class="card-head">
            <a href={link} target="blank">

                <div class="container">

                    <img className="img-fluid my-auto"
                        src={img} 


                    />


                </div>

                </a>
            </div>
        
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardHeader)