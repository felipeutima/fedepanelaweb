import { connect } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
//import { useState } from 'react'
import 'assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react'
import { ArrowRightShort } from "react-bootstrap-icons";

function CategoriesHeader({ categories }) {

    const location = useLocation()


    // SEARCH
    const [term, setTerm] = useState("");
    const handleChange = (e) => {
        setTerm(e.target.value);
    };


    return (


        <div className="container my-4">

            <div className="">
                <ul
                    role="list"

                    className="mx-5 inline-flex "
                >
                    {
                        categories && categories.map((category, index) => (


                            <div className=" bg-white rounded p-2 mx-2 d-inline justify-content-between align-items-center" >

                                <a style={{fontSize:"20px"}}>
                                    <ArrowRightShort color="#05601f" />
                                    {category.name}
                                </a>

                            </div>
                        ))
                    }
                </ul>
            </div>


        </div>


    );
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {

})(CategoriesHeader)