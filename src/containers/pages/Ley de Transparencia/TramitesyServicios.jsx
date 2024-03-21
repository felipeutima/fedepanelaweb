
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
function TramitesyServicios() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">9. Tramites Servicios</h1>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">9.1. Trámites y servicios</h2>
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <div className="container">

                                            <span className="fw-bold">a. Trámites que se adelanten ante las mismas</span>
                                            <div className="my-2">
                                                La Ley 40 de 1990 <a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/Ley-40-de-1990-1.pdf" target="_blank" rel="noopener">(Descargar aquí en formato PDF)</a> crea la cuota de fomento panelero y nombra como Administrador de la cuota de fomento panelero a Fedepanela:
                                            </div>

                                            <div className="ms-4">El artículo séptimo de la Ley 40 de 1990, determinó lo siguiente:</div>
                                            <div className="ms-4 mt-1">"Créase la Cuota de Fomento Panelero, cuyo producto se llevará a una cuenta especial, bajo el nombre de Fondo de Fomento Panelero, con destino exclusivo al cumplimiento de los objetivos de la presente Ley.</div>
                                            <div className="ms-4 mt-1">Parágrafo 1° La cuota de Fomento Panelero será del medio por ciento (0.5%) del precio de cada kilogramo de panela y de miel que produzcan los trapiches paneleros con capacidad de molienda inferior a las diez (10) toneladas por hora y del uno por ciento (1%) del precio de cada kilogramo de panela y de miel que produzcan los trapiches con capacidad de molienda superior a las diez (10) toneladas por hora (...)"</div>
                                            <div className="ms-4 mt-1">Así mismo, el artículo 2.10.3.5.4. del Decreto 1071 de 2015, estableció quienes están obligados al recaudo:</div>
                                            <div className="ms-4 mt-1">"Están obligadas al recaudo de la Cuota de Fomento Panelero de que trata la Ley 40 de 1990, todas las personas naturales o jurídicas que adquieran, transformen o comercialicen panela o miel de producción nacional, bien sea que se destine al mercado interno o al de exportación, o se utilice como materia prima o componente de productos industriales para el consumo humano o animal.</div>
                                            <div className="ms-4 mt-1">(...)</div>
                                            <div className="ms-4 mt-1">Parágrafo 5. (...) Los segundos compradores que adquieran el producto sin verificar el pago de la cuota, responderán solidariamente de las obligaciones adquiridas por el agente recaudador" (subraya y negrilla fuera de texto)</div>
                                            <div className="ms-4 mt-1">Aunado a lo anterior, el artículo 2.10.3.5.5. del decreto en mención, concluyó de manera expresa que la Cuota de Fomento se liquidará sobre el precio del producto que figure en la correspondiente factura de venta, precio que en ningún caso será inferior al señalado semestralmente por el Ministerio de Agricultura y Desarrollo Rural.</div>
                                            <div className="ms-4 mt-1">... Articulo 11. El Gobierno Nacional a través del Ministerio de Agricultura, administrará directamente o contratará con otra entidad pública, con FEDEPANELA, o con la organización sin ánimo de lucro que represente al sector panelero, la administración del Fondo Nacional de Panela.......</div>
                                            <ol className="mt-2">
                                                <li><a href="https://fedepanela.org.co/gremio/area-tecnica/procesos-de-recaudo/" target="_blank" rel="noopener">Procesos de recaudo</a></li>
                                            </ol>

                                            <span className="fw-bold">b. Los procedimientos o protocolos de atención.</span>

                                            <ol>
                                                <li className="ms-4">Los interesados en información, pago o certificación de la cuota de fomento panelero puede comunicarse a los teléfonos de Fedepanela, Dirección Administrativa y de recaudo en la ciudad de Bogotá. Ver mas información</li>
                                                <li className="ms-4 mt-1">En todo el país dependiendo del departamento en el que se encuentre se puede comunicar con el Delegado de Recaudo de la respectiva ciudad, a continuación informamos el directorio de Delegados de Recaudo. Ver mas información</li>
                                                <li className="ms-4 mt-1">También se ha diseñado el siguiente formulario para solicitar la información del pago de cuota de fomento. Ver mas información</li>
                                                <li className="ms-4 mt-1">Recibimos su solicitud al correo comunicaciones@fedepanela.org.co </li>
                                            </ol>

                                            <ul>
                                                <li className="ms-4 mt-1">Manual de procedimientos</li>
                                                <li className="ms-4 mt-1">Manual de Procedimientos contables - versión 1 - 2016 - corrección cuarto envío auditoria </li>
                                            </ul>

                                            <span className="fw-bold">c. Los Costos</span>

                                            <div className="ms-4 mt-1">El trámite y atención de la liquidación, certificación y visita para atenderlo y liquidar la cuota de fomento panelero o expedir cualquier certificación al respecto NO tiene ningún costo.</div>

                                            <span className="fw-bold">d. Los formatos y formularios requeridos, indicando y facilitando el acceso a aquellos que se encuentran disponibles en línea.</span>

                                            <ul>
                                                <li><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/Manual-de-Procedimientos-2018-incluido-devoluciones-correccion-termino.pdf" target="_blank" rel="noopener">Procedimiento para el recaudo de la cuota de Fomento Panelero</a></li>
                                                <li><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/FORMATO-LIQUIDACION-CUOTA-DE-FOMENTO-RETENCION-ALMACENES.pdf" target="_blank" rel="noopener">Formato liquidación cuota de fomento retención almacenes</a></li>
                                                <li><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/FORMATO-LIQUIDACION-CUOTA-DE-FOMENTO.pdf" target="_blank" rel="noopener">Formato liquidación cuota de fomento</a></li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>



                            </Accordion>
                        </motion.div>



                    </div>


                </div>


            </div>



            <Footer />


        </Layout>
    )
}
export default TramitesyServicios