
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Form from 'react-bootstrap/Form';
import CardAtention from "components/Nuestra Fede/CardAtention";
import { EnvelopeFill, ClockFill, Check, HouseFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function QuejasReclamos() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Layout>

            <Navbar />


            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>
                <h1 className="text-center h1-title my-5">Quejas y reclamos</h1>
                <div className="row">
                    <div class="col-lg-6"><div ><h2 class="fw-bolder h2-title">A través del formato de quejas y reclamos se atenderán inquietudes, sugerencias, preguntas o reclamos del público en general.</h2>
                        <div className="col-md-6 mx-auto my-4">
                            <CardAtention titulo="Fedepanela"
                                cuerpo="Carrera 49B No. 91 - 48
                                Barrio La Castellana
                                "
                                i={<HouseFill />}
                                cuerpo2="Bogotá – Colombia
                                Telefonos (57-1) 6 22 20 66" />

                        </div>
                        <div className="col-md-6 mx-auto my-4">
                            <CardAtention titulo="Horarios de atención al público:"
                                cuerpo="Lunes a viernes de 8:30 am a 5:00 pm, jornada continua"
                                i={<ClockFill className="mx-auto" />}
                               />
                        </div>
                        <div className="col-md-6 mx-auto my-4">
                            <CardAtention titulo="Correo para notificaciones judiciales"
                                cuerpo="juridica@fedepanela.org.co"
                                i={<EnvelopeFill />}
                                />

                        </div>
                        <div className="col-md-6 mx-auto my-4">
                            <CardAtention titulo="Tu opinión es importante para nosotros."
                                cuerpo="Contacta nuestro buzón de quejas y reclamos en quejasyreclamos@fedepanela.org.co"
                                i={<Check />}
                                />

                        </div>
                    </div>
                    </div>


                    <div className="col-md-6">


                        <Form className="form_container">
                            <h1 className="text-center h2-title ">Formulario de Quejas y reclamos</h1>


                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label>Fecha*</Form.Label>
                                <Form.Control type="date" placeholder="Digita tu Nombre" />

                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label>Nombre y Apellido*</Form.Label>
                                <Form.Control type="text" placeholder="Digita tu Nombre" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Cedula o NIT</Form.Label>
                                <Form.Control type="text" placeholder="Digita tu email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="text" placeholder="Digita tu email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Telefono/Celular</Form.Label>
                                <Form.Control type="int" placeholder="Digita tu numero de contacto" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Digita tu numero de contacto" />
                            </Form.Group>
                            <Form.Select aria-label="Default select example">
                                <option disabled>Escoja el tipo</option>
                                <option value="1">Solicitud</option>
                                <option value="2">Petición</option>
                                <option value="3">Queja</option>
                                <option value="3">Reclamo</option>
                                <option value="3">Denuncia</option>

                            </Form.Select>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="mt-2">Solicitud</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Ingrese la descripción" />
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Subida de archivos</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>

                            <Form.Check type="checkbox" label={
                                    <>
                                        Acepto el <a href="#" className="a-accordion my-2" onClick={handleShow}>almacenamiento, uso y tratamiento de mis datos personales</a>
                                    </>
                                } />
 

                            <Button className="sign-in_btn btn-success mt-4 " type="submit" >
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
                    </div>
                </div>

            </div>






            <Footer />


        </Layout>
    )
}
export default QuejasReclamos