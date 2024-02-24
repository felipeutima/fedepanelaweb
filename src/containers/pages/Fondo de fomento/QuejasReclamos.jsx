
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import Form from 'react-bootstrap/Form';
import CardAtention from "components/Nuestra Fede/CardAtention";
import { EnvelopeFill, ClockFill, GeoAltFill, HouseFill } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';


function QuejasReclamos() {

    return (
        <Layout>

            <Navbar />


            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>
                <h1 className="text-center h1-title my-5">Quejas y reclamos</h1>
                <div className="row">
                    <div class="col-lg-6"><div ><h2 class="fw-bolder h2-title">A través del formato de quejas y reclamos se atenderán inquietudes, sugerencias, preguntas o reclamos del público en general.</h2>
                        <div className="col-md-6">
                            <CardAtention titulo="Fedepanela"
                                cuerpo="Carrera 49B No. 91 - 48
                                Barrio La Castellana
                                "
                                i={<EnvelopeFill />}
                                cuerpo2="Bogotá – Colombia
                                Telefonos (57-1) 6 22 20 66" />

                        </div>
                        <div className="col-md-6">
                            <CardAtention titulo="Horarios de atención al público:"
                                cuerpo="Lunes a viernes de 8:30 am a 5:00 pm, jornada continua"
                                i={<ClockFill className="mx-auto" />}
                               />
                        </div>
                        <div className="col-md-6">
                            <CardAtention titulo="Correo para notificaciones judiciales"
                                cuerpo="juridica@fedepanela.org.co"
                                i={<EnvelopeFill />}
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
                            <Form.Check
                                type="checkbox"
                                label="Acepto el almacenamiento, uso y tratamiento de mis datos personales"
                                id="terms"
                            />

                            <Button className="sign-in_btn btn-success mt-4 " type="submit" >
                                Enviar
                            </Button>
                        </Form>
                    </div>
                </div>

            </div>






            <Footer />


        </Layout>
    )
}
export default QuejasReclamos