import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GeoAltFill, TelephoneFill } from "react-bootstrap-icons";

import img1 from "assets/img/Img1.png"

function Contacto() {
    return (

        <> <div className="container-flex " style={{ backgroundImage: `url(${img1})`, marginBottom: "100px", backgroundAttachment: "fixed" }}>
            <h1 className="text-center text-white py-5">Contacto</h1>
        </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div class="info">
                                <div class="address">
                                    <i class="bi bi-geo-alt "><GeoAltFill /></i>
                                    <h4 class="d-inline">Federacion Nacional de Productores de Panela
                                        "FEDEPANELA"</h4>
                                    <p class="direccion">Carrera 49B No. 91 - 48
                                        Barrio La Castellana
                                        Bogotá – Colombia</p>
                                    <a href="https://wa.me/573164651419 "> </a>
                                </div>

                                <div class="phone">
                                    <a href="tel:+573164651419"> <i class="bi bi-phone "> <TelephoneFill /></i> </a>
                                    <h4 class="d-inline">Celular:</h4>
                                    <p> +57 3164651419</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.061506702177!2d-74.063003!3d4.680106000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aec00dd5713%3A0x2d5fb2032d63c1f2!2sFedepanela!5e0!3m2!1ses-419!2sco!4v1708419526644!5m2!1ses-419!2sco" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-md-6">


                        <Form className="form_container">
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label>Nombre y Apellido*</Form.Label>
                                <Form.Control type="text" placeholder="Digita tu Nombre" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Digita tu email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Telefono/Celular</Form.Label>
                                <Form.Control type="int" placeholder="Digita tu numero de contacto" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Asunto</Form.Label>
                                <Form.Control type="text" placeholder="Describe el asunto" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Ingrese la descripción" />
                            </Form.Group>

                            <Button className="sign-in_btn btn-success " type="submit" >
                                Enviar
                            </Button>
                        </Form>
                    </div>
                </div>

            </div>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Contacto)