
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"
import doc1 from "assets/docs/Ley-40-de-1990-1.pdf"
import doc2 from "assets/docs/Manual-de-Funciones-.pdf"
import doc3 from "assets/docs/Manual-de-Procedimientos-2018-incluido-devoluciones-correccion-termino.pdf"
import doc4 from "assets/docs/MANUAL-DE-PROCEDIMIENTOS-CONTABLE-VERSION-1-2016-COREECCION-CUARTO-ENVIO-AUDITORIA-RTA.pdf"
import doc5 from "assets/docs/Manual-Gestion-de-Solictudes-y-Tratamiento-de-Datos-Personales-FNFP.pdf"

import doc6 from "assets/docs/PLAN-DE-ACCION-Y-PRESUPUESTO-GASTOS-E-INVERSION-ANO-2016.pdf"
import doc7 from "assets/docs/PLAN-DE-ACCION-Y-PRESUPUESTO-GASTOS-E-INVERSION-ANO-2017.pdf"
import doc8 from "assets/docs/PLAN-DE-ACCION-Y-PRESUPUESTO-GASTOS-E-INVERSION-ANO-2018.pdf"
import doc9 from "assets/docs/PLAN-DE-ACCION-Y-PRESUPUESTO-GASTOS-E-INVERSION-ANO-2019.pdf"

import doc10 from "assets/docs/2016-FICHA-PROYECTO-ASISTENCIA-TECNICA-2016.pdf"
import doc11 from "assets/docs/2017-FICHA-PROYECTO-ASISTENCIA-TECNICA-2017.pdf"
import doc12 from "assets/docs/2018-FICHA-PROYECTO-ASISTENCIA-TECNICA-2018.pdf"
import doc13 from "assets/docs/2019-FICHA-PROYECTO-ASISTENCIA-TECNICA-2019.pdf"
import doc14 from "assets/docs/2020-FICHA-PROYECTO-ASISTENCIA-TECNICA-2020.pdf"
import doc15 from "assets/docs/FICHA-PROYECTO-ASISTENCIA-TECNICA-2021-v1_L.pdf"
import doc16 from "assets/docs/FICHA-PROYECTO-ASISTENCIA-TECNICA-2022-23-11-2021Vf-rev.pdf"

import doc17 from "assets/docs/2016-Ficha-Programa-Comercial-2016-.pdf"
import doc18 from "assets/docs/2017-FICHA-TECNICA-Programa-Comercial-2017.pdf"

import doc19 from "assets/docs/2019-FICHA_PROGRAMA_COMERCIAL_FFP_2019.pdf"
import doc20 from "assets/docs/2020-FICHA-_PROGRAMA_COMERCIAL_FFP_2020.pdf"
import doc21 from "assets/docs/FICHA_PROGRAMA_COMERCIAL_FFP_2021_4_15.11.2020-2.pdf"
import doc22 from "assets/docs/FICHA_PROGRAMA_COMERCIAL_FFP_2022_V4_30112021.pdf"

import doc23 from "assets/docs/2019-FICHA-TIPO-PROGRAMAS-Y-PROYECTOS-CONTROL-A-LA-EVASION-2019.pdf"
import doc24 from "assets/docs/FICHA-DE-CONTROL-A-LA-EVASION-CON-CINTA-DE-METALIZADA-JUNIO-23-vTO-BNO-JUAN-M-1.pdf"
import doc25 from "assets/docs/FICHA-DEFINITIVA-CONTROL-A-LA-EVASION-CINTAS-2021-1.pdf"


import doc26 from "assets/docs/2016-FICHA-PROMOCION-AL-CONSUMO-2016-mod.pdf"
import doc27 from "assets/docs/2017-FICHA-FINAL-PROGRAMA-DE-PROMOCION-AL-CONSUMO-APROBADA-MADR.pdf"
import doc28 from "assets/docs/FICHA-FINAL-PROGRAMA-DE-PROMOCION-AL-CONSUMO-APROBADA-MADR.pdf"
import doc29 from "assets/docs/Ficha-programa-Promocion-al-Consumo-FFP-2022-V12.pdf"

