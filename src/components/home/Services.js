import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search, Folder, Book, PersonFill, Briefcase, QuestionCircle } from "react-bootstrap-icons";

function Services() {
    return (

        <>
            <div class="container-fluid py-5">
                <div class="container pt-5 pb-3">

                    <div className="col-md-6">


                        <div class="row ">
                            <h6 class="text-success text-uppercase" >Accesos rápidos</h6>

                            <div class=" col-md-4 col-12  mb-4">
                                <div class="service-item bg-white text-center mb-2 py-5 px-4">
                                    <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"><Search size={30} /></i>
                                    <h5 class="mb-2">Ley de transparencia</h5>

                                </div>
                            </div>
                            <div class=" col-md-4 col-12 mb-4">
                                <div class="service-item bg-white text-center mb-2 py-5 px-4">
                                    <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"><Folder size={30} /></i>
                                    <h5 class="mb-2">Directorio</h5>

                                </div>
                            </div>
                            <div class=" col-md-4 col-12 mb-4">
                                <div class="service-item bg-white text-center mb-2 py-5 px-4">
                                    <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"><Book size={30} /></i>
                                    <h5 class="mb-2">Normatividad</h5>

                                </div>
                            </div>


                        </div>
                        <div class="row ">

                            <div class=" col-md-4 col-12  mb-4">
                                <div class="service-item bg-white text-center mb-2 py-5 px-4">
                                    <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"><PersonFill size={30} /></i>
                                    <h5 class="mb-2">Atención al ciudadano </h5>

                                </div>
                            </div>
                            <div class=" col-md-4 col-12 mb-4">
                                <div class="service-item bg-white text-center mb-2 py-5 px-4">
                                    <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"><Briefcase size={30} /></i>
                                    <h5 class="mb-2">Ofertas de empleo</h5>

                                </div>
                            </div>
                            <div class=" col-md-4 col-12 mb-4">
                                <div class="service-item bg-white text-center mb-2 py-5 px-4">
                                    <i class="fa fa-2x fa-ticket-alt mx-auto mb-4"><QuestionCircle size={30} /></i>
                                    <h5 class="mb-2">Preguntas frecuentes</h5>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-6">

                        <div className="row">


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

})(Services)