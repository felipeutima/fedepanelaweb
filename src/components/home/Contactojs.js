import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import { motion } from "framer-motion"

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import img1 from "assets/img/Img1.png"

function Contactojs() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (


        <>

            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }} >
                            <div className="row">
                                <div class="info">
                                    <div class="address">
                                        <i class="bi bi-geo-alt "><GeoAltFill /></i>
                                        <h4 class="d-inline">Federacion Nacional de Productores de Panela
                                        </h4>
                                        <p class="direccion">Carrera 49B No. 91 - 48
                                            Barrio La Castellana
                                            Bogotá – Colombia</p>
                                        <a href="https://wa.me/573164651419 "> </a>
                                    </div>

                                    <div class="phone">
                                        <a href="tel:+573164651419"> <i class="bi bi-phone "> <TelephoneFill /></i> </a>
                                        <h4 class="d-inline">Telefono:</h4>
                                        <p> 6222066 </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5 mb-3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.061506702177!2d-74.063003!3d4.680106000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aec00dd5713%3A0x2d5fb2032d63c1f2!2sFedepanela!5e0!3m2!1ses-419!2sco!4v1708419526644!5m2!1ses-419!2sco" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </motion.div>

                    </div>
                    <div className="col-md-6">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }} >

                            <Form className="form_container ">
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
                                    <Form.Control type="int" placeholder="Digita tu numero de c" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Asunto</Form.Label>
                                    <Form.Control type="text" placeholder="Describe el asunto" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Ingrese la descripción" />
                                </Form.Group>
                                <Form.Check
                                    type="checkbox"

                                    id="terms" >Acepto el
                                    <a className="a-accordion my-2" onClick={handleShow}> almacenamiento, uso y tratamiento de mis datos personales</a>  

                                </Form.Check>

                                <Button className="sign-in_btn btn-success " type="submit" >
                                    Enviar
                                </Button>

              

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Uso de datos</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body><p>En cumplimiento con la ley 1581 de 2012 y el decreto reglamentario 1377 de 2013, informamos que mediante el registro de sus datos personales en el presente formulario <strong>FEDEPANELA - FONDO DE FOMENTO PANELERO </strong>requiere su autorización para la recolección, almacenamiento, uso y tratamiento de los datos personales con la finalidad de realizar las solicitudes, peticiones, quejas, reclamos y denuncias. Sus datos serán tratados conforme nuestra política de tratamiento de información, publicada en <a href="www.fedepanela.org.co" target="_blank" rel="noopener">www.fedepanela.org.co</a> y <a href="http://www.sipa.org.co" target="_blank" rel="noopener sponsored">www.sipa.org.co</a>.  </p>
                                    <div><p>Por lo anterior con el ingreso de la información en este formulario y su aceptación expresa, manifiesta que he sido informado que como Titular de información tiene derecho a conocer, actualizar, rectificar y revocar la autorización de sus datos personales y/o solicitar la supresión en los casos en que sea procedente y adicionalmente que conoce que el canal dispuesto por FONDO DE FOMENTO PANELERO para atención a sus solicitudes es el correo electrónico <a href="mailto:fedeprotecciondatos@fedepanela.org.co" target="_blank" rel="noopener">fedeprotecciondatos@fedepanela.org.co</a> y <a href="mailto:ffpprotecciondatos@fedepanela.org.co" target="_blank" rel="noopener">ffpprotecciondatos@fedepanela.org.co </a> </p> </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cerrar
                                        </Button>
                     
                                    </Modal.Footer>
                                </Modal>
                            </Form>
                        </motion.div>



                    </div>
                </div>

            </div>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Contactojs)