import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function CardAtention({ titulo, cuerpo, cuerpo2 , i}) {
    return (
        <>
            <div class="card-atention">
                <button class="dismiss" type="button">×</button>
                <div class="header">

                    <div class="div_image_v">
                        <div class="image align-self-center">
                            {i}
                        </div>
                    </div>
                    <div class="content">
                        <span class="title">{titulo}</span>
                        <p class="message text-center">{cuerpo}</p>
                        <p class="message mt-2 text-center">{cuerpo2}</p>
                    </div>

                </div>
            </div>





        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardAtention)