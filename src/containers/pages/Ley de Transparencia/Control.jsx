
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import CardDownload from "components/Nuestra Fede/CardDownload"

import { motion } from 'framer-motion';
import Accordion from 'react-bootstrap/Accordion';
import doc1 from "assets/docs/Dictamen-de-auditoria-2014.pdf"
import doc2 from "assets/docs/DICTAMEN-DE-AUDITORIA-GRANT-THORNTON.pdf"
import doc3 from "assets/docs/DICTAMEN-DE-AUDITORIA-GARSSA-2015.pdf"
import doc4 from "assets/docs/DICTAMEN-DE-AUDITORIA-2016.pdf"
import doc5 from "assets/docs/DICTAMEN-DE-AUDITORIA-2017.pdf"
import doc6 from "assets/docs/DICTAMEN-DE-AUDITORIA-2018-1.pdf"
import doc7 from "assets/docs/INFORME-DE-AUDITORIA-PRIMER-SEMESTRE-2019.pdf"
import doc8 from "assets/docs/INFORME-DE-AUDITORIA-SEGUNDO-SEMESTRE-2019.pdf"
import doc9 from "assets/docs/OPINION-AUDITORIA-2019.pdf"
import doc10 from "assets/docs/Informe-segundo-Semestre-FFP-2020-final-v3_.pdf"



import doc11 from "assets/docs/3-INFORME-Fondo-primer-trimestre-1.pdf"
import doc12 from "assets/docs/2-INFORME-FFP-II-TRIMESTRE-2017-1-1.pdf"
import doc13 from "assets/docs/3-INFORME-FFP-III-Trimestre-1.pdf"
import doc14 from "assets/docs/3-INFORME-ffp-CUARTO-TRIMESTRE-1.pdf"

import doc15 from "assets/docs/1.-INFORME-FFP-PRIMER-TRIMESTRE-2018.pdf"
import doc16 from "assets/docs/3.-Informe-FFP-III-trimestre-2018-final.pdf"

import doc17 from "assets/docs/1.-Informe-1er-trimestre-2019-v_2.pdf"
import doc18 from "assets/docs/2.-Informe-2do-trimestre-2019.pdf"
import doc19 from "assets/docs/3.-Iinforme-3cer-trimestre-2019.pdf"
import doc20 from "assets/docs/4.-Informe-IV-trimestre-2019.pdf"

import doc21 from "assets/docs/Informe-Gestion-1er-Trimestre-2020-FFP.pdf"
import doc22 from "assets/docs/Informe-II-TRIMESTRE-2020-FFP.pdf"
import doc23 from "assets/docs/Informe-3-TRIMESTRE-2020-FFP.pdf"

import doc24 from "assets/docs/certificado_69_20101231_12-1.pdf"
import doc25 from "assets/docs/certificado_69_20111231_12.pdf"
import doc26 from "assets/docs/certificado_69_20121231_12.pdf"
import doc27 from "assets/docs/certificado_69_20131231_12-1.pdf"
import doc28 from "assets/docs/certificado_69_20141231_12.pdf"
import doc29 from "assets/docs/certificado_69_20151231_12.pdf"
import doc30 from "assets/docs/certificado_69_20161231_12.pdf"
import doc31 from "assets/docs/certificado_69_20171231_12.pdf"
import doc32 from "assets/docs/certificado_69_20181231_12-1.pdf"
import doc33 from "assets/docs/2020-01-13-certificado_69_20191231_1.pdf"
import doc34 from "assets/docs/certificado_69_20201231_12.pdf"

import doc35 from "assets/docs/Ley_1757_de_2015.pdf"

import doc36 from "assets/docs/125106-certificado_69_20200630_6-2.pdf"
import doc37 from "assets/docs/CERTIFICACION.pdf"
import doc38 from "assets/docs/2012-04-13-certificado_69_20120331_3.pdf"
import doc39 from "assets/docs/2012-07-03-101536-certificado_69_20120630_3.pdf"
import doc40 from "assets/docs/2012-10-17-152659-certificado_69_20120930_3.pdf"


