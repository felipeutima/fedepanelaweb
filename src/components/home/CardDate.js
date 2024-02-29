import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";


function CardEvents({ fecha, titulo }) {
    return (
        <>
            <div class="card-date mt-2">
                <div class="bar"></div>
                <div class="card_form">
                    <Card className="mx-1" >
                        <div className="container">
                            <div className="row fw-bold "> <p className="text-black text-center">8</p> </div>
                            <div className="row fw-bold " style={{ backgroundColor: " rgb(255, 204, 40)", borderTop:"solid 1px black" }}>

                                <p className="text-black text-center">Feb</p>
                            </div>



                        </div>
                    </Card>
                </div>
                <div class="card_data">
                    <div class="data">
                        <div class="text">
                            <label class="text_m"><a className="a-events" >{titulo}</a></label> 
                            

                        </div>
                    </div>

                </div>
            </div>

        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CardEvents)