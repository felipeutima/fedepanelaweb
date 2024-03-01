import { connect } from "react-redux"
import { useEffect } from 'react'
import fedepng from "assets/img/muro.jpg"

function Layout({ children }) {

    return (
        <div className="container-glex" style={{
            backgroundImage: `url(${fedepng})`,
            backgroundSize: '100% auto',
            backgroundPosition: "center",
            backgroundRepeat: 'repeat',
            position: "relative",
            zIndex: 1


        }}>

            <div className="overlay" 
            style={{
                position: "absolute", zIndex: -1, top: 0, left: 0,
                width: "100%", height: "100%",
                backgroundColor: "rgba(49, 49, 54, 0.1)"
            }}>

            </div>
            <div style={{ position: "relative", zIndex: 2 }}>

                {children}
            </div>


        </div>
    )

}

const mapStateToProp = state => ({ //llama las variables de redux que quiero llamar


})
export default connect(mapStateToProp, {



})(Layout)