import doc30 from "assets/docs/2018-FICHA-SISTEMA-DE-INFORMACION-2018.pdf"
import doc31 from "assets/docs/2019-Ficha-sistemas-de-informacion-2019-.pdf"
import doc32 from "assets/docs/2020-Ficha-sistemas-de-informacion-2020.pdf"
import doc33 from "assets/docs/Ficha-sistemas-de-informacion-2021-v2-1.pdf"


import doc34 from "assets/docs/FICHA-PROGRAMA-SOCIO-EMPRESARIAL-2022.pdf"

import doc35 from "assets/docs/ING2016.pdf"
import doc36 from "assets/docs/ING2017-.pdf"
import doc37 from "assets/docs/INGRESOS-2018-1.pdf"
import doc38 from "assets/docs/INGRESOS-2019-1.pdf"
import doc39 from "assets/docs/Desagregado-2020.pdf"


import doc40 from "assets/docs/3-INFORME-Fondo-primer-trimestre.pdf"
import doc41 from "assets/docs/2-INFORME-FFP-II-TRIMESTRE-2017-1.pdf"
import doc42 from "assets/docs/3-INFORME-FFP-III-Trimestre.pdf"
import doc43 from "assets/docs/3-INFORME-ffp-CUARTO-TRIMESTRE.pdf"


import doc44 from "assets/docs/1.-INFORME-FFP-PRIMER-TRIMESTRE-2018.pdf"
import doc45 from "assets/docs/Informe-FFP-segundo-trimestre-2018-v_2.pdf"
import doc46 from "assets/docs/3.-Informe-FFP-III-trimestre-2018-final.pdf"
import doc47 from "assets/docs/4.-Informe-FFP-IV-trimestre-2018.pdf"

import doc48 from "assets/docs/1.-Informe-1er-trimestre-2019-v_2.pdf"
import doc49 from "assets/docs/2.-Informe-2do-trimestre-2019.pdf"
import doc50 from "assets/docs/3.-Iinforme-3cer-trimestre-2019.pdf"
import doc51 from "assets/docs/4.-Informe-IV-trimestre-2019.pdf"

import doc52 from "assets/docs/Informe-Gestion-1er-Trimestre-2020-FFP.pdf"
import doc53 from "assets/docs/Informe-II-TRIMESTRE-2020-FFP.pdf"
import doc54 from "assets/docs/Informe-3-TRIMESTRE-2020-FFP.pdf"
import doc55 from "assets/docs/Ley_1757_de_2015.pdf"
import ficha2023 from "assets/docs/ficha2023.pdf"
import programa2023 from "assets/docs/programa2023.pdf"
import promocion2023 from "assets/docs/promocion2023.pdf"
import socio2023 from "assets/docs/socio2023.pdf"








