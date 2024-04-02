import { connect } from "react-redux";
import { get_news } from "redux/actions/news/news"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { get_categories } from "redux/actions/categories/categories";
import CategoriesHeader from "components/home/CategoriesHeader";
import Card from 'react-bootstrap/Card';
import moment from 'moment'
import { Link } from "react-router-dom"
import { ArrowLeftCircle } from "react-bootstrap-icons";

function NoticiasBlog({
    get_categories,
    categories,

    get_news,
    news

}) {

    useEffect(() => {
        get_news()
        get_categories()

    }, [])

    return (
        <Layout>
            <Navbar />
            <h1 className="h1-title text-center my-3" >Noticias</h1>
            <CategoriesHeader categories={categories && categories} />

           

            <div className="container">
               

                <div className="row">
                    {news && news.map((post, index) => (
                        <div class="col-md-3 col-12 my-2 ">
                            <Link to={`/noticias/${post.slug}`} style={{ textDecoration: "none" }} >
                                <Card className="card-news text-black " style={{ background: "whitesmoke", height: "100%" }}>
                                    <img class="img-fluid" src={post.thumbnail} alt="" />
                                    <Card.Body>
                                        <Card.Title className="a-news  ">

                                            {post.title}
                                        </Card.Title>
                                        <p>{moment(post.published).format('LL')}</p>
                                        <p>{post.time_read ? `Tiempo de lectura: ${post.time_read}` : ''}</p>


                                    </Card.Body>
                                </Card>
                            </Link>

                        </div>
                    ))}
                </div>

            </div>




            <div className="container my-4">
                <a href="/" style={{ textDecoration: "none" }}>
                    <button>

                        <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <ArrowLeftCircle color="white" size={"100%"} />
                        </svg>
                        <span className="mx-2">Regresar</span>
                    </button>
                </a>

            </div>

            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({

    news: state.news.news,
    categories: state.categories.categories

})

export default connect(mapStateToProps, {
    get_categories,
    get_news

})(NoticiasBlog)