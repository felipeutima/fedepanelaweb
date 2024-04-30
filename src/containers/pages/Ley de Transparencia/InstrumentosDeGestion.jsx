
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
import doc1 from "assets/docs/10.2.Registro-de-Activos-de-Informacion.xlsx";
import doc2 from "assets/docs/10.2.Registro-de-Activos-de-Informacion.xlsx";
function InstrumentosDeGestion() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">10. Instrumentos de gestión de información pública</h1>
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
                                        <h2 className="h2-title-header">10.1. Información Mínima</h2>
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <div className="container">
                                            <p><strong>Recuerde que de acuerdo al numeral 10.1 del Anexo 1 de la Resolución 3564 de 2015 de MINTIC, cuando la información mínima requerida a publicar de que tratan los artículos 9,10 y 11 de la Ley 1712 de 2014 se encuentre en otra sección del sitio web o en un sistema de información, los sujetos obligados deben identificar la información que reposa en estos y habilitar los enlaces para permitir el acceso a la misma.</strong></p>

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>




                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">10.2. Registro de Activos de Información</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <p style={{ paddingLeft: '40px' }}>
                                                <a href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/02/10.2.Registro-de-Activos-de-Informacion.xlsx" target="_blank" rel="noopener">Ver cuadro en Excel</a>
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">10.3. Índice de Información Clasificada y Reservada</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <p style={{ paddingLeft: '40px' }}>
                                                <a href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/02/10.2.Registro-de-Activos-de-Informacion.xlsx" target="_blank" rel="noopener">Ver cuadro en Excel</a>
                                                <a href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/02/10.2.Registro-de-Activos-de-Informacion.xlsx" target="_blank" rel="noopener">Ver cuadro en Excel</a>
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">10.4. Esquema de Publicación de Información</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <p style={{ paddingLeft: '40px' }}>
                                                <a href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/02/10.4.Esquema-de-Publicacion_FFP.xlsx" target="_blank" rel="noopener">Ver cuadro en Excel</a>
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">10.5. Programa de Gestión Documental</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <p style={{ paddingLeft: '40px' }}>
                                                <a href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/02/10.5.Introduccion-Instrumentos-de-Gestion-de-Informacion-Publica.pdf" target="_blank" rel="noopener">Ver archivo PDF</a>
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">10.6. Tablas de Retención Documental</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <p style={{ paddingLeft: '40px' }}>La tabla de retención documental del fondo de fomento panelero fue aprobada por el representante el representante legal de la Federación &nbsp;Nacional de Productores de Panela, Administrador del Fondo de Fomento panelero, &nbsp;mediante acta de aprobación de tablas de retención documental y SGD. &nbsp;A Continuación se presentan las tablas de retención documental de la entidad:</p>
                                            <p style={{ paddingLeft: '40px' }}>
                                                <a href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/02/10.6-TABLAS_RETENCION.pdf" target="_blank" rel="noopener">Ver archivo PDF</a>
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">10.7. Registro de publicaciones</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <p style={{ paddingLeft: '40px' }}>
                                                <a href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/02/10.7.-Esquema-de-Publicacion_FFP.xlsx" target="_blank" rel="noopener">Ver archivo Excel</a>
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">10.8. Costos de reproducción</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <p style={{ paddingLeft: '40px' }}>Documento en proceso de elaboración y aprobación.</p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="8">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">10.9. Mecanismos para presentar quejas y reclamos en relación con omisiones o acciones del sujeto obligado</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <p style={{ paddingLeft: '40px' }}><strong>a. Información sobre los mecanismos para presentar quejas y reclamos en relación con omisiones o acciones del sujeto obligado, y la manera como un particular puede comunicar una irregularidad ante los entes que ejercen control sobre la misma.</strong></p>
                                            <p style={{ paddingLeft: '40px' }}>
                                                PROCEDIMIENTO PARA EL EJERCICIO DE LOS DERECHOS DEL TITULAR: FONDO DE FOMENTO PANELERO ha dispuesto que el área de sistemas de información sea la responsable de la atención a peticiones, consultas y reclamos por medio del que el Titular de los Datos puede ejercer sus derechos antes reseñados, que puede ser contactada en el correo electrónico <a href="mailto:FFPprotecciondedatos@fedepanela.org.co">FFPprotecciondedatos@fedepanela.org.co</a>.
                                            </p>
                                            <p style={{ paddingLeft: '40px' }}>
                                                Las solicitudes presentadas ante el área correspondiente, y que versen sobre el tratamiento de datos personales, podrán ser presentadas a través del canal ya descrito mediante comunicación dirigida al correo del FONDO DE FOMENTO PANELERO reseñado anteriormente, siendo necesario que la comunicación exprese de manera clara la siguiente información:
                                                <br />
                                                1. Nombres y apellidos del titular.
                                                <br />
                                                2. Número de identificación del titular.
                                                <br />
                                                3. Datos de localización del titular.
                                                <br />
                                                4. Descripción de los hechos que dan lugar a la consulta o reclamo.
                                                <br />
                                                5. Documentos que considere soportan su consulta o reclamo.
                                                <br />
                                                6. Medio por el cual desea recibir respuesta.
                                                <br />
                                                7. Nombre del peticionario, el cual, si es diferente al titular, debe adjuntar los documentos que le permitan actuar en su nombre.
                                            </p>
                                            <p style={{ paddingLeft: '40px' }}>
                                                Una vez presentada la solicitud, el FONDO DE FOMENTO PANELERO contará un término de diez (10) días hábiles, desde el recibo de la petición, para atender la solicitud o tomar las medidas que el titular exija. Si la solicitud no contiene los datos de contacto suficientes, o no refleja de manera expresa los hechos que permitan a el FONDO DE FOMENTO PANELERO atender y dar trámite a la petición, se le comunicará tal situación al remitente dentro de los cinco (5) días siguientes al recibo de la solicitud para efectos de que allegue la información necesaria dentro de los quince (15) días hábiles siguientes al recibo del requerimiento, so pena de considerarse desistida la petición.
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="9">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">10.10. Informe de Peticiones, quejas, reclamos, denuncias y solicitudes de acceso a la información</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <p style={{ paddingLeft: '40px' }}><strong>a. <a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/INFORME-PETICIONES-QUEJAS-Y-RECLAMOS.pdf" target="_blank" rel="noopener">Informe de todas las peticiones, quejas, reclamos, denuncias y solicitudes de acceso a la información recibidas y los tiempos de respuesta</a></strong></p>
                                            <p style={{ paddingLeft: '40px' }}>
                                                En la página principal de Fedepanela en la parte de contáctenos existe un formulario en el cual las personas colocan su solicitud de acceso a la información <a href="https://fedepanela.org.co/gremio/">https://fedepanela.org.co/gremio/</a> donde toda la información es redirigida al correo: <a href="mailto:comunicaciones@fedepanela.org.co">comunicaciones@fedepanela.org.co</a>
                                            </p>
                                            <p style={{ paddingLeft: '40px' }}>
                                                De igual se ha creado el formulario para <b>solicitudes, peticiones, quejas, reclamos y denuncias</b><br /><a href="https://fedepanela.org.co/gremio/fondo-de-fomento/quejas-y-reclamos/" target="_blank" rel="noopener">https://fedepanela.org.co/gremio/fondo-de-fomento/quejas-y-reclamos/</a>, toda la información es redirigida al correo: <a href="mailto:comunicaciones@fedepanela.org.co">comunicaciones@fedepanela.org.co</a> para que sea retransmitida a cada uno de los departamentos indicados
                                            </p>
                                            <p style={{ paddingLeft: '40px' }}><strong>b. <a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/INFORME-PETICIONES-QUEJAS-Y-RECLAMOS.pdf" target="_blank" rel="noopener">Número de solicitudes recibidas.</a></strong></p>
                                            <p style={{ paddingLeft: '40px' }}><strong>c. Número de solicitudes que fueron trasladadas a otra institución.</strong></p>
                                            <p style={{ paddingLeft: '40px' }}>Número de solicitudes que fueron trasladadas a otra institución: NINGUNA</p>
                                            <p style={{ paddingLeft: '40px' }}><strong>d. Tiempo de respuesta a cada solicitud.</strong></p>
                                            <p style={{ paddingLeft: '40px' }}>
                                                La consulta será atendida en un término máximo de diez (10) días hábiles contados a partir de la fecha de recibo de esta. Cuando no fuere posible atender la consulta dentro de dicho término, se informará al interesado, expresando los motivos de la demora y señalando la fecha en que se atenderá su consulta, la cual en ningún caso podrá superar los cinco (5) días hábiles siguientes
                                            </p>
                                            <p style={{ paddingLeft: '40px' }}><strong>e. Número de solicitudes en las que se negó el acceso a la información.</strong></p>
                                            <p style={{ paddingLeft: '40px' }}>
                                            La información del recaudo de la cuota de fomento panelero es confidencial, se encuentra debidamente organizada y archivada en las instalaciones de la oficina principal de Fedepanela disponible para revisión o informes para entidades de control
                                            </p>
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
export default InstrumentosDeGestion