import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
function Planeacion() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">6 Planeación</h1>
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
                                        <h2 className="h2-title-header">
                                            6.1. Políticas, lineamientos y manuales</h2>
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <div className="container">
                                            <span className=""> a.  Políticas y lineamientos sectoriales e institucionales.</span>

                                            <ul>
                                                <li> <a href={doc1} target="blank" className="a-accordion">  Ley 40 de 1990</a></li>
                                                <li> <a href="/NuestraFederacion/PlanEstrategico" className="a-accordion">  Plan estratégico 2018-2022</a></li>

                                            </ul>
                                            <span className=""> b. Manuales</span>

                                            <ul>
                                                <li> <a href={doc2} className="a-accordion">  Manual de funciones</a></li>
                                                <li> <a href={doc3} className="a-accordion">  Manual de procedimientos</a></li>
                                                <li> <a href={doc4} className="a-accordion">  Manual de Procedimientos  - Contable  - Versión 1  - 2016 - Corrección cuarto envío auditoria respuesta</a></li>
                                                <li> <a href={doc5} className="a-accordion">  Manual Gestion de Solicitudes y Tratamiento de Datos Personales FNFP</a></li>

                                            </ul>
                                            <span className=""> c. planes estratégicos, sectoriales e institucionales</span>

                                            <ul>
                                                <li> <a href="/NuestraFederacion/PlanEstrategico" className="a-accordion">  Plan Estratégico 2018 - 2022</a></li>

                                            </ul>
                                            <span className=""> d. Plan de Rendición de cuentas.</span>
                                            <div>No aplica </div>
                                            <span className=""> e. Plan de Servicio al ciudadano.</span>
                                            <div>No aplica </div>
                                            <span className=""> f. Plan Antitrámites.</span>
                                            <div>No aplica </div>
                                            <span className=""> g. Plan Anticorrupción y de Atención al Ciudadano de conformidad con el Art. 73 de Ley 1474 de 2011</span>
                                            <div>No aplica </div>
                                            <span className=""> h. Contenido de toda decisión y/o política que haya adoptado y afecte al público, junto con sus fundamentos y toda interpretación autorizada de ellas.</span>
                                            <div>No aplica </div>

                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> <h2 className="h2-title-header"> 6.2. Plan de acción</h2></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <div>A continuación encuentra por año 1. Plan de acción y presupuesto de gastos e inversión del año y las fichas de los proyectos y programas que se van a ejecutar en cada año.</div>
                                            <div className="mt-2">Hay una ficha por programa en la que se especifica:</div>
                                            <div className="mt-2">Nombre del programa responsable</div>




                                            <ol>
                                                <li>  Manual de funciones</li>
                                                <li>  Descripción del proyecto</li>
                                                <li>  Antecedentes y justificación</li>
                                                <li>  Objetivos generales</li>
                                                <li>  Objetivos específicos</li>
                                                <li>  Metas y logros esperados</li>
                                                <li>  marco lógico: indicadores</li>
                                                <li>  Responsable</li>

                                            </ol>
                                            <ul>
                                                <li>  <a href={doc6} target="blank" className="a-accordion">  2016</a></li>
                                                <li>  <a href={doc7} target="blank" className="a-accordion">  2017</a></li>
                                                <li>  <a href={doc8} target="blank" className="a-accordion">  2018</a></li>
                                                <li>  <a href={doc9} target="blank" className="a-accordion">  2019</a></li>

                                                {/*
                                                <li>  <a href="" className="a-accordion">  2020</a></li>*/}


                                            </ul>

                                            En las fichas de los programas se encuentran los objetivos, estrategias, proyectos, metas y responsables


                                            <ul className="mt-2">
                                                <div className=" mx-1">Fichas Asistencia Técnica</div>
                                                <li>  <a href={doc10} target="blank" className="a-accordion">  2016</a></li>
                                                <li>  <a href={doc11} target="blank" className="a-accordion">  2017</a></li>
                                                <li>  <a href={doc12} target="blank" className="a-accordion">  2018</a></li>
                                                <li>  <a href={doc13} target="blank" className="a-accordion">  2019</a></li>
                                                <li>  <a href={doc14} target="blank" className="a-accordion">  2020</a></li>
                                                <li>  <a href={doc15} target="blank" className="a-accordion">  2021</a></li>
                                                <li>  <a href={doc16} target="blank" className="a-accordion">  2022</a></li>
                                                <li>  <a href={ficha2023} target="blank" className="a-accordion">  2023</a></li>


                                            </ul>
                                            <ul className="mt-2">
                                                <div className=" mx-1">Fichas Programa Comercial</div>
                                                <li>  <a href={doc17} target="blank" className="a-accordion">  2016</a></li>
                                                <li>  <a href={doc18} target="blank" className="a-accordion">  2017</a></li>
                                                <li>  <a href="/" className="a-accordion">  2018</a></li>
                                                <li>  <a href={doc19} target="blank" className="a-accordion">  2019</a></li>
                                                <li>  <a href={doc20} target="blank" className="a-accordion">  2020</a></li>
                                                <li>  <a href={doc21} target="blank" className="a-accordion">  2021</a></li>
                                                <li>  <a href={doc22} target="blank" className="a-accordion">  2022</a></li>
                                                <li>  <a href={programa2023} target="blank" className="a-accordion">  2023</a></li>


                                            </ul>
                                            <ul className="mt-2">
                                                <div className=" mx-1">Fichas Programa Control a la Evasión</div>
                                                {/*
                                                <li>  <a href="" className="a-accordion">  2015</a></li>
                                                <li>  <a href="" className="a-accordion">  2016</a></li>
                                                <li>  <a href="" className="a-accordion">  2017</a></li>
                                                <li>  <a href="" className="a-accordion">  2018</a></li> */}
                                                <li>  <a href={doc23} target="blank" className="a-accordion">  2019</a></li>
                                                <li>  <a href={doc24} target="blank" className="a-accordion">  2020</a></li>
                                                <li>  <a href={doc25} target="blank" className="a-accordion">  2021</a></li>


                                            </ul>
                                            <ul className="mt-2">
                                                <div className=" mx-1">Fichas Promoción al consumo</div>

                                                <li>  <a href={doc26} target="blank" className="a-accordion">  2016</a></li>
                                                <li>  <a href={doc27} target="blank" className="a-accordion">  2017</a></li>
                                                <li>  <a href={doc28} target="blank" className="a-accordion">  2018</a></li>
                                                <li>  <a href="" className="a-accordion">  2019</a></li>
                                                <li>  <a href="" className="a-accordion">  2020</a></li>
                                                <li>  <a href="" className="a-accordion">  2021</a></li>
                                                <li>  <a href={doc29} target="blank" className="a-accordion">  2022</a></li>
                                                <li>  <a href={promocion2023} target="blank" className="a-accordion">  2023</a></li>


                                            </ul>

                                            <ul className="mt-2">
                                                <div className=" mx-1">Fichas Programa Sistema de Información</div>


                                                <li>  <a href={doc30} target="blank" className="a-accordion">  2018</a></li>
                                                <li>  <a href={doc31} target="blank" className="a-accordion">  2019</a></li>
                                                <li>  <a href={doc32} target="blank" className="a-accordion">  2020</a></li>
                                                <li>  <a href={doc33} target="blank" className="a-accordion">  2021</a></li>
                                                <li>  <a href="" target="blank" className="a-accordion">  2022</a></li>
                                                <li>  <a href="" target="blank" className="a-accordion">  2023</a></li>


                                            </ul>
                                            <ul className="mt-2">
                                                <div className=" mx-1">Ficha Programa Socio empresarial</div>


                                                <li>  <a href={doc34} target="blank" className="a-accordion">  2022</a></li>
                                                <li>  <a href={socio2023} target="blank" className="a-accordion">  2023</a></li>


                                            </ul>

                                            <span className=""> f. Planes generales de compras</span>
                                            <div><span className=""> g. Distribución presupuestal de proyectos de inversión junto a los indicadores de gestión.</span></div>

                                            <div>No aplica </div>

                                            <div><span className=""> h. Presupuesto desagregado con modificaciones</span></div>
                                            <ul className="mt-2">
                                                <div className=" mx-1">Fichas Programa Sistema de Información</div>


                                                <li>  <a href={doc34} target="blank" className="a-accordion">  2016</a></li>
                                                <li>  <a href={doc35} target="blank" className="a-accordion">  2017</a></li>
                                                <li>  <a href={doc36} target="blank" className="a-accordion">  2018</a></li>
                                                <li>  <a href={doc37} target="blank" className="a-accordion">  2019</a></li>
                                                <li>  <a href={doc38} target="blank" className="a-accordion">  2020</a></li>


                                            </ul>

                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> <h2 className="h2-title-header">6.3. Programas y proyectos en ejecución</h2></Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">
                                            <div className="">a. Proyectos de inversión o programas que se ejecuten en cada vigencia. Los proyectos de inversión deben ordenarse según la fecha de inscripción en el Banco de Programas y Proyectos de Inversión nacional, departamental, municipal o distrital, según sea el caso, de acuerdo a lo establecido en el artículo 77 de la Ley 1474 de 2011.</div>

                                            <ul className="mt-2">
                                                <div className=" mx-1">Fichas Asistencia Técnica</div>


                                                <li>  <a href={doc10} target="blank" className="a-accordion">  2016</a></li>
                                                <li>  <a href={doc11} target="blank" className="a-accordion">  2017</a></li>
                                                <li>  <a href={doc12} target="blank" className="a-accordion">  2018</a></li>
                                                <li>  <a href={doc13} target="blank" className="a-accordion">  2019</a></li>
                                                <li>  <a href={doc14} target="blank" className="a-accordion">  2020</a></li>
                                                <li>  <a href={doc15} target="blank" className="a-accordion">  2021</a></li>


                                            </ul>
                                            <ul className="mt-2">
                                                <div className=" mx-1">Fichas Programa Comercial</div>
                                                <li>  <a href={doc17} target="blank" className="a-accordion">  2016</a></li>
                                                <li>  <a href={doc18} target="blank" className="a-accordion">  2017</a></li>
                                                <li>  <a href="/" className="a-accordion">  2018</a></li>
                                                <li>  <a href={doc19} target="blank" className="a-accordion">  2019</a></li>
                                                <li>  <a href={doc20} target="blank" className="a-accordion">  2020</a></li>
                                                <li>  <a href={doc21} target="blank" className="a-accordion">  2021</a></li>
                                                <li>  <a href={doc22} target="blank" className="a-accordion">  2022</a></li>



                                            </ul>
                                            <ul className="mt-2">
                                                <div className=" mx-1">Fichas Programa Control a la Evasión</div>
                                                {/*
                                                <li>  <a href="" className="a-accordion">  2015</a></li>
                                                <li>  <a href="" className="a-accordion">  2016</a></li>
                                                <li>  <a href="" className="a-accordion">  2017</a></li>
                                                <li>  <a href="" className="a-accordion">  2018</a></li> */}
                                                <li>  <a href={doc23} target="blank" className="a-accordion">  2019</a></li>
                                                <li>  <a href={doc24} target="blank" className="a-accordion">  2020</a></li>
                                                <li>  <a href={doc25} target="blank" className="a-accordion">  2021</a></li>



                                            </ul>
                                            <ul className="mt-2">
                                                <div className=" mx-1">Fichas Promoción al consumo</div>

                                                <li>  <a href={doc26} target="blank" className="a-accordion">  2016</a></li>
                                                <li>  <a href={doc27} target="blank" className="a-accordion">  2017</a></li>
                                                <li>  <a href={doc28} target="blank" className="a-accordion">  2018</a></li>
                                                <li>  <a href="" className="a-accordion">  2019</a></li>
                                                <li>  <a href="" className="a-accordion">  2020</a></li>
                                                <li>  <a href="" className="a-accordion">  2021</a></li>
                                                <li>  <a href={doc29} target="blank" className="a-accordion">  2022</a></li>
                                                <li>  <a href={promocion2023} target="blank" className="a-accordion">  2023</a></li>


                                            </ul>
                                            <ul className="mt-2">
                                                <div className=" mx-1">Fichas Programa Sistema de Información</div>


                                                <li>  <a href={doc34} target="blank" className="a-accordion">  2016</a></li>
                                                <li>  <a href={doc35} target="blank" className="a-accordion">  2017</a></li>
                                                <li>  <a href={doc36} target="blank" className="a-accordion">  2018</a></li>
                                                <li>  <a href={doc37} target="blank" className="a-accordion">  2019</a></li>
                                                <li>  <a href={doc38} target="blank" className="a-accordion">  2020</a></li>


                                            </ul>

                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">

                                    <Accordion.Header> <h2 className="h2-title-header"> 6.4. Metas, objetivos e indicadores de gestión y/ó desempeño  </h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">
                                            <ul className="mt-2">



                                                <li>  <a href="/NuestraFederacion/PlanEstrategico" target="blank" className="a-accordion">  Metas - Plan estrátegico</a></li>

