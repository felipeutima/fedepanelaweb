import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"

import Contactojs from "components/home/Contactojs"
import Layout from "hocs/layouts/Layout"
import Trends from "components/home/Trends"
import { connect } from "react-redux";
import { useEffect } from "react"
import Modal from 'react-bootstrap/Modal';



function Contacto({
 
}) {


    useEffect(() => {
       


    }, [])

    return (
        <Layout>
            <Navbar />
            <h1 className="h1-title text-center my-4">Contacto</h1>
            <Contactojs />

        
            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({

   


})

export default connect(mapStateToProps, {

   

})(Contacto)