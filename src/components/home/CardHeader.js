import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function CardHeader({ img, link }) {
    return (
        <><a href={link} target="blank">
            <div class="card-head">

                <div class="container">

                    <img className="img-fluid my-auto"
                        src={img} 


                    />


                </div>


            </div>
        </a>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardHeader)