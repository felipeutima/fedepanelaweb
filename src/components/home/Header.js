import { connect } from "react-redux"
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "assets/img/banner1.png"
import banner2 from "assets/img/banner2.png"
import banner3 from "assets/img/banner3.png"
import fedelogo from "assets/img/section-cut-05.png"
import aexcid from "assets/img/aexcid.png"
import pselogo1 from "assets/img/pselogo1.png"
import CardHeader from "./CardHeader";
import Logosipa from "assets/img/logo_sipa.png"
import webmail from "assets/img/webmail-logo.svg"
import { useState, useEffect } from "react";

function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
      function handleResize() {
          setIsSmallScreen(window.innerWidth < 768);
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <>
      <div className="container-flex position-relative" style={{
        marginTop: "0px"

      }}>


        <Carousel>
          <Carousel.Item>
            <img
              src={banner1}
              className="img-fluid"
              width={"100%"}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={banner2}
              className="img-fluid"
              width={"100%"}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={banner3}
              className="img-fluid"
              width={"100%"}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>


        </Carousel>





        <div className= {`container-flex servicios b-example-divider   ${isSmallScreen? "py-2" :""}`} style={{
          backgroundColor: '#2b342e',
          position:  "",
          bottom: "0",
          width: "100%",

        }} >

          <div className="container py-2 ">
            <div className="row">
              <div className="col-md-3"></div>

              <div className="col-md-6">
                <div className="row">

                  <div className="col-md-4  col-4  d-flex justify-content-center">
                    <CardHeader img={pselogo1} link="https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=1001" />
                  </div>


                  <div className="col-md-4 col-4  d-flex justify-content-center">
                    <CardHeader img={Logosipa} link="http://www.sipa.org.co/wp/" />
                  </div>
                  <div className="col-md-4  col-4 d-flex justify-content-center">
                    <CardHeader img={webmail} link="https://www.fedepanela.org.co:2093/" />
                  </div>
              
                </div>
              </div>
              <div className="col-md-3"></div>


            </div>

          </div>

        </div>


      </div>
    </>


  );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Header)