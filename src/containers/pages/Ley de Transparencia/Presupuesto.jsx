import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { motion } from "framer-motion";
import Accordion from "react-bootstrap/Accordion";
import doc1 from "assets/docs/PRESUPUESTO-ANO-2021-3V.pdf";
import doc2 from "assets/docs/Presupuesto-General-Asignado-2022.pdf";
import doc3 from "assets/docs/Presupuesto-General-Asignado-2023.pdf";
import doc4 from "assets/docs/PRESUPUESTO-INGRESOS-2016.pdf";
import doc5 from "assets/docs/PRESUPUESTO-INGRESOS-2017-.pdf";
import doc6 from "assets/docs/PRESUPUESTO-INGRESOS-2017-.pdf";
import doc7 from "assets/docs/Ejecucion-Presupuestal-2019.pdf";
import doc8 from "assets/docs/Ejecucion-Presupuestal-2020.pdf";
import doc9 from "assets/docs/Ejecucion-presupuestal-historica-anual-del-ano-2021.pdf";
import doc10 from "assets/docs/2-Presupuesto-Ejecutado-2022.pdf";

import doc11 from "assets/docs/Estados-Financieros-2014parte-1.pdf";
import doc12 from "assets/docs/Estados-financieros-2014-parte-2.pdf";
import doc13 from "assets/docs/Estados-Financieros-2015.pdf";
import doc14 from "assets/docs/ESTADOS-FINANCIEROS-2016.pdf";
import doc15 from "assets/docs/ESTADOS-FINANCIEROS-2017.pdf";
import doc16 from "assets/docs/BALANCE-2018.pdf";
import doc17 from "assets/docs/ESTADOS-FINANCIEROS-FONDO-2019-1.pdf";
import doc18 from "assets/docs/001-ESTADOS-FINANCIEROS-FONDO.pdf";
import doc19 from "assets/docs/stados-Financieros-Fondo-2021.pdf";
import doc20 from "assets/docs/Estados-Financieros-Comparativos-FFP-4Trim22-1.pdf";
import doc2023 from "assets/docs/doc2023.pdf";
import doc20232 from "assets/docs/doc2023-2.pdf";


function Presupuesto() {
  return (
    <Layout>
      <Navbar />

      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <h1 className="text-center h1-title mt-5">5 Presupuesto</h1>
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
                    <h2 className="h2-title-header">Ten en cuenta</h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">
                      <div className="container">
                        <span>
                          ... A mas tardar el 31 de enero de cada año, deberán
                          publicar en su respectiva página web en Plan de acción
                          para el año siguiente, en el cual especificarán los
                          objetivos, las estrategias de los proyectos, las
                          metas, los responsables, los planes generales de
                          compra y la distribución presupuestal de sus proyectos
                          de inversión, junto a los indicadores de gestión.
                        </span>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      5.1. Presupuesto general asignado
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="container">       {/*
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
                      */}
                      <div>
                        <a
                          className="a-accordion"
                          href={doc1} target="blank"
                        >
                          2021
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc2} target="blank"
                        >
                          2022
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc3} target="blank"
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
                      {/*
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
*/}
                    
                    <div>
                        <a
                          className="a-accordion"
                          href={doc4} target="blank"
                        >
                          2016
                        </a>
                      </div>
                    <div>
                        <a
                          className="a-accordion"
                          href={doc5} target="blank"
                        >
                          2017
                        </a>
                      </div>

           
                      <div>
                        <a
                          className="a-accordion"
                          href={doc6} target="blank"
                        >
                          2018
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href={doc7} target="blank"
                        >
                          2019
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc8} target="blank"
                        >
                          2020
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc9} target="blank"
                        >
                          2021
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc10} target="blank"
                        >
                          2022
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href={doc2023} target="blank"
                        >
                          2023
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
                          href={doc11} target="blank"
                        >
                          2014 - 1
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href={doc12} target="blank"
                        >
                          2014 - 2
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc13} target="blank"
                        >
                          2015
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href={doc14} target="blank"
                        >
                          2016
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc15} target="blank"
                        >
                          2017
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href={doc16} target="blank"
                        >
                          2018
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc17} target="blank"
                        >
                          2019
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc18} target="blank"
                        >
                          2020
                        </a>
                      </div>


                      <div>
                        <a
                          className="a-accordion"
                          href={doc19} target="blank"
                        >
                          2021
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc20} target="blank"
                        >
                          2022
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href={doc20232} target="blank"
                        >
                          2023
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
export default Presupuesto;