{/*
                                                <li>  <a href={doc34} target="blank" className="a-accordion">  2016</a></li>
*/}

                                                <div className=" mx-1">2017</div>

                                                <li>  <a href={doc40} target="blank" className="a-accordion">  Informe de gestión - I Trimestre</a></li>
                                                <li>  <a href={doc41} target="blank" className="a-accordion">  Informe de gestión - II Trimestre</a></li>
                                                <li>  <a href={doc42} target="blank" className="a-accordion">  Informe de gestión - III Trimestre</a></li>
                                                <li>  <a href={doc43} target="blank" className="a-accordion">  Informe de gestión - IV Trimestre</a></li>
                                                <div className=" mx-1">2018</div>

                                                <li>  <a href={doc44} target="blank" className="a-accordion">  Informe de gestión - I Trimestre</a></li>
                                                <li>  <a href={doc45} target="blank" className="a-accordion">  Informe de gestión - II Trimestre</a></li>
                                                <li>  <a href={doc46} target="blank" className="a-accordion">  Informe de gestión - III Trimestre</a></li>
                                                <li>  <a href={doc47} target="blank" className="a-accordion">  Informe de gestión - IV Trimestre</a></li>

                                                <div className=" mx-1">2019</div>

                                                <li>  <a href={doc48} target="blank" className="a-accordion">  Informe de gestión - I Trimestre</a></li>
                                                <li>  <a href={doc49} target="blank" className="a-accordion">  Informe de gestión - II Trimestre</a></li>
                                                <li>  <a href={doc50} target="blank" className="a-accordion">  Informe de gestión - III Trimestre</a></li>
                                                <li>  <a href={doc51} target="blank" className="a-accordion">  Informe de gestión - IV Trimestre</a></li>


                                                <div className=" mx-1">2020</div>

                                                <li>  <a href={doc52} target="blank" className="a-accordion">  Informe de gestión - I Trimestre</a></li>
                                                <li>  <a href={doc53} target="blank" className="a-accordion">  Informe de gestión - II Trimestre</a></li>
                                                <li>  <a href={doc54} target="blank" className="a-accordion">  Informe de gestión - III Trimestre</a></li>


                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">

                                    <Accordion.Header> <h2 className="h2-title-header"> 6.5. Participación en la formulación de políticas</h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">
                                            <ul className="mt-2">





                                                <div className=" mx-1">No aplica para:</div>
                                                <div className=" mx-1">a. Sujetos que pueden participar.</div>
                                                <div className=" mx-1">b. Medios presenciales y electrónicos.</div>
                                                <div className=" mx-1">c. Áreas responsables de la orientación y vigilancia para su cumplimiento.</div>
                                                <div className=" mx-1">Fedepanela es una entidad privada, sin ánimo de lucro que administra el Fondo de Fomento Panelero, por tal razón no es una entidad que ejecute políticas públicas, Fedepanela rinde cuentas a la Junta Directiva del Fondo.</div>
                                                <div className=" mx-1">Nos permitimos citar la Ley Estatutaria 1757 de 2015</div>
                                                <div className=" mx-1">ARTÍCULO  1. Objeto. El objeto de la presente ley es promover, proteger y garantizar modalidades del derecho a participar en la vida política, administrativa, económica, social y cultural, y así mismo a controlar el poder político.</div>
                                                <div className=" mx-1">La presente ley regula la iniciativa popular y normativa ante las corporaciones públicas, el referendo, la consulta popular, la revocatoria del mandato, el plebiscito y el cabildo abierto; y establece las normas fundamentales por las que se regirá la participación democrática de las organizaciones civiles.</div>

                                                <li>  <a href={doc55} target="blank" className="a-accordion">  Ver Ley 1757 de 2015</a></li>

                                            </ul>
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
export default Planeacion