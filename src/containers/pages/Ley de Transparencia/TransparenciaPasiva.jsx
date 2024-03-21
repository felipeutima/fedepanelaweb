
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
function TransparenciaPasiva() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">11. Transparencia Pasiva</h1>
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
                                        <h2 className="h2-title-header">
                                            11.1. Medios de seguimiento para la consulta del estado de las solicitudes de información pública</h2>
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <div className="container">

                                            <span className="fw-bold">a. En la recepción de solicitudes de información pública los sujetos obligados deben indicar al solicitante los medios por los cuales se puede hacer seguimiento a la misma mediante el número o código de seguimiento asignado</span>
                                            <div className="my-2">

                                                <span className="fw-bold">PROCEDIMIENTO PARA EL EJERCICIO DE LOS DERECHOS DEL TITULAR: FONDO DE FOMENTO PANELERO</span>
                                                ha dispuesto que el área de sistemas de información sea la responsable de la atención a peticiones, consultas y reclamos por medio del que el Titular de los Datos puede ejercer sus derechos antes reseñados, que puede ser contactada en el correo electrónico <a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/Ley-40-de-1990-1.pdf" target="_blank" rel="noopener">FFPprotecciondedatos@fedepanela.org.co.</a>
                                            </div>
                                            <div className="my-2">
                                                Las solicitudes presentadas ante el área correspondiente, y que versen sobre el tratamiento de datos personales, podrán ser presentadas a través del canal ya descrito mediante comunicación dirigida al correo del FONDO DE FOMENTO PANELERO reseñado anteriormente, siendo necesario que la comunicación exprese de manera clara la siguiente información:

                                            </div>
                                            <ol className="mt-2">
                                                <li>Nombres y apellidos del titular.</li>
                                                <li>Número de identificación del titular.</li>
                                                <li>Datos de localización del titular.</li>
                                                <li>Descripción de los hechos que dan lugar a la consulta o reclamo.</li>
                                                <li>Documentos que considere soportan su consulta o reclamo.</li>
                                                <li>Medio por el cual desea recibir respuesta.</li>
                                                <li>Nombre del peticionario, el cual, si es diferente al titular, debe adjuntar los documentos que le permitan actuar en su nombre.
                                                    Una vez presentada la solicitud, el FONDO DE FOMENTO PANELERO contará un término de diez (10) días hábiles, desde el recibo de la petición, para atender la solicitud o tomar las medidas que el titular exija.  Si la solicitud no contiene los datos de contacto suficientes, o no refleja de manera expresa los hechos que permitan a el FONDO DE FOMENTO PANELERO atender y dar trámite a la petición, se le comunicará tal situación al remitente dentro de los cinco (5) días siguientes al recibo de la solicitud para efectos de que allegue la información necesaria dentro de los quince (15) días hábiles siguientes al recibo del requerimiento, so pena de considerarse desistida la petición.</li>
                                            </ol>

                                            <div className="my-2">
                                                Si el FONDO DE FOMENTO PANELERO no es la entidad competente para resolver un reclamo, dará traslado del mismo a quien corresponda en un término máximo de cinco (5) días hábiles si el nuevo responsable es identificable e informará de la situación al interesado para que pueda hacer seguimiento o identifique claramente la entidad a la cual debe dirigirse.
                                            </div>
                                            <div className="my-2">
                                                El FONDO DE FOMENTO PANELERO ha establecido como requisito de procedibilidad de la acción de ejercer sus derechos a través de los medios previamente descritos y posteriormente gestionarlos ante la Súper Intendencia de Industria y Comercio.

                                            </div>
                                            <div className="my-2">
                                                Con el objetivo de cumplir con los tiempos establecidos por la ley las solicitudes de los titulares, en materia de protección de datos personales el Fondo de Fomento Panelero establece el MANUAL DE TRATAMIENTO Y PROTECCIÓN DE DATOS PERSONALES con el fin de establecer una gestión optima de las solicitudes de los titulares:
                                            </div>
                                            <div className="mx-4">

                                                Para El Fondo de fomento panelero, la información es un activo fundamental para la prestación de sus servicios y la toma de decisiones eficientes, razón por la cual existe un compromiso por el respeto de los datos de personas naturales, en su tratamiento y finalidades, por lo anterior como responsable y/o encargados del tratamiento establecemos mecanismos sencillos y ágiles que se encuentren permanentemente disponibles a los Titulares con el fin de que estos puedan acceder a los datos personales que estén bajo el control de aquellos y ejercer sus derechos sobre los mismos.

                                            </div>

                                            <div className="my-2">
                                                El fondo de fomento panelero previamente ha definido que el canal establecido para atender solicitudes de titulares es el correo electrónico: FFPprotecciondedatos@fedepanela.org.co y físicamente en la dirección Carrera 49 B No 91-48 La Castellana.

                                            </div>

                                            <div className="my-2">
                                                El departamento encargado por parte de El fondo de El fondo de fomento panelero responsable inscrito ante la SIC de recibir, consolidar, verificar el
                                                carácter legal de la solicitud es el área de sistemas de información.
                                            </div>

                                            <div className="my-2">
                                                El Titular podrá consultar de forma gratuita sus datos personales:
                                            </div>

                                            <ol className="mt-2">
                                                <li>al menos una vez cada mes calendario, y</li>
                                                <li> cada vez que existan modificaciones sustanciales de las Políticas de Tratamiento de la información que motiven nuevas consultas.
                                                    Para consultas cuya periodicidad sea mayor a una por cada mes calendario, el responsable solo podrá cobrar al titular los gastos de envío, reproducción
                                                    y, en su caso, certificación de documentos. Los costos de reproducción no podrán ser mayores a los costos de recuperación del material correspondiente.</li>
                                            </ol>


                                            <div className="my-2">
                                                Para tal efecto, el responsable deberá demostrar a la Superintendencia de Industria y Comercio (SIC), cuando esta así lo requiera, el soporte de dichos gastos.

                                            </div>

                                            <ul>
                                                <li><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/Manual-de-Procedimientos-2018-incluido-devoluciones-correccion-termino.pdf" target="_blank" rel="noopener">Política de Protección de Datos Personales - Fedepanela</a></li>
                                                <li><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/FORMATO-LIQUIDACION-CUOTA-DE-FOMENTO-RETENCION-ALMACENES.pdf" target="_blank" rel="noopener">Política de Protección de datos Personales - Fondo de Fomento</a></li>
                                                <li><a href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/FORMATO-LIQUIDACION-CUOTA-DE-FOMENTO.pdf" target="_blank" rel="noopener">Manual de Gestión de solicitudes y Tratamiento de Datos Personales - Fondo Nacional Fondo Panelero</a></li>
                                            </ul>






                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        <h2 className="h2-title-header">
                                            11.2. Formulario para la recepción de solicitudes de información pública.</h2>
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <div className="container">
                                            <div className="my-2">
                                                a. Habilitación para el uso de niños, niñas y adolescentes
                                            </div>
                                            <div className="my-2">
                                                b. Validación de los campos
                                            </div>
                                            <div className="my-2">
                                                c. Ayudas
                                            </div>
                                            <div className="my-2">
                                                d. Solicitud de información pública con identidad reservada
                                            </div>
                                            <span className="fw-bold">
                                                Campos mínimos del formulario:
                                            </span>
                                            <div className="my-2">
                                                e. Tipo de Solicitud
                                            </div>
                                            <div className="my-2">
                                                f. Tipo de solicitante
                                            </div>
                                            <div className="my-2">
                                                g. Primer Nombre
                                            </div>
                                            <div className="my-2">
                                                h. Segundo Nombre (opcional)
                                            </div>
                                            <div className="my-2">
                                                i. Primer Apellido
                                            </div>
                                            <div className="my-2">
                                                j. Segundo Apellido (opcional)
                                            </div>
                                            <div className="my-2">
                                                k. Tipo de identificación
                                            </div>
                                            <div className="my-2">
                                                l. Número de identificación
                                            </div>
                                            <div className="my-2">
                                                m. Razón Social
                                            </div>
                                            <div className="my-2">
                                                n. NIT
                                            </div>
                                            <div className="my-2">
                                                o. País
                                            </div>
                                            <div className="my-2">
                                                p. Departamento
                                            </div>
                                            <div className="my-2">
                                                q. Municipio
                                            </div>
                                            <div className="my-2">
                                                r. Dirección
                                            </div>
                                            <div className="my-2">
                                                s. Correo electrónico
                                            </div>
                                            <div className="my-2">
                                                t. Teléfono fijo
                                            </div>
                                            <div className="my-2">
                                                u. Teléfono móvil
                                            </div>
                                            <div className="my-2">
                                                v. Contenido de la solicitud
                                            </div>
                                            <div className="my-2">
                                                w. Archivos o documentos
                                            </div>
                                            <div className="my-2">
                                                x. Opción para elegir el medio de respuesta
                                            </div>
                                            <div className="my-2">
                                                y. Información sobre posibles costos asociados a la respuesta
                                            </div>

                                            <div className="my-2">

                                            Se ha diseñado el siguiente formulario que cumple con las características indicadas <a href="/FondodeFomento/QuejasReclamos"> - Formulario solicitudes, peticiones, quejas, reclamos y denuncias</a>
                                            </div>


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
export default TransparenciaPasiva