import doc401 from "assets/docs/2013-07-17-150443-certificado_69_20130630_3.pdf"
import doc402 from "assets/docs/2013-10-17-140927-certificado_69_20130930_3.pdf"
import doc403 from "assets/docs/2014-01-16-161232-certificado_69_20131231_3.pdf"

import doc41 from "assets/docs/2014-04-11-114604-certificado_69_20140331_3.pdf"
import doc42 from "assets/docs/2014-07-14-120337-certificado_69_20140630_3.pdf"
import doc43 from "assets/docs/2014-10-14-132047-certificado_69_20140930_3.pdf"
import doc44 from "assets/docs/2015-01-19-151728-certificado_69_20141231_3.pdf"

import doc45 from "assets/docs/2015-04-23-110803-certificado_69_20150331_3.pdf"
import doc46 from "assets/docs/2015-07-07-124122-certificado_69_20150630_3.pdf"
import doc47 from "assets/docs/2015-10-15-170121-certificado_69_20150930_3.pdf"
import doc48 from "assets/docs/2016-01-15-173529-certificado_69_20151231_3.pdf"

import doc49 from "assets/docs/2016-04-14-163503-certificado_69_20160331_3.pdf"
import doc50 from "assets/docs/2016-07-18-162548-certificado_69_20160630_3.pdf"
import doc51 from "assets/docs/2016-10-19-155430-certificado_69_20160930_3.pdf"
import doc52 from "assets/docs/2017-01-18-170340-certificado_69_20161231_3.pdf"

import doc53 from "assets/docs/2017-04-21-152523-certificado_69_20170331_3.pdf"
import doc54 from "assets/docs/2017-07-17-092659-certificado_69_20170630_3.pdf"
import doc55 from "assets/docs/2017-10-18-100822-certificado_69_20170930_3.pdf"
import doc56 from "assets/docs/2018-01-19-142312-certificado_69_20171231_3.pdf"

import doc57 from "assets/docs/2018-04-13-155931-certificado_69_20180331_3.pdf"
import doc58 from "assets/docs/2018-07-13-174904-certificado_69_20180630_3.pdf"
import doc59 from "assets/docs/2018-10-18-091807-certificado_69_20180930_3.pdf"
import doc60 from "assets/docs/2019-01-21-155820-certificado_69_20181231_3.pdf"

import doc61 from "assets/docs/2019-04-15-124535-certificado_69_20190331_3.pdf"
import doc62 from "assets/docs/2019-07-17-182513-certificado_69_20190630_3.pdf"
import doc63 from "assets/docs/2019-09-04-091254-certificado_69_20190831_1.pdf"
import doc64 from "assets/docs/2019-11-18-115306-certificado_69_20191031_1.pdf"
import doc65 from "assets/docs/2019-12-10-095304-certificado_69_20191130_1.pdf"
import doc66 from "assets/docs/2019-1015-164312-certificado_69_20190930_1.pdf"
import doc67 from "assets/docs/2020-01-13-certificado_69_20191231_1.pdf"

import doc68 from "assets/docs/2020-02-10-182518-certificado_69_20200131_1.pdf"
import doc69 from "assets/docs/2020-03-04-130321-certificado_69_20200229_1.pdf"
import doc70 from "assets/docs/2020-04-15-164947-certificado_69_20200331_1.pdf"
import doc71 from "assets/docs/2020-05-08-122915-certificado_69_20200430_1-1.pdf"
import doc72 from "assets/docs/2020-06-08-215738-certificado_69_20200531_1-1.pdf"
import doc73 from "assets/docs/2020-07-09-140212-certificado_69_20200630_1.pdf"
import doc74 from "assets/docs/2020-08-13-140911-certificado_69_20200731_1.pdf"
import doc75 from "assets/docs/2020-09-10-084250-certificado_69_20200831_1.pdf"
import doc76 from "assets/docs/certificado_69_20201031_1-.pdf"
import doc77 from "assets/docs/certificado_69_20200930_1.pdf"
import doc78 from "assets/docs/certificado_69_20201130_1.pdf"
import doc79 from "assets/docs/certificado_69_20201231_1-.pdf"

