import { connect } from "react-redux"


function Layout({ children }) {

    return (
        <div className="container-flex" style={{
            backgroundImage: 'url("https://img.freepik.com/foto-gratis/fondo-textura-papel-blanco_23-2151025740.jpg?t=st=1715100032~exp=1715103632~hmac=9b84b4e7512657d29642c13a9622510cb2c714c4525769315b1d9f41c9787c2a&w=826")',
            backgroundSize: '   ',
            backgroundPosition: "center",
            backgroundRepeat: 'repeat',
            position: "relative",
            zIndex: 1


        }}>



            <div className="overlay" 
            style={{
                position: "absolute", zIndex: -1, top: 0, left: 0,
                width: "100%", height: "100%",
                backgroundColor: "rgba(0,91,36, 0)"
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