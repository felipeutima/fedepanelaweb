import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import CardDownload from "components/Nuestra Fede/CardDownload";
import doc from "assets/docs/LEY_40_DE_1990.pdf";
import doc1 from "assets/docs/RESOLUCIN_16379_DE_2003.pdf";
import doc2 from "assets/docs/RESOLUCIN_5109_DE_2005.pdf";
import doc3 from "assets/docs/RESOLUCIN_333_DE_2011.pdf";
import doc4 from "assets/docs/DECRETO_1594_DE_1984.pdf";
import doc5 from "assets/docs/DECRETO_948_DE_1995.pdf";
import doc6 from "assets/docs/FANZINE-FINAL-BIOSEGURIDAD.pdf";
import doc7 from "assets/docs/RESOLUCIN_16379_DE_2003.pdf";
import doc8 from "assets/docs/RESOLUCIN_779_DE_2006.pdf";
import doc9 from "assets/docs/RESOLUCIN_3462_DE_2008.pdf";
import doc10 from "assets/docs/RESOLUCIN_3544_DE_2009.pdf";
import doc11 from "assets/docs/RESOLUCIN_4121_DE_2011.pdf";
import doc12 from "assets/docs/DECRETO-604-DE-2013.pdf";
import doc13 from "assets/docs/LEY-100-DE-1993.pdf";
import doc14 from "assets/docs/DECRETO-295-DE-2017.pdf";

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
                          href={doc}
                          className="a-accordion"
                          target="blank"
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

                        <h2 className="h2-title-header mt-3">Comercial</h2>

                        <div>
                          <div>
                            <a
                              href={doc1}
                              className="a-accordion" target="blank"
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
                              href={doc2}
                              className="a-accordion" target="blank"
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
                              href={doc3}
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

                        <h2 className="h2-title-header my-3">Ambiental</h2>


                        <div>
                          <div>
                            <a
                              href={doc4}
                              className="a-accordion" target="blank"
                            >
                              Decreto 1594 de 1984
                            </a>
                            <br />
                            <span>Usos del agua y residuos líquidos.</span>
                          </div>
                          <br />
                          <div>
                            <a
                              href={doc5} target="blank"
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
                              href={doc6} target="blank"
                              className="a-accordion"
                            >
                              Protocolo general de bioseguridad para la
                              prevención del covid-19 en el subsector panelero
                            </a>
                          </div>
                        </div>


                        <h2 className="h2-title-header my-3">Sanitarias</h2>


                        <div>
                          <div>
                            <a
                              href={doc7} target="blank"
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
                              href={doc2} target="blank"
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
                              href={doc8} target="blank" className="a-accordion"
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
                              href={doc9} target="blank" className="a-accordion"
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
                              href={doc10} target="blank" className="a-accordion"
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
                              href={doc3} target="blank" className="a-accordion"
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
                              href={doc11} target="blank"
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


                        <h2 className="h2-title-header my-3">Laboral</h2>


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
                              href={doc12}
                              className="a-accordion" target="blank"
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
                              href={doc13} target="blank"
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
                              href={doc14} target="blank"
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