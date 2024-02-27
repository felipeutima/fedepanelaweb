import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import CardDownload from "components/Nuestra Fede/CardDownload";
import re2023 from "assets/docs/Reforma-Estatutaria-2023.pdf";
import re003 from "assets/docs/Resolucion-003-Reglamento-Elecciones-2023.pdf";
import { motion } from "framer-motion";
import Accordion from "react-bootstrap/Accordion";
function Normatividad() {
  return (
    <Layout>
      <Navbar />

      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <h1 className="text-center h1-title mt-5">4. Normatividad</h1>
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
                    <h2 className="h2-title-header"> 4.1. Normatividad</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div className="container">
                        <a
                          href="https://fedepanela.org.co/gremio/descargas/ley-40-de-1990/"
                          className="a-accordion"
                        >
                          Ley 40 de 1990
                        </a>{" "}
                        <span>en formato Legible PDF </span>
                        <br />
                        <span>
                          Por la cual se dictan normas para la protección y el
                          desarrollo de la producción de la panela y se
                          establece la cuota de fomento panelero.
                        </span>
                        <Accordion.Header>
                          <h2 className="h2-title-header">Comercial</h2>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-16379-de-2003/"
                                className="a-accordion"
                              >
                                Resolución 16379 de 2003
                              </a>
                              <br />
                              <span>
                                Por la cual se reglamenta el control metrológico
                                y del contenido de producto en pre-empacados.
                              </span>
                            </div>
                            <br />
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-5109-de-2005/"
                                className="a-accordion"
                              >
                                Resolución 5109 de 2005
                              </a>
                              <br />
                              <span>
                                Por el cual se establece el reglamento técnico
                                sobre los requisitos de rotulado o etiquetado
                                que deben cumplir los alimentos envasados y
                                materias primas de alimentos para consumo
                                humano.
                              </span>
                            </div>
                            <br />
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-333-de-2011/"
                                className="a-accordion"
                              >
                                Resolución 333 de 2011
                              </a>
                              <br />
                              <span>
                                Por la cual se establece el reglamento técnico
                                sobre los requisitos de rotulado o etiquetado
                                nutricional que deben cumplir los alimentos
                                envasados para consumo humano.
                              </span>
                            </div>
                          </div>
                        </Accordion.Body>
                        <Accordion.Header>
                          <h2 className="h2-title-header">Ambiental</h2>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/decreto-1594-de-1984/"
                                className="a-accordion"
                              >
                                DDecreto 1594 de 1984
                              </a>
                              <br />
                              <span>Usos del agua y residuos líquidos.</span>
                            </div>
                            <br />
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/decreto-948-de-1995/"
                                className="a-accordion"
                              >
                                Decreto 948 de 1995
                              </a>
                              <br />
                              <span>
                                Prevención y control de la contaminación
                                atmosférica y la protección de la calidad del
                                aire.
                              </span>
                            </div>
                            <br />
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/protocolo-general-de-bioseguridad-para-la-prevencion-del-covid-19-en-el-subsector-panelero/"
                                className="a-accordion"
                              >
                                Protocolo general de bioseguridad para la
                                prevención del covid-19 en el subsector panelero
                              </a>
                            </div>
                          </div>
                        </Accordion.Body>
                        <Accordion.Header>
                          <h2 className="h2-title-header">Sanitarias</h2>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-16379-de-2003/"
                                className="a-accordion"
                              >
                                Resolución 16379 de 2003
                              </a>
                              <br />
                              <span>
                                Por la cual se reglamenta el control metrológico
                                y del contenido de producto en pre-empacados.
                              </span>
                            </div>
                            <br />
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-5109-de-2005/"
                                className="a-accordion"
                              >
                                Resolución 5109 de 2005
                              </a>
                              <br />
                              <span>
                                Por el cual se establece el reglamento técnico
                                sobre los requisitos de rotulado o etiquetado
                                que deben cumplir los alimentos envasados y
                                materias primas de alimentos para consumo
                                humano.
                              </span>
                            </div>
                            <br />
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-779-de-2006/"
                                className="a-accordion"
                              >
                                Resolución 779 de 2006
                              </a>
                              <br />
                              <span>
                                Por la cual se establece el reglamento técnico
                                sobre los requisitos sanitarios que se deben
                                cumplir en la producción y comercialización de
                                la panela para consumo humano y se dictan otras
                                disposiciones.
                              </span>
                            </div>
                            <br />
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-3462-de-2008/"
                                className="a-accordion"
                              >
                                Resolución 3462 de 2008
                              </a>
                              <br />
                              <span>
                                Por el cual se modifica el artículo 9 de las
                                condiciones sanitarias de los trapiches y el
                                artículo 15 sobre requisitos para la exportación
                                de panela de la Resolución 779 de 2006 y se
                                dictan otras disposiciones.
                              </span>
                            </div>

                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-3544-de-2009/"
                                className="a-accordion"
                              >
                                Resolución 3544 de 2009
                              </a>
                              <br />
                              <span>
                                Por el cual se modifica el artículo 11 y el
                                artículo 13 de la Resolución 779 de 2006, sobre
                                envase y rotulado respectivamente.
                              </span>
                            </div>

                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-333-de-2011/"
                                className="a-accordion"
                              >
                                Resolución 333 de 2011
                              </a>
                              <br />
                              <span>
                                Por la cual se establece el reglamento técnico
                                sobre los requisitos de rotulado o etiquetado
                                nutricional que deben cumplir los alimentos
                                envasados para consumo humano.
                              </span>
                            </div>

                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-4121-de-2011/"
                                className="a-accordion"
                              >
                                Resolución 4121 de 2011
                              </a>
                              <br />
                              <span>
                                Por el cual se modifica parcialmente la
                                Resolución 779 de 2006, modificadas por las
                                Resoluciones 3462 de 2008 y 3544 de 2009.
                              </span>
                            </div>
                          </div>
                        </Accordion.Body>
                        <Accordion.Header>
                          <h2 className="h2-title-header">Laboral</h2>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div>
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/abc-resolucion-0312-2/"
                                className="a-accordion"
                              >
                                ABC- Resolución 0312 de 2019
                              </a>
                              <br />
                              <span>
                                Por el cual se definen los Estándares Mínimos
                                del Sistema de Gestión de la Seguridad y Salud
                                en el Trabajo SG-SST.
                              </span>
                            </div>
                            <br />
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-0312-de-2019/"
                                className="a-accordion"
                              >
                                Resolución 0312 de 2019
                              </a>
                              <br />
                              <span>
                                Por el cual se definen los Estándares Mínimos
                                del Sistema de Gestión de la Seguridad y Salud
                                en el Trabajo SG-SST.
                              </span>
                            </div>
                            <br />
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/decreto-604-de-2013/"
                                className="a-accordion"
                              >
                                Decreto 604 de 2013
                              </a>
                              <br />
                              <span>
                                Por el cual se reglamenta el acceso y operación
                                del Servicio Social Complementario de Beneficios
                                Económicos Periódicos –BEPS.
                              </span>
                            </div>
                            <br />
                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/resolucion-5094-de-2013/"
                                className="a-accordion"
                              >
                                Resolución 5094 de 2013
                              </a>
                              <br />
                              <span>
                                Por el cual se ajusta la planilla integrada de
                                autoliquidación de aporte PILA de acuerdo con lo
                                establecido en el Decreto 2616 de 2013.
                              </span>
                            </div>

                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/decreto-2616-de-2013/"
                                className="a-accordion"
                              >
                                Decreto 2616 de 2013
                              </a>
                              <br />
                              <span>
                                Por medio del cual se regula la cotización a
                                seguridad social para trabajadores dependientes
                                que laboran por períodos inferiores a un mes, se
                                desarrolla el mecanismo financiero y operativo
                                de que trata el artículo 172 de la Ley 1450 de
                                2011 y se dictan disposiciones tendientes a
                                lograr la formalización laboral de los
                                trabajadores informales.
                              </span>
                            </div>

                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/ley-100-de-1993/"
                                className="a-accordion"
                              >
                                Ley 100 de 1993
                              </a>
                              <br />
                              <span>
                                Por la cual se crea el sistema de seguridad
                                social integral y se dictan otras disposiciones.
                              </span>
                            </div>

                            <div>
                              <a
                                href="https://fedepanela.org.co/gremio/descargas/decreto-295-de-2017/"
                                className="a-accordion"
                              >
                                Decreto 295 de 2017
                              </a>
                              <br />
                              <span>
                                Por el cual se adiciona un Capítulo al Título 13
                                de la Parte 2 del Libro 2 del Decreto 1833 de
                                2016, a efectos de reglamentar la contribución
                                de terceros para personas vinculadas al Servicio
                                Social Complementario de Beneficios Económicos
                                Periódicos (BEPS) y se dictan otras
                                disposiciones
                              </span>
                            </div>
                          </div>
                        </Accordion.Body>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      Sistema Único de Información Normativa, SUIN - No aplica
                    </h2>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      4.2. Sujetos obligados del orden territorial - No aplica
                    </h2>
                  </Accordion.Header>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      4.3. Otros sujetos obligados - No aplica
                    </h2>
                  </Accordion.Header>
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
export default Normatividad;
