import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import CardDownload from "components/Nuestra Fede/CardDownload";
import re2023 from "assets/docs/Reforma-Estatutaria-2023.pdf";
import re003 from "assets/docs/Resolucion-003-Reglamento-Elecciones-2023.pdf";
import { motion } from "framer-motion";
import Accordion from "react-bootstrap/Accordion";
function Informaciondeinteres() {
  return (
    <Layout>
      <Navbar />

      <div
        className="container"
        style={{ marginTop: "100px", marginBottom: "50px" }}
      >
        <h1 className="text-center h1-title mt-5">2. Información de Interés</h1>
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
                    <h2 className="h2-title-header">2.1. Datos abiertos</h2>
                  </Accordion.Header>

                  <Accordion.Body>
                    <div className="container">
                      <div>
                        <a
                          className="a-accordion"
                          href="http://www.sipa.org.co/wp/index.php/category/ofertapanelera/cifras/#"
                        >
                          Cifras del sector
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="http://www.sipa.org.co/wp/index.php/2019/03/06/precios-semanales-para-panelas-corrientes-y-especiales-2019/"
                        >
                          Precios semanales
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="http://www.sipa.org.co/wp/index.php/category/precios-mensuales/"
                        >
                          Precios mensuales
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="http://www.sipa.org.co/wp/index.php/category/precios-historicos/"
                        >
                          Precios historicos
                        </a>
                      </div>

                      <Accordion.Header>
                        <h2 className="h2-title-header">Mapa Interactivo</h2>
                      </Accordion.Header>

                      <Accordion.Body>
                        <div>
                          <center>
                            <h3>Video cómo acceder a los mapas interactivos</h3>
                          </center>
                          <center>
                            <iframe
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/KBOvtHTmJ1s?si=4l3v7-RGbseXJ9Zm"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                            ></iframe>
                          </center>
                          <br />
                          <a
                            className="a-accordion"
                            href="http://www.sipa.org.co/wp/index.php/category/precios-historicos/"
                          >
                            Mapa Interactivo Precios de la panela en el país
                          </a>
                        </div>
                      </Accordion.Body>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      2.2. Estudios, investigaciones y otras publicaciones
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                        <div>
                        <a
                          className="a-accordion"
                          href="http://www.sipa.org.co/wp/"
                        >
                          Ver más información
                        </a>
                        </div>
                      </Accordion.Body>
                  
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      2.3. Convocatorias
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                        <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/fondo-de-fomento/convocatorias/" /* Falta esta seccion */
                        >
                          Ver más información
                        </a>
                        </div>
                      </Accordion.Body>
                  
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      2.5. Glosario
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                        <div>
                        <a
                          className="a-accordion"
                          href="http://www.sipa.org.co/wp/index.php/glosario-panelero/"
                        >
                          Ver más información
                        </a>
                        </div>
                      </Accordion.Body>
                  
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      2.6. Noticias
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                                        <div className="container">
                            
                                            <span>Se pueden visualizar en la página de inicio</span> <a href="https://fedepanela.org.co/gremio" className="a-accordion">https://fedepanela.org.co/gremio</a> Falta esta seccion
                                            <br />
                                            <span>Y en la sección de Comunicacionesd / Blog -</span><a href="https://fedepanela.org.co/gremio/category/blog/" className="a-accordion">https://fedepanela.org.co/gremio/category/blog/</a> Falta esta seccion
                                        </div>
                                    </Accordion.Body>
                  
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      2.7. Calendario de Actividades
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                        <div>
                        <a
                          className="a-accordion"
                          href="http://localhost:3000/FondodeFomento/CalendarioEventos"
                        >
                          Ver más información
                        </a>
                        </div>
                      </Accordion.Body>
                  
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      2.8. Información para niñas, niños y adolescentes
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                        <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/fondo-de-fomento/informacion-para-ninos-ninas-y-adolescentes/" /*Falta esta seccion */
                        >
                          Ver más información
                        </a>
                        </div>
                      </Accordion.Body>
                  
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    {" "}
                    <h2 className="h2-title-header">
                      {" "}
                      2.9. Información adicional
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                        <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio" /*Falta esta seccion */
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
export default Informaciondeinteres;
