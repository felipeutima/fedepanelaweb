import { connect } from "react-redux";
import { get_news, get_filtered, get_blog_list_page } from "redux/actions/news/news"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { get_precios } from "redux/actions/boletines/boletines";

import { Link } from "react-router-dom"
import { ArrowLeftCircle } from "react-bootstrap-icons";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import SmallSetPagination from "components/pagination/SmallSetPagination"
import CardDownload from "components/Nuestra Fede/CardDownload"
import { motion } from 'framer-motion';

function PreciosBlog({
    get_precios, precios


}) {
    useEffect(() => {
        get_precios()


    }, [])


    return (
        <Layout>
            <Navbar />
            <div className="container" style={{ marginTop: "100px", marginBottom: "50px" }}>

                <h1 className="text-center h1-title mt-5">Boletines de precios</h1>
                <div className="row mt-5 px-5">

                {precios && precios.map((post, index) => {
                            
                            return (
                                <div className="col-md-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }} // Inicia con opacidad 0 y posición x -100
                                    animate={{ opacity: 1, x: 0 }} // Anima a opacidad 1 y posición x 100
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                >
                                    <CardDownload titulo={post.titulo} doc={post.document} cuerpo={post.description} />
                                </motion.div>
                            </div>
                            );
                        })}

           



                </div>


            </div>











            <Footer />
        </Layout >
    )
}
const mapStateToProps = state => ({

    precios: state.boletines.precios,

})

export default connect(mapStateToProps, {
    get_precios

})(PreciosBlog)