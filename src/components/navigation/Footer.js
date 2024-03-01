import { connect } from "react-redux"
//import { useState } from 'react'

import bgfooter from "assets/img/bgfooter.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import fedepng from "assets/img/fedepng.png"
import { Facebook, X, Youtube, Instagram, Tiktok, GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
function Footer() {

  return (

    <>

      <div className="footer-color" style={{
        backgroundImage: `url(${bgfooter})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}>

        <div className="overlay" style={{

          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Color oscuro con opacidad
        }}></div>

        <div className="container" style={{ zIndex: 2 }} >
          <footer className="row mt-3 pt-5  border-top" >
            <div className="col-md-6 mb-6">
              <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                <img
                  src={fedepng}
                  width={130}

                  classNameName=""
                  alt="Fedepanela"
                />


              </a>
              <div className="conatiner" style={{ backgroundColor: "rgb(0,0,0,0.3)", width: "70%" }}>

                <div className="row align-items-center" >
                  <div className="col-auto">
                    <GeoAltFill color="white" size={20} />
                  </div>
                  <div className="col">
                    <p className="mb-0">Cra 49B #91-48, La Castellana, Bogotá DC</p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-auto">
                    <TelephoneFill color="white" size={20} />
                  </div>
                  <div className="col">
                    <p className="mb-0">6222066 - 6222655 - 6222788</p>                </div>
                </div>
              </div>

            </div>


            <div className="col mb-3" style={{ backgroundColor: "rgb(0,0,0,0.3)" }}>
              <h5 className="text-white">Nuestra Federación</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2 "><a className="nav-link p-0 text-white ">Quienes Somos</a></li>
                <li className="nav-item mb-2 "><a className="nav-link p-0 text-white ">Plan Estrategico</a></li>
                <li className="nav-item mb-2 "><a className="nav-link p-0 text-white ">Estructura</a></li>
                <li className="nav-item mb-2 "><a className="nav-link p-0 text-white ">Directorio</a></li>
                <li className="nav-item mb-2 "><a className="nav-link p-0 text-white ">Estatutos</a></li>
              </ul>
            </div>

            <div className="col mb-3" style={{ backgroundColor: "rgb(0,0,0,0.3)" }}>
              <h5 className="text-white">Fondo de Fomento</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a className="nav-link p-0 text-white ">Quienes Somos</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-white ">Estructura</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-white ">Servicios</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-white ">Programa</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-white ">Normatividad</a></li>
              </ul>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p className=" my-auto" style={{backgroundColor:"rgb(0,0,0,0.3)"}}>© 2024 Fedepanela,Todos los derechos reservados.</p>
              <ul class="list-unstyled d-flex">


                <a class="socialContainer containerOne" href="https://web.facebook.com/fedepanelacol?_rdc=1&_rdr" target="blank">
                  <Facebook color="white" size={20} />
                </a>

                <a class="socialContainer containerTwo" target="blank" href="https://twitter.com/fedepanelacol">
                  <X color="white" size={40} />
                </a>

                <a class="socialContainer containerThree" target="blank" href="https://www.youtube.com/channel/UC3tY10hE6Dgrd6iQMunSHoA">
                  <Youtube color="white" size={20} />
                </a>

                <a class="socialContainer containerFour" target="blank" href="https://www.instagram.com/fedepanelacol/">
                  <Instagram color="white" size={20} />

                </a>
                <a class="socialContainer containerFive" target="blank" href="https://www.tiktok.com/@fedepanelacol">
                  <Tiktok color="white" size={20} />

                </a>




              </ul>
            </div>




          </footer>
        </div>
      </div>






    </>
  )
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Footer)