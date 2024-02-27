
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardServices from "components/FondoFomento/CardServices"
import { CurrencyDollar, PencilFill, PostageFill, PeopleFill, Bank2, ChatLeftTextFill, PersonFillGear } from "react-bootstrap-icons"
import { motion } from 'framer-motion';
import Form from 'react-bootstrap/Form';
import { GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import Button from 'react-bootstrap/Button';
import img1 from "assets/img/Img1.png"
import liquidacion from "assets/docs/FORMATO-LIQUIDACION-CUOTA-DE-FOMENTO.pdf"
import CardDownload from "components/Nuestra Fede/CardDownload"

function ProcesosRecaudoFDF() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>
                <h1 className="text-center h1-title my-5">Procesos de recaudo</h1>
                <div className="row">
                    <div class="col-lg-6"><div ><h2 class="fw-bolder h2-title">Señor Productor y/o comercializador de panela</h2>
                        
                        <p class="lead fw-normal text-muted mb-0"> Cuando se presente el caso de haber pagado con anterioridad en la cadena de comercialización la cuota de fomento, el productor o comerciante podrá descontar de su liquidación mensual presentada a Fedepanela el valor que por ese concepto haya retenido el almacén o supermercado.</p>
                        
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <CardDownload titulo="Formato de liquidación de cuota de manejo"
                                doc={liquidacion} />
                        </motion.div>
                        <p class="lead fw-normal text-muted mb-0  mt-4"> Cualquier aclaración adicional, por favor comunicarse con el Delegado de Recaudo de su departamento.</p>
                        <p class="lead fw-normal text-muted mb-0 mt-2"> Cordialmente</p>
                        <p class="lead fw-bold text-muted mb-0 mt-2"> Fondo de fomento Panelereo</p>
                        <p class="lead fw-normal text-muted mb-0 mt-2"> Fedepanela</p>



                    </div>
                    </div>


                    <div className="col-md-6">


                        <Form className="form_container">
                        <h1 className="text-center h2-title ">Formulario de Recaudo</h1>
                            
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
                            <Form.Select aria-label="Default select example">
                                <option>Departamento de recaudo</option>
                                <option value="1">Directora Administrativa - Bogotá</option>
                                <option value="2">Antioquia</option>
                                <option value="3">Boyacá</option>
                                <option value="3">Caldas</option>
                                <option value="3">Cundinamarca</option>
                                <option value="3">Huila</option>
                                <option value="3">Nariño</option>
                                <option value="3">Risaralda-Quindio</option>
                                <option value="3">Santander</option>
                                <option value="3">Tolima</option>
                                <option value="3">Valle</option>
                                <option value="3">Villeta</option>
                                <option value="3">Socorro</option>
                                <option value="3">Cauca</option>
                            </Form.Select>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label className="mt-2">Solicitud</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Ingrese la descripción" />
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
export default ProcesosRecaudoFDF