import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CardsNews from "./CardsNews";



function Noticias() {


    return (
        <>

            <h1 className="text-center my-2">Noticias</h1>
            <>
                <div className="container   mb-5">

                    <Carousel className="mt-3">
                        <Carousel.Item>
                            

                            <div className="row" style={{padding:"0 0 0 0" }}>
                                <div className="col-md-3">
                                    <CardsNews titulo="este es titulo" cuerpo="este es el cuerpo" ></CardsNews>
                                </div>
                                <div className="col-md-3">
                                    <CardsNews titulo="este es titulo" cuerpo="este es el cuerpo" ></CardsNews>
                                </div>
                                <div className="col-md-3">
                                    <CardsNews titulo="este es titulo" cuerpo="este es el cuerpo" ></CardsNews>
                                </div>
                                <div className="col-md-3">
                                    <CardsNews titulo="este es titulo" cuerpo="este es el cuerpo" ></CardsNews>
                                </div>


                 
                            </div>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>

                            <div className="row">
                                <div className="col-md-3">
                                    <CardsNews titulo="este es titulo" cuerpo="este es el cuerpo" ></CardsNews>
                                </div>
                                <div className="col-md-3">
                                    <CardsNews titulo="este es titulo" cuerpo="este es el cuerpo" ></CardsNews>
                                </div>
                                <div className="col-md-3">
                                    <CardsNews titulo="este es titulo" cuerpo="este es el cuerpo" ></CardsNews>
                                </div>
                                <div className="col-md-3">
                                    <CardsNews titulo="este es titulo" cuerpo="este es el cuerpo" ></CardsNews>
                                </div>

                 
                            </div>
                            <Carousel.Caption>

                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Noticias)