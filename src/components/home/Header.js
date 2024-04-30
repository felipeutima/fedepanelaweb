import { connect } from "react-redux"
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import { useState, useEffect } from "react";

function Header({ slides }) {
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
          {slides && slides.map((post, index) => (
            <Carousel.Item>
              <a href={post.url}>
                <img
                  src={post.thumbnail}
                  className="img-fluid"
                  width={"100%"}
                />
              </a>
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>


          ))}



        </Carousel>








      </div>
    </>


  );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(Header)