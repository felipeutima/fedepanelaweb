import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import CardsNews from "./CardsNews";

import ejemplo from "assets/img/ejemplo.jpeg"
import ejemplo1 from "assets/img/ejemplo2.png"
import ejemplo2 from "assets/img/ejemplo2.jpg"



function Noticias() {


    return (
        <>
            <div className="container-flex " style={{
        

            }} >

                <h1 className="text-center mt-5 h1-title">Últimas Noticias</h1>
                <>
                

                        <Carousel data-bs-theme="dark" className="mt-3">
                            <Carousel.Item>
                                <div className="container" style={{ padding: "0px 60px"  }}>


                                    <div className="row px-5" >
                                        <div className="col-md-4">
                                            <CardsNews titulo="Mesa sectorial Agroindustria" cuerpo="Desde la Mesa Sectorial Agroindustria de la Panela, queremos extender la invitación a todos y cada uno de ustedes a vincularse a esta mesa. Queremos contarles que para el periodo 2024 – 2025 tenemos como presidente del consejo ejecutivo al Sr. Hugo García a quién agradecemos su labor y el apoyo en esta invitación." img={ejemplo}></CardsNews>
                                        </div>
                                        <div className="col-md-4">
                                            <CardsNews titulo="ADENDA CRONOGRAMA CONVOCATORIA ELECCION DE MIEMBROS DE JUNTA DIRECTIVA DEL FFP" cuerpo="Convocatoria para la inscripción de candidatos a la elección de miembros de la junta directiva del fondo de fomento panelero 2024 a 2026." img={ejemplo1}></CardsNews>
                                        </div>

                                        <div className="col-md-4">
                                            <CardsNews titulo="
Efectiva intervención de Fedepanela hace desistir a empresa de solicitud de patente sobre la producción de melao de panela" cuerpo="Gracias a la firme postura de la Federación Nacional de Productores de Panela FEDEPANELA, que se opuso a las pretensiones de la empresa Sweet Melao Llc., registrada en Estados Unidos de solicitar patente para los procesos de producción del melao..." img={ejemplo2}></CardsNews>
                                        </div>

                                    </div>



                                </div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="container">


                                    <div className="row px-5" >
                                        <div className="col-md-4">
                                            <CardsNews titulo="Mesa sectorial Agroindustria" cuerpo="Desde la Mesa Sectorial Agroindustria de la Panela, queremos extender la invitación a todos y cada uno de ustedes a vincularse a esta mesa. Queremos contarles que para el periodo 2024 – 2025 tenemos como presidente del consejo ejecutivo al Sr. Hugo García a quién agradecemos su labor y el apoyo en esta invitación." img={ejemplo}></CardsNews>
                                        </div>
                                        <div className="col-md-4">
                                            <CardsNews titulo="ADENDA CRONOGRAMA CONVOCATORIA ELECCION DE MIEMBROS DE JUNTA DIRECTIVA DEL FFP" cuerpo="Convocatoria para la inscripción de candidatos a la elección de miembros de la junta directiva del fondo de fomento panelero 2024 a 2026." img={ejemplo1}></CardsNews>
                                        </div>

                                        <div className="col-md-4">
                                            <CardsNews titulo="
Efectiva intervención de Fedepanela hace desistir a empresa de solicitud de patente sobre la producción de melao de panela" cuerpo="Gracias a la firme postura de la Federación Nacional de Productores de Panela FEDEPANELA, que se opuso a las pretensiones de la empresa Sweet Melao Llc., registrada en Estados Unidos de solicitar patente para los procesos de producción del melao..." img={ejemplo2}></CardsNews>
                                        </div>

                                    </div>



                                </div>
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>

                            
                        </Carousel>
                   

                </>
            </div>
        </>

    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Noticias)