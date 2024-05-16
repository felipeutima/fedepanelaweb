import { connect } from "react-redux";
import { get_news, get_filtered, get_blog_list_page } from "redux/actions/news/news"
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
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import  SmallSetPagination  from "components/pagination/SmallSetPagination"


function NoticiasBlog({
    get_categories,
    categories,
    get_news,
    news,
    get_filtered,
    filtered,
    get_blog_list_page,count, next

}) {

    const [formData, setFormData] = useState({
        search: '',

    });

    const { search, } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


 

    const onSubmit = e => {

        e.preventDefault();
        let formData = new FormData()
        formData.append('search', search)

        let busqueda = formData.get('search')

        get_filtered(busqueda);


    }


    useEffect(() => {
        get_news()
        get_categories()

    }, [])

    return (
        <Layout>
            <Navbar />
            <div className="container">
                <h1 className="h1-title text-center my-3" >Noticias</h1>
                <div className="search-bar">
                    <Form onSubmit={e => onSubmit(e)} method="POST">
                        <Form.Group className="mb-3 mt-3">
                            <Form.Control value={search} name="search" onChange={e => onChange(e)} placeholder="Filtrar por " required />
                        </Form.Group>
                        <Button className="mx-2 btn-success" type="submit">Filtrar</Button>
                    </Form>
                </div>
                <CategoriesHeader categories={categories && categories} />

            </div>

            <div className="container">


                <div className="row">
                    {filtered ? <>
                        {filtered.filtered_posts.map((post, index) => (
                            <div class="col-md-3 col-12 my-2 ">
                                <Link to={`/noticias/${post.slug}`} style={{ textDecoration: "none" }} >
                                    <Card className="card-news text-black " style={{ background: "whitesmoke", height: "100%" }}>
                                    <img class="img-fluid" src={post.thumbnail===null? "https://cdn-icons-png.freepik.com/256/14441/14441518.png?uid=R102482777&ga=GA1.1.1530534781.1715822030&semt=ais_hybrid" : post.thumbnail} alt="" />
                                        <Card.Body>
                                            <Card.Title className="a-news  ">

                                                {post.title}
                                            </Card.Title>
                                            <p>{moment(post.published).format('LL')}</p>



                                        </Card.Body>
                                    </Card>
                                </Link>

                            </div>
                        ))}
                    </>

                        : <>




                            {news && news.map((post, index) => {
                            
                                return (
                                    <div key={index} class="col-md-3 col-12 my-2">
                                        <Link to={`/noticias/${post.slug}`} style={{ textDecoration: "none" }}>
                                            <Card className="card-news text-black" style={{ background: "whitesmoke", height: "100%" }}>
                                            <img class="img-fluid" src={post.thumbnail===null? "https://cdn-icons-png.freepik.com/256/14441/14441518.png?uid=R102482777&ga=GA1.1.1530534781.1715822030&semt=ais_hybrid" : post.thumbnail} alt="" />                                                <Card.Body>
                                                    <Card.Title className="a-news">
                                                        {post.title}
                                                    </Card.Title>
                                                    <p>{moment(post.published).format('LL')}</p>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </div>
                                );
                            })}
                        </>

                    }
                    <SmallSetPagination list_page={get_blog_list_page} list={news} count={count} />



                </div>
            </div>





            <div className="container my-4">
                <a href="/" style={{ textDecoration: "none" }}>
                    <button>

                        <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">

                            <ArrowLeftCircle color="white" size={"100%"} />
                        </svg>
                        <span className="mx-2">Regresar al Home</span>
                    </button>
                </a>

            </div>

            <Footer />
        </Layout >
    )
}
const mapStateToProps = state => ({

    news: state.news.news,
    next: state.news.previous,
    categories: state.categories.categories,
    filtered: state.news.filtered,
    count: state.news.count,


})

export default connect(mapStateToProps, {
    get_categories,
    get_news,
    get_filtered,
    get_blog_list_page

})(NoticiasBlog)