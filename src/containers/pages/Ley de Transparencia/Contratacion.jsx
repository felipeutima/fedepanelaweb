import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import CardDownload from "components/Nuestra Fede/CardDownload";
import re2023 from "assets/docs/Reforma-Estatutaria-2023.pdf";
import re003 from "assets/docs/Resolucion-003-Reglamento-Elecciones-2023.pdf";
import { motion } from "framer-motion";
import Accordion from "react-bootstrap/Accordion";
function Contratacion() {
  return (
    <Layout>
      <Navbar />

      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <h1 className="text-center h1-title mt-5">8. Contratación</h1>
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
                      8.1. Publicación de la información contractual
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/PRESUPUESTO-AN%CC%83O-2016-Ver-Junta-PDF.pdf"
                        >
                          2016
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/PRESUPUESTO-AN%CC%83O-2017-ver-2.pdf"
                        >
                          2017
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/PRESUPUESTO-AN%CC%83O-2018-Ver-1.pdf"
                        >
                          2018
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/PRESUPUESTO-AN%CC%83O-2019-Ver-Dic-20.pdf"
                        >
                          2019
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/PRESUPUESTO-AN%CC%83O-2020-VER-3.pdf"
                        >
                          2020
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2021/04/PRESUPUESTO-ANO-2021-3V.pdf"
                        >
                          2021
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/04/1-Contratación-General-Asignado-2022.pdf"
                        >
                          2022
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2023/06/1-Contratación-General-Asignado-2023.pdf"
                        >
                          2023
                        </a>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      5.2. Ejecución presupuestal histórica anual
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/descargas/informe-de-ejecucion-2014/"
                        >
                          2014
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/descargas/informe-de-ejecucion-2015/"
                        >
                          2015
                        </a>
                      </div>

                      <Accordion.Header>
                        {" "}
                        <h2 className="h2-title-header"> 2016</h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="container">
                          <div>
                            <a
                              className="a-accordion"
                              href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/PRESUPUESTO-INGRESOS-2016.pdf"
                            >
                              Contratación de Ingresos
                            </a>
                          </div>
                        </div>
                      </Accordion.Body>

                      <Accordion.Header>
                        {" "}
                        <h2 className="h2-title-header"> 2017</h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="container">
                          <div>
                            <a
                              className="a-accordion"
                              href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/PRESUPUESTO-INGRESOS-2017-.pdf"
                            >
                              Contratación de Ingresos
                            </a>
                          </div>
                        </div>
                      </Accordion.Body>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2021/04/Ejecucion-Presupuestal-2018.pdf"
                        >
                          2018
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2021/04/Ejecucion-Presupuestal-2020.pdf"
                        >
                          2020
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/04/2-Ejecucion-presupuestal-historica-anual-del-ano-2021.pdf"
                        >
                          2021
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2023/06/2-Contratación-Ejecutado-2022.pdf"
                        >
                          2022
                        </a>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      5.3. Estados financieros
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/descargas/estados-financieros-2014-1/"
                        >
                          2014 - 1
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/descargas/estados-financieros-2014-2/"
                        >
                          2014 - 2
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/descargas/estados-financieros-2015/"
                        >
                          2015
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/descargas/estados-financieros-2016/"
                        >
                          2016
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/descargas/estados-financieros-2017/"
                        >
                          2017
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/descargas/estados-financieros-2018/"
                        >
                          2018
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/ESTADOS-FINANCIEROS-FONDO-2019-1.pdf"
                        >
                          2019
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2021/05/001-ESTADOS-FINANCIEROS-FONDO.pdf"
                        >
                          2020
                        </a>
                      </div>


                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2022/04/3-Estados-Financieros-Fondo-2021.pdf"
                        >
                          2021
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2023/07/Estados-Financieros-Comparativos-FFP-4Trim22-1.pdf"
                        >
                          2022
                        </a>
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
  );
}
export default Contratacion;
