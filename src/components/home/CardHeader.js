import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function CardHeader({ img }) {
    return (
        <>
            <div class="card-head">
                <div class="container">
                <img className="img-fluid"
                        src={img}
                        
                    />

                </div>
        
            </div>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardHeader)