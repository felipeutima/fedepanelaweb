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
      }}>

        <div className="container" >
          <footer className="row  py-5  border-top" >
            <div className="col mb-6">
              <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                <img
                  src={fedepng}
                  width={130}

                  classNameName=""
                  alt="Fedepanela"
                />


              </a>

              <div className="row align-items-center">
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
                <p>6222066 - 6222655 - 6222788</p>                </div>
              </div>


            </div>


            <div className="col mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div className="col mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Features</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">Pricing</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">FAQs</a></li>
                <li className="nav-item mb-2"><a className="nav-link p-0 text-muted">About</a></li>
              </ul>
            </div>

            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
              <p>© 2024 Fedepanela,Todos los derechos reservados.</p>
              <ul class="list-unstyled d-flex">

                <div class="card-social">
                  <a  class="socialContainer containerOne">
                    <Facebook color="white" size={20} />
                  </a>

                  <a  class="socialContainer containerTwo">
                    <X color="white" size={40} />
                  </a>

                  <a  class="socialContainer containerThree">
                    <Youtube color="white" size={20} />
                  </a>

                  <a  class="socialContainer containerFour">
                    <Instagram color="white" size={20} />

                  </a>
                  <a  class="socialContainer containerFive">
                    <Tiktok color="white" size={20} />

                  </a>



                </div>
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