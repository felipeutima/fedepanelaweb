
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import info from "assets/img/con-sab-kids.png"
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search } from "react-bootstrap-icons"


function PanelaKids() {

    const [isVisible, setIsVisible] = useState(false);

    const handleVisibilityChange = (isVisible) => {
        if (isVisible) {
            setIsVisible(true);
        }
    };

    return (
        <Layout>

            <Navbar />
            <div className="" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="container mx-auto ">
                    <img className="img-fluid rounded mb-5 mb-lg-0" width="100%" src={info} alt="..." />
                    <div className="d-flex justify-content-center my-4">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSftygTJqZ1eZBqFaenD0pK_mUgMag6dh6XA8xTqfBCA1nw8hA/viewform?embedded=true" width="640" height="1211" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
                    </div>
                </div>
            </div>






            <Footer />


        </Layout >
    )
}
export default PanelaKids