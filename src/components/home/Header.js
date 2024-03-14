import { connect } from "react-redux"
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "assets/img/banner1.png"
import banner2 from "assets/img/banner2.png"
import banner3 from "assets/img/banner3.png"

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





      


      </div>
    </>


  );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Header)