import doc80 from "assets/docs/certificado_69_20210131_1-1.pdf"
import doc81 from "assets/docs/certificado_69_20210228_1-1.pdf"
import doc82 from "assets/docs/certificado_69_20210331_1-1.pdf"
import doc83 from "assets/docs/certificado_69_20210430_1-1.pdf"
import doc84 from "assets/docs/certificado_69_20210531_1.pdf"
import doc85 from "assets/docs/certificado_69_20210630_1-1.pdf"
import doc86 from "assets/docs/certificado_69_20210731_1-1.pdf"
import doc87 from "assets/docs/certificado_69_20210831_1-1.pdf"
import doc88 from "assets/docs/certificado_69_20210930_1-1.pdf"
import doc89 from "assets/docs/certificado_69_20211031_1-1.pdf"
import doc90 from "assets/docs/certificado_69_20211130_1-1.pdf"
import doc91 from "assets/docs/certificado_69_20211231_1-1.pdf"

import doc92 from "assets/docs/certificado_69_20220131_1.pdf"
import doc93 from "assets/docs/certificado_69_20220228_1-1.pdf"
import doc94 from "assets/docs/certificado_69_20220331_1-1.pdf"
import doc95 from "assets/docs/certificado_69_20220430_1.pdf"
import doc96 from "assets/docs/certificado_69_20220531_1-1.pdf"
import doc97 from "assets/docs/certificado_69_20220630_1-2.pdf"

import doc98 from "assets/docs/2011-04-07-150022-certificado_69_20101231_12-1.pdf"
import doc99 from "assets/docs/2012-04-09-164259-certificado_69_20111231_12.pdf"
import doc100 from "assets/docs/2013-04-06-140646-certificado_69_20121231_12.pdf"
import doc101 from "assets/docs/2014-04-21-152138-certificado_69_20131231_12-1.pdf"
import doc102 from "assets/docs/2015-04-09-094041-certificado_69_20141231_12.pdf"
import doc103 from "assets/docs/2016-04-05-152822-certificado_69_20151231_12.pdf"
import doc104 from "assets/docs/2017-04-10-164315-certificado_69_20161231_12.pdf"
import doc105 from "assets/docs/2018-04-10-151723-certificado_69_20171231_12.pdf"
import doc106 from "assets/docs/2019-04-15-144153-certificado_69_20181231_12-1.pdf"
import doc107 from "assets/docs/certificado_69_20191231_12.pdf"
import doc108 from "assets/docs/certificado_69_20201231_12.pdf"
import doc109 from "assets/docs/certificado_69_20211231_12.pdf"

import doc110 from "assets/docs/Dictamen-de-auditoria-2014.pdf"
import doc111 from "assets/docs/DICTAMEN-DE-AUDITORIA-GRANT-THORNTON.pdf"
import doc112 from "assets/docs/DICTAMEN-DE-AUDITORIA-GARSSA-2015.pdf"
import doc113 from "assets/docs/DICTAMEN-DE-AUDITORIA-2016.pdf"
import doc114 from "assets/docs/DICTAMEN-DE-AUDITORIA-2017.pdf"
import doc115 from "assets/docs/DICTAMEN-DE-AUDITORIA-2018-1.pdf"
import doc116 from "assets/docs/INFORME-DE-AUDITORIA-PRIMER-SEMESTRE-2019.pdf"
import doc117 from "assets/docs/INFORME-DE-AUDITORIA-SEGUNDO-SEMESTRE-2019.pdf"
import doc118 from "assets/docs/OPINION-AUDITORIA-2019.pdf"
import doc119 from "assets/docs/Informe-segundo-Semestre-FFP-2020-final-v3_.pdf"

import doc120 from "assets/docs/PDF-OFICIO-REMISORIO-INFORME-DE-ACCIONES-CUMPLIDAS-FONDO-DE-FOMENTO-PANELERO.pdf"
import doc121 from "assets/docs/2020-07-09-140212-certificado_69_20200630_1.pdf"

import doc122 from "assets/docs/125106-certificado_69_20200630_6-2.pdf"
import doc123 from "assets/docs/CERTIFICACION.pdf"








