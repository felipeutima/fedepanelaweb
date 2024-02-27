import { connect } from "react-redux"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "assets/img/banner1.png"
import banner2 from "assets/img/banner2.png"
import banner3 from "assets/img/banner3.png"
import finagro from "assets/img/finagro.png"
import aexcid from "assets/img/aexcid.png"
import pselogo1 from "assets/img/pselogo1.png"
import CardHeader from "./CardHeader";
import Logosipa from "assets/img/logo_sipa.png"
import webmail from "assets/img/webmail-logo.svg"


function Header() {
  return (
    <>
      <div className="container-flex" style={{
        marginTop:"60px",
        backgroundColor: "rgba(0, 0, 0, .1)", border: "solid rgba(0, 0, 0, .15)",
        boxShadow: "inset 0 0.5em 1.5em rgba(0, 0, 0, .1), inset 0 0.125em 0.5em rgba(0, 0, 0, .15)", borderWidth: "1px 0"
      }}>
        <Carousel>
          <Carousel.Item>
            <img
              src={banner1}
              width={"100%"}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={banner2}
              width={"100%"}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={banner3}
              width={"100%"}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>





        <div className="container" style={{ paddingLeft: "170px", paddingRight: "170px" }}>
          <div className="row my-3">
            <div className="col-md-3 d-flex justify-content-center">
              <CardHeader img={pselogo1} />
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <CardHeader img={Logosipa} />
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <CardHeader img={webmail} />
            </div>
            <div className="col-md-3 d-flex justify-content-center">
              <CardHeader img={webmail} />
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