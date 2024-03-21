import { connect } from "react-redux";
import { get_news } from "redux/actions/news/news"
import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { get_categories } from "redux/actions/categories/categories";
import CategoriesHeader from "components/home/CategoriesHeader";

function NoticiasBlog({   
    get_categories,  
    categories,
    
    get_news }) {

    useEffect(() => {
        get_news()
        get_categories()

    }, [])

    return (
        <Layout>
            <Navbar />
            <CategoriesHeader categories={categories&&categories}/>
          
            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({

    news: state.news,
    categories: state.categories.categories


})

export default connect(mapStateToProps, {
    get_categories,
    get_news

})(NoticiasBlog)