function Control() {

    return (
        <Layout>

            <Navbar />

            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">7. Control</h1>
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
                                        <h2 className="h2-title-header">7.1. Informes de gestión, evaluación y auditoría</h2>
                                    </Accordion.Header>

                                    <Accordion.Body>
                                        <div className="container">

                                            <ul>
                                                <li> <a href={doc1} className="a-accordion"> 2014</a></li>
                                                <li> <a href={doc2} className="a-accordion">  2015-Grant Hornton</a></li>
                                                <li> <a href={doc3} className="a-accordion">  2015-Garssa</a></li>
                                                <li> <a href={doc4} className="a-accordion">  2016</a></li>
                                                <li> <a href={doc5} className="a-accordion">  2017</a></li>
                                                <li> <a href={doc6} className="a-accordion">  2018</a></li>
                                                <li> <a href={doc7} className="a-accordion">  2019-Informe Primer Semestre</a></li>
                                                <li> <a href={doc8} className="a-accordion">  2019-Informe Segundo Semestre</a></li>
                                                <li> <a href={doc9} className="a-accordion">  2019-Opinión Auditoría</a></li>
                                                <li> <a href={doc10} className="a-accordion">  2020-Informe segundo Semestre</a></li>

                                            </ul>
                                            <span className=""> a. Informe enviado al Congreso/Asamblea/Concejo.</span>
                                            <span className="">A continuación se encuentran los informes de gestión presentados a la Junta Directiva del Fondo de Fomento Panelero, reuniones que se realizan de forma trimestral</span>
                                            {/* 
                                            <ul>

                                                <li> <a href={doc4} className="a-accordion">  2016-Informe de gestión</a></li>

                                            </ul>*/}
                                            <ul>

                                                <div className="mt-2">2017</div>

                                                <li> <a href={doc11} className="a-accordion">  Informe de gestión - I Trimestre</a></li>
                                                <li> <a href={doc12} className="a-accordion">  Informe de gestión - II Trimestre</a></li>
                                                <li> <a href={doc13} className="a-accordion">  Informe de gestión - III Trimestre</a></li>
                                                <li> <a href={doc14} className="a-accordion">  Informe de gestión - IV Trimestre</a></li>

                                            </ul>
                                            <ul>

                                                <div className="mt-2">2018</div>

                                                <li> <a href={doc15} className="a-accordion">  Informe de gestión - I Trimestre</a></li>
                                                <li> <a href={doc16} className="a-accordion">  Informe de gestión - III Trimestre</a></li>


                                            </ul>
                                            <ul>

                                                <div className="mt-2">2019</div>

                                                <li> <a href={doc17} className="a-accordion">  Informe de gestión - I Trimestre</a></li>
                                                <li> <a href={doc18} className="a-accordion">  Informe de gestión - II Trimestre</a></li>
                                                <li> <a href={doc19} className="a-accordion">  Informe de gestión - III Trimestre</a></li>
                                                <li> <a href={doc20} className="a-accordion">  Informe de gestión - IV Trimestre</a></li>

                                            </ul>
                                            <ul>

                                                <div className="mt-2">2020</div>

                                                <li> <a href={doc21} className="a-accordion">  Informe de gestión - I Trimestre</a></li>
                                                <li> <a href={doc22} className="a-accordion">  Informe de gestión - II Trimestre</a></li>
                                                <li> <a href={doc23} className="a-accordion">  Informe de gestión - III Trimestre</a></li>

                                            </ul>
                                            <span className=""> b.Informe de rendición de la cuenta fiscal a la Contraloría General de la República o a los organismos de control territorial, según corresponda.</span>
                                            <ul>



                                                <li> <a href={doc24} className="a-accordion">  2010</a></li>
                                                <li> <a href={doc25} className="a-accordion">  2011</a></li>
                                                <li> <a href={doc26} className="a-accordion">  2012</a></li>
                                                <li> <a href={doc27} className="a-accordion">  2013</a></li>
                                                <li> <a href={doc28} className="a-accordion">  2014</a></li>
                                                <li> <a href={doc29} className="a-accordion">  2015</a></li>
                                                <li> <a href={doc30} className="a-accordion">  2016</a></li>
                                                <li> <a href={doc31} className="a-accordion">  2017</a></li>
                                                <li> <a href={doc32} className="a-accordion">  2018</a></li>
                                                <li> <a href={doc33} className="a-accordion">  2019</a></li>
                                                <li> <a href={doc34} className="a-accordion">  2020</a></li>


                                            </ul>
                                            <span className=""> c. Informe de rendición de cuentas a los ciudadanos, incluyendo la respuesta a las solicitudes realizadas por los ciudadanos, antes y durante el ejercicio de rendición.</span>
                                            <div className="mt-2">NO APLICA: No tiene obligación de rendir cuentas a la ciudadanía:</div>
                                            <div className="mt-2">Fedepanela es una entidad privada, sin ánimo de lucro que administra el Fondo de Fomento Panelero, por tal razón no es una entidad que ejecute políticas públicas, Fedepanela rinde cuentas a la Junta Directiva del Fondo.</div>
                                            <a href={doc35} className="a-accordion">  Lo anterior basado en la Ley 1757 de 2015</a>
                                            <div className="mt-2"> d. Informes a organismos de inspección, vigilancia y control.</div>
                                            <div className="mt-2">Delitos contra la administración pública</div>
                                            <ul>


                                                <li> <a href={doc36} className="a-accordion">  Certificado 69 20200630-2</a></li>
                                                <li> <a href={doc37} className="a-accordion">  Certificación</a></li>

                                            </ul>
                                            <div className="mt-2">2012</div>
                                            <ul>


                                                <li> <a href={doc38} className="a-accordion"> 2012-04-13-certificado_69_20120331_3</a></li>
                                                <li> <a href={doc39} className="a-accordion"> 2012-07-03-101536-certificado_69_20120630_3</a></li>
                                                <li> <a href={doc40} className="a-accordion"> 2012-10-17-152659-certificado_69_20120930_3</a></li>

                                            </ul>
                                            <div className="mt-2">2013</div>
                                            <ul>


                                                <li> <a href={doc401} className="a-accordion"> 2013-07-17-150443-certificado_69_20130630_3</a></li>
                                                <li> <a href={doc402} className="a-accordion"> 2013-10-17-140927-certificado_69_20130930_3</a></li>
                                                <li> <a href={doc403} className="a-accordion"> 2014-01-16-161232-certificado_69_20131231_3</a></li>

                                            </ul>
                                            <div className="mt-2">2014</div>
                                            <ul>


                                                <li> <a href={doc41} className="a-accordion">2014-04-11-114604-certificado_69_20140331_3</a></li>
                                                <li> <a href={doc42} className="a-accordion"> 2014-07-14-120337-certificado_69_20140630_3</a></li>
                                                <li> <a href={doc43} className="a-accordion"> 2014-10-14-132047-certificado_69_20140930_3</a></li>
                                                <li> <a href={doc44} className="a-accordion"> 2015-01-19-151728-certificado_69_20141231_3</a></li>

                                            </ul>
                                            <div className="mt-2">2015</div>
                                            <ul>


                                                <li> <a href={doc45} className="a-accordion">2015-04-23-110803-certificado_69_20150331_3</a></li>
                                                <li> <a href={doc46} className="a-accordion">2015-07-07-124122-certificado_69_20150630_3</a></li>
                                                <li> <a href={doc47} className="a-accordion"> 2015-10-15-170121-certificado_69_20150930_3</a></li>
                                                <li> <a href={doc48} className="a-accordion"> 2016-01-15-173529-certificado_69_20151231_3</a></li>

                                            </ul>
                                            <div className="mt-2">2016</div>
                                            <ul>


                                                <li> <a href={doc49} className="a-accordion">2016-04-14-163503-certificado_69_20160331_3</a></li>
                                                <li> <a href={doc50} className="a-accordion">2016-07-18-162548-certificado_69_20160630_3</a></li>
                                                <li> <a href={doc51} className="a-accordion">2016-10-19-155430-certificado_69_20160930_3</a></li>
                                                <li> <a href={doc52} className="a-accordion">2017-01-18-170340-certificado_69_20161231_3</a></li>

                                            </ul>
                                            <div className="mt-2">2017</div>
                                            <ul>


                                                <li> <a href={doc53} className="a-accordion">2017-04-21-152523-certificado_69_20170331_3</a></li>
                                                <li> <a href={doc54} className="a-accordion">2017-07-17-092659-certificado_69_20170630_3</a></li>
                                                <li> <a href={doc55} className="a-accordion">2017-10-18-100822-certificado_69_20170930_3</a></li>
                                                <li> <a href={doc56} className="a-accordion">2018-01-19-142312-certificado_69_20171231_3</a></li>

                                            </ul>
                                            <div className="mt-2">2018</div>
                                            <ul>


                                                <li> <a href={doc57} className="a-accordion">2018-04-13-155931-certificado_69_20180331_3</a></li>
                                                <li> <a href={doc58} className="a-accordion">2018-07-13-174904-certificado_69_20180630_3</a></li>
                                                <li> <a href={doc59} className="a-accordion">2018-10-18-091807-certificado_69_20180930_3</a></li>
                                                <li> <a href={doc60} className="a-accordion">2019-01-21-155820-certificado_69_20181231_3</a></li>

                                            </ul>
                                            <div className="mt-2">2019</div>
                                            <ul>


                                                <li> <a href={doc61} className="a-accordion">2019-04-15-124535-certificado_69_20190331_3</a></li>
                                                <li> <a href={doc62} className="a-accordion">2019-07-17-182513-certificado_69_20190630_3</a></li>
                                                <li> <a href={doc63} className="a-accordion">2019-09-04-091254-certificado_69_20190831_1</a></li>
                                                <li> <a href={doc64} className="a-accordion">2019-11-18-115306-certificado_69_20191031_1</a></li>
                                                <li> <a href={doc65} className="a-accordion">2019-12-10-095304-certificado_69_20191130_1</a></li>
                                                <li> <a href={doc66} className="a-accordion">2019-1015-164312-certificado_69_20190930_1</a></li>
                                                <li> <a href={doc67} className="a-accordion">2020-01-13-certificado_69_20191231_1</a></li>

                                            </ul>

                                            <div className="mt-2">2020</div>
                                            <ul>


                                                <li> <a href={doc68} className="a-accordion">2020-02-10-182518-certificado_69_20200131_1</a></li>
                                                <li> <a href={doc69} className="a-accordion">2020-03-04-130321-certificado_69_20200229_1</a></li>
                                                <li> <a href={doc70} className="a-accordion">2020-04-15-164947-certificado_69_20200331_1</a></li>
                                                <li> <a href={doc71} className="a-accordion">2020-05-08-122915-certificado_69_20200430_1 (1)</a></li>
                                                <li> <a href={doc72} className="a-accordion">2020-06-08-215738-certificado_69_20200531_1 (1)</a></li>
                                                <li> <a href={doc73} className="a-accordion">2020-07-09-140212-certificado_69_20200630_1</a></li>
                                                <li> <a href={doc74} className="a-accordion">2020-08-13-140911-certificado_69_20200731_1</a></li>
                                                <li> <a href={doc75} className="a-accordion">2020-09-10-084250-certificado_69_20200831_1</a></li>
                                                <li> <a href={doc76} className="a-accordion">certificado_69_20200931_1</a></li>
                                                <li> <a href={doc77} className="a-accordion">certificado_69_20201030_1</a></li>
                                                <li> <a href={doc78} className="a-accordion">certificado_69_20201130_1</a></li>
                                                <li> <a href={doc79} className="a-accordion">certificado_69_20201230_1</a></li>

                                            </ul>

                                            <div className="mt-2">2021</div>
                                            <ul>


                                                <li> <a href={doc80} className="a-accordion">certificado_69_20210131_1 (1)</a></li>
                                                <li> <a href={doc81} className="a-accordion">certificado_69_20210228_1 (1)</a></li>
                                                <li> <a href={doc82} className="a-accordion">certificado_69_20210331_1 (1)</a></li>
                                                <li> <a href={doc83} className="a-accordion">certificado_69_20210430_1 (1)</a></li>
                                                <li> <a href={doc84} className="a-accordion">certificado_69_20210531_1</a></li>
                                                <li> <a href={doc85} className="a-accordion">certificado_69_20210630_1(1)</a></li>
                                                <li> <a href={doc86} className="a-accordion">certificado_69_20210731_1(1)</a></li>
                                                <li> <a href={doc87} className="a-accordion">certificado_69_20210831_1 (1)</a></li>
                                                <li> <a href={doc88} className="a-accordion">certificado_69_20210930_1 (1)</a></li>
                                                <li> <a href={doc89} className="a-accordion">certificado_69_20211031_1 (1)</a></li>
                                                <li> <a href={doc90} className="a-accordion">certificado_69_20211130_1-1</a></li>
                                                <li> <a href={doc91} className="a-accordion">certificado_69_20211231_1-1</a></li>

                                            </ul>

                                            <div className="mt-2">2022</div>
                                            <ul>


                                                <li> <a href={doc92} className="a-accordion">certificado_69_20220131_1</a></li>
                                                <li> <a href={doc93} className="a-accordion">certificado_69_20220228_1 (1)</a></li>
                                                <li> <a href={doc94} className="a-accordion">certificado_69_20220331_1 (1)</a></li>
                                                <li> <a href={doc95} className="a-accordion">certificado_69_20220430_1</a></li>
                                                <li> <a href={doc96} className="a-accordion">certificado_69_20220531_1 (1)</a></li>
                                                <li> <a href={doc97} className="a-accordion">certificado_69_20220630_1 (2)</a></li>

                                            </ul>
                                            <div className="mt-2">Informe de la rendición de cuenta fiscal a la Contraloria</div>
                                            <ul>


                                                <li> <a href={doc98} className="a-accordion">2010</a></li>
                                                <li> <a href={doc99} className="a-accordion">2011</a></li>
                                                <li> <a href={doc100} className="a-accordion">2012</a></li>
                                                <li> <a href={doc101} className="a-accordion">2013</a></li>
                                                <li> <a href={doc102} className="a-accordion">2014</a></li>
                                                <li> <a href={doc103} className="a-accordion">2015</a></li>
                                                <li> <a href={doc104} className="a-accordion">2016</a></li>
                                                <li> <a href={doc105} className="a-accordion">2017</a></li>
                                                <li> <a href={doc106} className="a-accordion">2018</a></li>
                                                <li> <a href={doc107} className="a-accordion">2019</a></li>
                                                <li> <a href={doc108} className="a-accordion">2020</a></li>
                                                <li> <a href={doc109} className="a-accordion">2021</a></li>

                                            </ul>




                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">

                                    <Accordion.Header> <h2 className="h2-title-header"> 7.2. Reportes de control interno</h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">
                                            <ul className="mt-2">


                                                <li> <a href={doc110} className="a-accordion">2014</a></li>
                                                <li> <a href={doc111} className="a-accordion">2015 - Grant Hornton</a></li>
                                                <li> <a href={doc112} className="a-accordion">2015 - Garssa</a></li>
                                                <li> <a href={doc113} className="a-accordion">2016</a></li>
                                                <li> <a href={doc114} className="a-accordion">2017</a></li>
                                                <li> <a href={doc115} className="a-accordion">2018</a></li>
                                                <li> <a href={doc116} className="a-accordion">2019 - Informe Primer Semestre</a></li>
                                                <li> <a href={doc117} className="a-accordion">2019 - Informe Segundo Semestre</a></li>
                                                <li> <a href={doc118} className="a-accordion">2019 - Opinión Auditoria</a></li>
                                                <li> <a href={doc119} className="a-accordion">2020 - Informe segundo Semestre</a></li>

                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">

                                    <Accordion.Header> <h2 className="h2-title-header"> 7.3. Planes de Mejoramiento</h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">
                                            <div className="my-2">a. Planes de Mejoramiento vigentes exigidos por entes de control internos o externos. De acuerdo con los hallazgos realizados por el respectivo organismo de control.</div>
                                            <div className="my-2">El Fondo de Fomento Panelero ha cumplido el plan de mejoramiento propuesto por la Contraloría General de la Nación en el año 2015, como consta en la certificación de Auditoría Adjunta y la cual se subió al SIRECI como consta en certificado  de "ACUSE DE ACEPTACIÓN DE RENDICIÓN" DE del SIRECI que se adjunta: </div>
                                            <div className="my-2">CERTIFICACIÓN DE ACUSE DE ACEPTACIÓN DE RENDICION Y CERTIFICACIÓN AUDITORIA CUMPLIMIENTO PLAN DE MEJORAMIENTO CONTRALORIA</div>
                                        </div>

                                        <ul className="mt-2">

                                            <li> <a href={doc120} className="a-accordion">Oficio remisorio de acciones cumplidas Fondo de Fomento Panelero</a></li>
                                            <li> <a href={doc121} className="a-accordion">Certificado SIRECI - Contraloría de la Nación</a></li>

                                        </ul>
                                        <div className="mt-2">b. Enlace al sitio web del organismo de control en donde se encuentren los informes que éste ha elaborado sobre la entidad.</div>
                                        <a href="https://www.contraloria.gov.co/documents/20181/479044/2015-CGR-CDSA+00745+-+Fedepanela+FNP+-+Vigs.+2013-2014.PDF.pdf/fde67bff-7b51-4454-ab1f-b1fd9629ef1d?version=1.0" className="a-accordion">Link - Informes Contraloria</a>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">

                                    <Accordion.Header> <h2 className="h2-title-header"> 7.4. Entes de control que vigilan a la entidad y mecanismos de supervisión</h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">

                                            <a href="https://www.contraloria.gov.co/documents/20181/479044/2015-CGR-CDSA+00745+-+Fedepanela+FNP+-+Vigs.+2013-2014.PDF.pdf/fde67bff-7b51-4454-ab1f-b1fd9629ef1d?version=1.0" className="a-accordion">a. Relación de todas las entidades que vigilan al sujeto obligado.</a>
                                            <div className="mt-2">b. Mecanismos internos y externos de supervisión, notificación y vigilancia pertinente al sujeto obligado.</div>
                                            <div className="mt-2">Los Mecanismos internos de supervisión, notificación y vigilancia pertinente al sujeto obligado son la Junta Directiva del Fondo de Fomento y la auditoria Interna</div>
                                            <div className="mt-2">Los Mecanismos externos de supervisión, notificación y vigilancia pertinente al sujeto obligado son la la Procuraduría General de la Republica y la Contraloría General de la Republica</div>
                                            <div className="mt-2">c. Indicar, como mínimo, el tipo de control que se ejecuta al interior y exterior (fiscal, social, político, etc.).</div>

                                            <ul className="mt-2">
                                                <div> El tipo de control que se ejecuta al interior y exterior se realiza así.</div>

                                                <li> Junta Directiva trimestralmente</li>
                                                <li> Auditoria Interna trimestralmente</li>
                                                <li> Presentación de informes de la cuenta fiscal a la Contraloría General de la Republica anualmente</li>
                                                <li> Presentación de informe de la gestión contractual a la Contraloría General de la Republica mensualmente</li>

                                            </ul>
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">

                                    <Accordion.Header> <h2 className="h2-title-header"> 7.5.  Información para población vulnerable</h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">

                                            <div className="mt-2">a. Normas, políticas, programas y proyectos dirigidos a población vulnerable de acuerdo con su misión y la normatividad aplicable.</div>
                                            <div className="mt-2">No aplica</div>
                                           
                                        </div>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">

                                    <Accordion.Header> <h2 className="h2-title-header"> 7.5.  Información para población vulnerable</h2></Accordion.Header>

                                    <Accordion.Body>

                                        <div className="container">

                                            <div className="mt-2">El Fondo de Fomento no tiene demandas. Se adjuntan los certificados</div>
                                            
                                            <ul className="mt-2">
                                                <div> El tipo de control que se ejecuta al interior y exterior se realiza así.</div>

                                                <li> <a href={doc122} className="a-accordion">Certificado 69 20200630-2</a></li>
                                                <li> <a href={doc123} className="a-accordion">Certificación</a></li>
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
export default Control