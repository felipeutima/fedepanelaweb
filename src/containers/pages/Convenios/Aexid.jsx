
import Layout from "hocs/layouts/Layout"

import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import ImageGallery from "react-image-gallery";
import convenio1 from "assets/img/convenio1.jpeg"
import convenio2 from "assets/img/convenio2.jpeg"
import convenio3 from "assets/img/convenio3.jpeg"
import convenio4 from "assets/img/convenio4.jpeg"
import convenio5 from "assets/img/convenio5.jpeg"
import convenio6 from "assets/img/convenio6.jpeg"
import convenio7 from "assets/img/convenio7.jpeg"
import convenio8 from "assets/img/convenio8.jpeg"
import s1 from "assets/img/s1.png"
import s2 from "assets/img/s2.png"
import s3 from "assets/img/s3.png"
import s4 from "assets/img/s4.png"
import s5 from "assets/img/s5.png"
import s6 from "assets/img/s6.png"
import s7 from "assets/img/s7.png"
import s8 from "assets/img/s8.png"
import aexcid from "assets/img/aexcid.png"
import fhre from "assets/img/fhre.png"
import Carousel from 'react-bootstrap/Carousel';
const images = [
    {
        original: convenio1,
        thumbnail: convenio1,
    },
    {
        original: convenio2,
        thumbnail: convenio2,
    },
    {
        original: convenio3,
        thumbnail: convenio3,
    },
    {
        original: convenio4,
        thumbnail: convenio4,
    },
    {
        original: convenio5,
        thumbnail: convenio5,
    },
    {
        original: convenio6,
        thumbnail: convenio6,
    },
    {
        original: convenio7,
        thumbnail: convenio7,
    },
    {
        original: convenio8,
        thumbnail: convenio8,
    },


];
const images2 = [
    {
        original: s1,
        thumbnail: s1,
    },
    {
        original: s2,
        thumbnail: s2,
    },
    {
        original: s3,
        thumbnail: s3,
    },
    {
        original: s4,
        thumbnail: s4,
    },
    {
        original: s5,
        thumbnail: s5,
    },
    {
        original: s6,
        thumbnail: s6,
    },
    {
        original: s7,
        thumbnail: s7,
    },
    {
        original: s8,
        thumbnail: s8,
    },


];

function Aexcid() {

    return (
        <Layout>

            <Navbar />


            <div className="container" style={{ marginTop: "50px" }}>

                <h1 className="text-center h1-title mt-5">Convenio con AEXCID y La FHRE </h1>

                <div className="row my-5">



                    <div className="col-md-6">

                   

                        <ImageGallery items={images2}  />
                        <div className="col-md-12 d-flex justify-content-center">
                            <img src={fhre} className="img-fluid" width={"20%"} />
                            <img src={aexcid} className="img-fluid" width={"40%"} />
                        </div>
                    </div>

                    <div className="col-md-6">
                    <h6 class="text-success text-uppercase" >Galería</h6>
                        <ImageGallery items={images}  />
                    </div>
                </div>



            </div>









            <Footer />


        </Layout >
    )
}
export default Aexcid