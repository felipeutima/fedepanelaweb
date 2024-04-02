import { connect } from "react-redux";
import { get_news } from "redux/actions/news/news"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { get_new } from "redux/actions/news/news"
import { useParams } from "react-router-dom";
import DOMPurify from 'dompurify'

import { ArrowLeftCircle } from "react-bootstrap-icons";

function NoticiasDetail({ get_new, post }) {
    const params = useParams()
    const slug = params.slug
    useEffect(() => {
        window.scrollTo(0,0)
        get_new(slug)



    }, [])

    return (
        <Layout>
            <Navbar />
            {post ? <div className="container my-5">
                <h2 className="h2-title text-center"> {post.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
            </div> : "cargando....."}
            <div className="container">

                <a href="/noticias" style={{textDecoration:"none"}}>
                    <button>
                     
                        <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <ArrowLeftCircle color="white" size={"100%"} />
                        </svg>
                        <span className="mx-2">Ver más Noticias</span>
                    </button>
                </a>
            </div>




            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({

    post: state.news.post

})

export default connect(mapStateToProps, {
    get_new


})(NoticiasDetail)