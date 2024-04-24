
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
function PreguntasFrecuentes() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Preguntas Frecuentes</h1>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <motion.div
                            initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                            animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                            transition={{ duration: 0.9, ease: "easeOut" }}
                        >
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header >
                                        <h2 className="h2-title-header">¿Qué es el fondo de Fomento Panelero?</h2>
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <div className="container">
                                            <div className="mt-2">El artículo séptimo de la Ley 40 de 1990, determinó lo siguiente:</div>
                                            <div className="mt-2">“Créase la Cuota de Fomento Panelero, cuyo producto se llevará a una cuenta especial, bajo el nombre de Fondo de Fomento Panelero, con destino exclusivo al cumplimiento de los objetivos de la presente Ley.”</div>
                                            <div className="mt-2"> Así mismo, el artículo 2.10.3.5.4. del Decreto 1071 de 2015, estableció quienes están obligados al recaudo:</div>
                                            <div className="mt-2">"Están obligadas al recaudo de la Cuota de Fomento Panelero de que trata la Ley 40 de 1990, todas las personas naturales o jurídicas que adquieran transformen o comercialicen panela o miel de producción nacional, bien sea que se destine al mercado interno o al de exportación, o se utilice como materia prima o componente de productos industriales para el consumo humano o animal.</div>

                                            <div className="mt-2">Parágrafo 5. (.....) Los segundos compradores que adquieran el producto sin verificar el pago de la cuota, responderán solidariamente de las obligaciones adquiridas por el agente recaudador" </div>
                                            <div className="mt-2">Aunado a lo anterior, el artículo 2.10.3.5.5. del decreto en mención, concluyó de manera expresa que la Cuota de Fomento se liquidará sobre el precio del producto que figure en la correspondiente factura de venta, precio que en ningún caso será inferior al señalado semestralmente por el Ministerio de Agricultura y Desarrollo Rural.</div>

                                            <div className="mt-2">Es importante tener en cuenta que el Decreto 1071 de 2015 en su artículo 2.10.3.5.9. Determina que:</div>
                                            <div className="mt-2">“Los recaudadores de la Cuota de Fomento serán fiscalmente responsables no sólo por el valor de lo percibido sino también por las cuotas dejadas de recaudar y por las liquidaciones equivocadas o defectuosas" </div>

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> <h2 className="h2-title-header"> ¿Cual es el valor de la cuota?</h2></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <div>La cuota es del 0.5% del precio de cada kilogramo de panela.</div>
                                            <div>El Fondo de Fomento Panelero recauda aproximadamente 3 mil millones al año en 14 departamentos paneleros.</div>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> <h2 className="h2-title-header">¿Qué es la cuota de Fomento Panelero?</h2></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <div>Es una contribución obligatoria de carácter parafiscal que es invertida en los programas dispuestos por la Ley 40 de 1990.</div>

                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">

                                    <Accordion.Header> <h2 className="h2-title-header">¿Quiénes son los responsables del pago de la cuota de fomento? </h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">
                                            <div>
                                                <ol>

                                                    <li>Todas las personas naturales o jurídicas que intervienen como compradores o vendedores del producto en la cadena de comercialización; quienes no podrán negociar, ni procesar la panela, mientras no se haya deducido previamente la respectiva contribución. </li>
                                                    <li>Los productores ocasionales, los compradores de miel destinada a la producción de alcohol y los exportadores del producto.</li>
                                                    <li>Actividades de investigación y extensión </li>
                                                    <li>Promoción del consumo de la panela dentro y fuera del país.</li>
                                                    <li>Campañas educativas sobre las características nutricionales de la panela.</li>
                                                    <li>Actividades de comercialización de la panela</li>
                                                    <li>Programas de diversificación de la producción</li>


                                                </ol>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header> <h2 className="h2-title-header">¿Cuál es el destino de los dineros recaudados?</h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">
                                            <div>
                                                El destino de los dineros del Fondo se debe limitar al presupuesto aprobado por la Junta Directiva del Fondo, enmarcado en lo dispuesto en la Ley 40 1990.
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header> <h2 className="h2-title-header">¿Quién dirige el fondo de fomento?</h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">
                                            <div>
                                                Fedepanela administra los dineros del Fondo de Fomento y además existe una Junta Directiva presidida por el Ministro de Agricultura o su delegado y compuesta por tres representantes del MADR.                                            </div>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header> <h2 className="h2-title-header">¿Cómo se evidencia el pago de la cuota de fomento?</h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">
                                            <div>
                                                Mediante una etiqueta que debe estar adherida a cada uno de los empaque de panela que se estén transportando.                                                </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header> <h2 className="h2-title-header">¿Cuáles son las funciones de la junta directiva del fondo?</h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">
                                            <div>
                                                <ol>
                                                    <li>Aprobar el presupuesto anual de ingresos y gastos presentados por Fedepanela</li>
                                                    <li>Aprobar los programas y proyectos que con recursos del Fondo debe llevar a cabo
                                                        Fedepanela.</li>
                                                    <li>Velar por la correcta y eficiente gestión del Fondo por parte de Fedepanela.</li>


                                                </ol>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header> <h2 className="h2-title-header">¿Quién controla la inversión de los recursos del fondo?</h2></Accordion.Header>

                                    <Accordion.Body>

                                       <div className="container">

                                        <div>La Contraloría General de la Nación y la Auditoria que para este efecto designe la Junta Directiva del Fondo.</div>
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
export default PreguntasFrecuentes