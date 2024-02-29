import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function CardHeader({ img, link }) {
    return (
        <>
            
            <a href={link} target="blank">

                

                    <img className="img-fluid "
                        src={img} 


                    />


                

                </a>
            
        
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardHeader)