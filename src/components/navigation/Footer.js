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


        <div className="container" style={{ zIndex: 2 }} >
          <footer className="row  pt-5  border-top" >
            <div className="col-md-6 mb-6">
              <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                <img
                  src={fedepng}
                  width={130}

                  classNameName=""
                  alt="Fedepanela"
                />


              </a>
              <div className="r" style={{ backgroundColor: "rgb(0,0,0,0.3)", width: "70%" }}>

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
                    <p className="mb-0">6222066 - 6222655 - 6222788</p>
                  </div>





                </div>

              </div>
              <ul class="list-unstyled d-flex mt-2">


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


            <div className="col-12 col-md-6 mb-3" >
              

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.061506702177!2d-74.063003!3d4.680106000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9aec00dd5713%3A0x2d5fb2032d63c1f2!2sFedepanela!5e0!3m2!1ses-419!2sco!4v1708419526644!5m2!1ses-419!2sco" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p className=" my-auto" style={{ backgroundColor: "rgb(0,0,0,0.3)" }}>© 2024 Fedepanela,Todos los derechos reservados.</p>

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