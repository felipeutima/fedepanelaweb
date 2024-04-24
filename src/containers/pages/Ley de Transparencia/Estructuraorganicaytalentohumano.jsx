import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";

import { motion } from "framer-motion";
import Accordion from "react-bootstrap/Accordion";

import doc from "assets/docs/Manual-de-Procedimientos-2018-incluido-devoluciones-correccion-termino.pdf";
import doc1 from "assets/docs/MANUAL-DE-PROCEDIMIENTOS-CONTABLE-VERSION-1-2016-COREECCION-CUARTO-ENVIO-AUDITORIA-RTA.pdf";
import doc2 from "assets/docs/Manual-de-Funciones-.pdf";
import doc3 from "assets/docs/DIRECTORIO-DE-INFORMACION-DE-SERVIDORES-PUBLICOS.pdf";
import doc2016 from "assets/docs/ESCALA-SALARIAL.pdf";
import doc2017 from "assets/docs/ESCALA-SALARIAL-2017.pdf";
import doc2018 from "assets/docs/ESCALA-SALARIAL2018.pdf";
import doc2019 from "assets/docs/ESCALA-SALARIAL-2019.pdf";
import doc2020 from "assets/docs/ESCALA-SALARIAL-2020-.pdf";

function Estructuraorgánicaytalentohumano() {
  return (
    <Layout>
      <Navbar />

      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <h1 className="text-center h1-title mt-5">3. Estructura orgánica y talento humano
        </h1>
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
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}

                      3.1. Misión y visión
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <a
                        className="a-accordion"
                        href="/NuestraFederacion/PlanEstrategico"
                      >
                        Ver más información
                      </a>
                    </div>
                  </Accordion.Body>

                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}

                      3.2. Funciones y deberes
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <a
                        className="a-accordion"
                        href="/FondodeFomento/EstructuraOrganica"
                      >
                        Ver más información
                      </a>
                    </div>
                  </Accordion.Body>

                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <h2 className="h2-title-header">3.3. Procesos y procedimientos</h2>
                  </Accordion.Header>

                  <Accordion.Body>
                    <div className="container">
                      <div>
                        <a
                          className="a-accordion"
                          href="/FondodeFomento/EstructuraOrganica"
                        >
                          Ver más información
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href={doc}
                          target="blank"
                        >
                          a. Procesos y procedimientos para la toma de decisiones en las diferentes áreas.
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc1}
                          target="blank"

                        >
                          b. Procesos y procedimientos contables
                        </a>
                      </div>

                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <h2 className="h2-title-header">3.4. Organigrama</h2>
                  </Accordion.Header>

                  <Accordion.Body>
                    <div className="container">
                      <div>
                        <a
                          className="a-accordion"
                          href="/FondodeFomento/EstructuraOrganica"
                        >
                          a. Estructura orgánica de la entidad.
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="/FondodeFomento/EstructuraOrganica"
                        >
                          b. Estructura orgánica de manera gráfica y legible, en un formato accesible y usable [PDF].
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc2}
                          target="blank"
                        >
                          c. Descripción de la estructura orgánica, donde se dé información general de cada división o dependencia.
                        </a>
                      </div>

                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <h2 className="h2-title-header">
                      <a
                        className="a-accordion"
                        href={doc3}
                        target="blank"
                      >
                       3.5. Directorio de información de servidores públicos, contratistas y empleados
                      </a>

                    </h2>
                  </Accordion.Header>

                  <Accordion.Body>
                    <div className="container">
                    

                  
                        <h2 className="h2-title-header">Escala Salarial</h2>
                 

                    
                        <div>

                          <a
                            className="a-accordion"
                            href={doc2016}
                            target="blank" /* Falta esta seccion */
                          >
                            2016
                          </a>

                          <br />
                          <a
                            className="a-accordion"
                            href={doc2017}
                            target="blank"
                          >
                            2017
                          </a>

                          <br />
                          <a
                            className="a-accordion"
                            href={doc2018} target="blank"
                          >
                            2018
                          </a>

                          <br />
                          <a
                            className="a-accordion"
                            href={doc2019} target="blank"
                          >
                            2019
                          </a>

                          <br />
                          <a
                            className="a-accordion"
                            href={doc2020}  target="blank"
                          >
                            2020
                          </a>

                        </div>

              
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <h2 className="h2-title-header">3.6. Directorio de entidades</h2>
                  </Accordion.Header>

                  <Accordion.Body>
                    <div className="container">
                      <div>
                        <a
                          className="a-accordion"
                          href="/NuestraFederacion/directorio"
                        >
                          Directorio Oficina Central de Fedepanela
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="/NuestraFederacion/directorio"
                        >
                          Directorio de Recaudo
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="/NuestraFederacion/directorio"
                        >
                          Directorio Coordinadores Técnico Regionales
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="/NuestraFederacion/directorio"
                        >
                          Directorio Fondo de Fomento Panelero
                        </a>
                      </div>

                    </div>
                  </Accordion.Body>
                </Accordion.Item>



                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      3.7. Directorio de agremiaciones, asociaciones y otros grupos de interés - No aplica
                    </h2>
                  </Accordion.Header>

                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      3.8. Ofertas de Empleo
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <a
                        className="a-accordion"
                        href="/NuestraFederacion/ofertas" 
                      >
                        Ver más información
                      </a>
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
  );
}
export default Estructuraorgánicaytalentohumano;
