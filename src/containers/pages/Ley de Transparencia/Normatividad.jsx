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
        <h1 className="text-center h1-title mt-5">4. Normatividad
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
                      

                      4.1. Normatividad
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                  <div className="container">
                  <div className="container">
                            
                  <a href="https://fedepanela.org.co/gremio/descargas/ley-40-de-1990/" className="a-accordion">Ley 40 de 1990</a>  <span>en formato Legible PDF </span> 
                  <br />
<span>Por la cual se dictan normas para la protección y el desarrollo de la producción de la panela y se establece la cuota de fomento panelero.</span> 
                            
                            
                      <Accordion.Header>
                        <h2 className="h2-title-header">Comercial</h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                        <div>
                        <a href="https://fedepanela.org.co/gremio/descargas/ley-40-de-1990/" className="a-accordion">Resolución 16379 de 2003</a>  
                        <br />
                        <span>Por la cual se reglamenta el control metrológico y del contenido de producto en pre-empacados</span>
                        </div>
                        <br />
                        <div>
                        <a href="https://fedepanela.org.co/gremio/descargas/resolucion-5109-de-2005/" className="a-accordion">Resolución 5109 de 2005</a>  
                        <br />
                        <span>Por el cual se establece el reglamento técnico sobre los requisitos de rotulado o etiquetado que deben cumplir los alimentos envasados y materias primas de alimentos para consumo humano.</span>
                        </div>
                        <br />
                        <div>
                        <a href="https://fedepanela.org.co/gremio/descargas/resolucion-333-de-2011/" className="a-accordion">Resolución 333 de 2011</a>  
                        <br />
                        <span>Por la cual se establece el reglamento técnico sobre los requisitos de rotulado o etiquetado nutricional que deben cumplir los alimentos envasados para consumo humano.</span>
                        </div>
                        </div>
                      </Accordion.Body>

                      <Accordion.Header>
                        <h2 className="h2-title-header">Ambiental</h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                        <div>
                        <a href="https://fedepanela.org.co/gremio/descargas/decreto-1594-de-1984/" className="a-accordion">Decreto 1594 de 1984</a>  
                        <br />
                        <span>Usos del agua y residuos líquidos.</span>
                        </div>
                        <br />
                        <div>
                        <a href="https://fedepanela.org.co/gremio/descargas/decreto-948-de-1995/" className="a-accordion">Decreto 948 de 1995</a>  
                        <br />
                        <span>Prevención y control de la contaminación atmosférica y la protección de la calidad del aire.</span>
                        </div>
                        <br />
                        <div>
                        <a href="https://fedepanela.org.co/gremio/descargas/protocolo-general-de-bioseguridad-para-la-prevencion-del-covid-19-en-el-subsector-panelero/" className="a-accordion">Protocolo general de bioseguridad para la prevención del covid-19 en el subsector panelero</a>  
                        
                        </div>
                        </div>
                      </Accordion.Body>

                      <Accordion.Header>
                        <h2 className="h2-title-header">Sanitarias</h2>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>
                        <div>
                        <a href="https://fedepanela.org.co/gremio/descargas/resolucion-16379-de-2003/" className="a-accordion">Resolución 16379 de 2003</a>  
                        <br />
                        <span>Por la cual se reglamenta el control metrológico y del contenido de producto en pre-empacados.</span>
                        </div>
                        <br />
                        <div>
                        <a href="https://fedepanela.org.co/gremio/descargas/resolucion-5109-de-2005/" className="a-accordion">Resolución 5109 de 2005</a>  
                        <br />
                        <span>Por el cual se establece el reglamento técnico sobre los requisitos de rotulado o etiquetado que deben cumplir los alimentos envasados y materias primas de alimentos para consumo humano.</span>
                        </div>
                        <br />
                        <div>
                        <a href="https://fedepanela.org.co/gremio/descargas/resolucion-5109-de-2005/" className="a-accordion">Resolución 5109 de 2005</a>  
                        <br />
                        <span>Por el cual se establece el reglamento técnico sobre los requisitos de rotulado o etiquetado que deben cumplir los alimentos envasados y materias primas de alimentos para consumo humano.</span>
                        </div>
                        <br />
                        <div>
                        <a href="https://fedepanela.org.co/gremio/descargas/protocolo-general-de-bioseguridad-para-la-prevencion-del-covid-19-en-el-subsector-panelero/" className="a-accordion">Protocolo general de bioseguridad para la prevención del covid-19 en el subsector panelero</a>  
                        
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
                      
                      3.2. Funciones y deberes
                    </h2>
                  </Accordion.Header>
                  <Accordion.Body>
                        <div>
                        <a
                          className="a-accordion"
                          href="http://localhost:3000/FondodeFomento/EstructuraOrganica"
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
                          href="http://localhost:3000/FondodeFomento/EstructuraOrganica"
                        >
                          Ver más información
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/Manual-de-Procedimientos-2018-incluido-devoluciones-correccion-termino.pdf"
                        >
                          a. Procesos y procedimientos para la toma de decisiones en las diferentes áreas.
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/MANUAL-DE-PROCEDIMIENTOS-CONTABLE-VERSION-1-2016-COREECCION-CUARTO-ENVIO-AUDITORIA-RTA.pdf"
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
                          href="http://localhost:3000/FondodeFomento/EstructuraOrganica"
                        >
                          a. Estructura orgánica de la entidad.
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/10/ORGANIGRAMA-FONDO.pdf"
                        >
                          b. Estructura orgánica de manera gráfica y legible, en un formato accesible y usable [PDF].
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/11/Manual-de-Funciones-.pdf"
                        >
                          c. Descripción de la estructura orgánica, donde se dé información general de cada división o dependencia.
                        </a>
                      </div>
                      
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <h2 className="h2-title-header">3.5. Directorio de información de servidores públicos, contratistas y empleados</h2>
                  </Accordion.Header>

                  <Accordion.Body>
                    <div className="container">
                      <div>
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/DIRECTORIO-DE-INFORMACION-DE-SERVIDORES-PUBLICOS.pdf"
                        >
                          Ver más información
                        </a>
                      </div>
                    
                      <Accordion.Header>
                        <h2 className="h2-title-header">Escala Salarial</h2>
                      </Accordion.Header>

                      <Accordion.Body>
                        <div>
                          
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/09/ESCALA-SALARIAL.pdf" /* Falta esta seccion */
                        >
                          2016
                        </a>

                        <br />
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/10/ESCALA-SALARIAL-2017.pdf" /* Falta esta seccion */
                        >
                          2017
                        </a>

                        <br />
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/10/ESCALA-SALARIAL2018.pdf" /* Falta esta seccion */
                        >
                          2018
                        </a>

                        <br />
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/10/ESCALA-SALARIAL-2019.pdf" /* Falta esta seccion */
                        >
                          2019
                        </a>

                        <br />
                        <a
                          className="a-accordion"
                          href="https://fedepanela.org.co/gremio/wp-content/uploads/2020/10/ESCALA-SALARIAL-2020-.pdf" /* Falta esta seccion */
                        >
                          2020
                        </a>
                        
                        </div>
                        
                      </Accordion.Body>
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
                          href="http://localhost:3000/NuestraFederacion/directorio"
                        >
                          Directorio Oficina Central de Fedepanela
                        </a>
                      </div>
                      <div>
                        <a
                          className="a-accordion"
                          href="http://localhost:3000/NuestraFederacion/directorio"
                        >
                          Directorio de Recaudo
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="http://localhost:3000/NuestraFederacion/directorio"
                        >
                          Directorio Coordinadores Técnico Regionales
                        </a>
                      </div>

                      <div>
                        <a
                          className="a-accordion"
                          href="http://localhost:3000/NuestraFederacion/directorio"
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
                          href="https://fedepanela.org.co/gremio/fondo-de-fomento/ofertas-de-empleo/"  /*Falta seccion*/
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
export default Normatividad;
